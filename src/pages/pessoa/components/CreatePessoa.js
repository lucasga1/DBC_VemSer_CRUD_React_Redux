import { handleCreateUser, handleEditPessoa, editPessoa } from "../../../store/actions/PessoasActions";
import { Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { connect } from 'react-redux';
import * as s from './CreatePessoa.styled';
import Loading from "../../../components/loading/Loading";
import { maskCpf, maskDate } from '../../../consts';
import moment from "moment";
import MaskedInput from 'react-text-mask';
import { Toaster } from 'react-hot-toast';

function CreatePessoa({ pessoa, dispatch, loading, isUpdate }) {

    const { idPessoa } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        return () => {
            dispatch({ type: 'LIMPA_PESSOA' })
        }
    }, [])

    useEffect(() => {
        if (idPessoa) {
            editPessoa(idPessoa, dispatch)
        }
        else {
            dispatch({ type: 'REGISTER_PESSOA' })
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
                    dataNascimento: pessoa ? moment(pessoa.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY') : '',
                    cpf: pessoa ? pessoa.cpf : '',
                    email: pessoa ? pessoa.email : '',
                }}
                onSubmit={values => {
                    const newValues = {
                        nome: values.nome,
                        dataNascimento: moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD'),
                        cpf: values.cpf.replace(/[^0-9]/gi, ''),
                        email: values.email
                    }
                    isUpdate ? handleEditPessoa(newValues, idPessoa, navigate) : handleCreateUser(newValues, navigate)
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
                        <label htmlFor="dataNascimento">Data de nascimento:</label>
                        <MaskedInput
                            mask={maskDate}
                            name="dataNascimento"
                            type="text"
                            placeholder='Digite sua data de nascimento'
                            value={props.values.dataNascimento}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <label htmlFor="cpf">CPF:</label>
                        <MaskedInput
                            mask={maskCpf}
                            name="cpf"
                            type="text"
                            placeholder='Digite seu CPF'
                            value={props.values.cpf}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                        <label htmlFor="email">E-mail:</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Digite seu email"
                            onChange={props.handleChange}
                            value={props.values.email}
                        />
                        <button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
                        <Toaster />
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