import React from "react";
import { connect } from "react-redux";
import { handleLogin, handleCreateUser, criarNovoLogin } from '../../store/actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import { Form, Field, Formik } from "formik";
import { FaEarlybirds } from "react-icons/fa";
import { Inputs, Title, Subscribe, Logo, Dashboard, SubscribeDash, Container, Div, Link, SpanSignup, SpanForgot, Errors, BgBody } from "./Login.styled";
import * as Yup from 'yup';

function Login({ auth, dispatch }) {
  const navigate = useNavigate()

  const mudarParaCriarLogin = () => {
    criarNovoLogin(dispatch)
  }

  
  const SignupSchema = Yup.object().shape({
    login: Yup.string()
      .required('Preenchimento Obrigatório'),
    senha: Yup.string()
      .min(2, 'Muito curta')
      .max(50, 'Muito longo')
      .required('Preenchimento Obrigatório')
  })

  return (
    <BgBody>
      <Container>
        <Dashboard>
          <Logo><FaEarlybirds style={{ fontSize: '40px', color: '#3751FF' }} /></Logo>
          <SubscribeDash>Seja bem vindo!</SubscribeDash>
        </Dashboard>
        <Div>
          <Title>SISTEMA CRUD</Title>
          <Subscribe>Create - Read - Update - Delete</Subscribe>
        </Div>
        <Div>
          <Formik
            initialValues={{
              login: '',
              senha: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              auth.isLogin ? handleLogin(values, dispatch, navigate) : handleCreateUser(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Inputs>
                  <label htmlFor="login">USUÁRIO*</label>
                  <Field name="login" placeholder="Email address" />
                  <Errors>
                    {errors.login && touched.login ? (<p>{errors.login}</p>) : null}
                  </Errors>
                  <label htmlFor="password">SENHA*<SpanForgot>Esqueceu sua senha?</SpanForgot></label>
                  <Field name="senha" type="password" placeholder="Password" />
                  <Errors>
                    {errors.senha && touched.senha ? (<p>{errors.senha}</p>) : null}
                  </Errors>
                </Inputs>
                <button type="submit" width="380" style={{ cursor: 'pointer' }}>{auth.isLogin ? 'Login' : 'Criar novo login'}</button>
              </Form>
            )}
          </Formik>
          <SpanSignup>{auth.isLogin ? 'Não possui cadastro?' : ''}
            <Link onClick={mudarParaCriarLogin} style={{ cursor: 'pointer' }}>{auth.isLogin ? 'Cadastre-se aqui' : ''}</Link>
          </SpanSignup>
        </Div>
      </Container>
    </BgBody>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Login);

//Dependencias a serem instaladas react-redux, redux, formic, axios, styled-components, react-icons, moment, react-router-dom
