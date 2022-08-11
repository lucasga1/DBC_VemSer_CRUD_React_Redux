import { handleCreateUser, handleEditPessoa, editPessoa } from "../../../store/actions/PessoasActions";
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { connect } from 'react-redux'
import * as s from './CreatePessoa.styled'
import Loading from "../../../components/loading/Loading";

function CreatePessoa({ pessoa, dispatch, loading, isUpdate }) {

    const { idPessoa } = useParams()
    const navigate = useNavigate()
    
    useEffect(() => {
        return()=>{
          dispatch({type: 'LIMPA_PESSOA'})
        }
      }, [])

    useEffect(() => {
        if (idPessoa) {
            editPessoa(idPessoa, dispatch)
        }  
        else {
            dispatch({type: 'REGISTER_PESSOA'})
        }
    }, []);

    if (loading) {
        return (<Loading />)
    }
    return (
        <s.Container>
            <Formik
                initialValues={{
                    nome: pessoa ? pessoa.nome : '',
                    dataNascimento: pessoa ? pessoa.dataNascimento : '',
                    cpf: pessoa ? pessoa.cpf : '',
                    email: pessoa ? pessoa.email : '',
                }}
                onSubmit={values => {
                    isUpdate ? handleEditPessoa(values, idPessoa, navigate) : handleCreateUser(values, navigate)
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>

                        <label htmlFor="nome">Nome:</label>
                        <input
                            name="nome"
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={props.handleChange}
                            value={props.values.nome}
                        />
                        <br />
                        <label htmlFor="dataNascimento">Data de nascimento:</label>
                        <input
                            name="dataNascimento"
                            type="text"
                            placeholder="Digite sua data de nascimento"
                            onChange={props.handleChange}
                            value={props.values.dataNascimento}
                        />
                        <br />
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            name="cpf"
                            type="text"
                            placeholder="Digite seu cpf"
                            onChange={props.handleChange}
                            value={props.values.cpf}
                        />
                        <br />
                        <label htmlFor="email">E-mail:</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Digite seu email"
                            onChange={props.handleChange}
                            value={props.values.email}
                        />
                        <br />
                        <button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>

                    </form>
                )}
            </Formik>
        </s.Container>
    )
}

const mapStateToProps = (state) => ({
    pessoa: state.pessoasReducer.pessoa,
    loading: state.pessoasReducer.loading,
    isUpdate: state.pessoasReducer.isUpdate
})

export default connect(mapStateToProps)(CreatePessoa)