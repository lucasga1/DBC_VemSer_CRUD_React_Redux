import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCep, handleCreateAddress, editEndereco, handleEditaEndereco } from '../../../../store/actions/EnderecoActions';
import * as s from './Forms.styled';
import { useParams } from 'react-router-dom';
import Loading from '../../../../components/loading/Loading';
import MaskedInput from "react-text-mask";
import { maskCep } from "../../../../consts";
import { Toaster } from 'react-hot-toast';

function FormCriaEndereco({ isUpdateEnd, endereco, cep, loading, dispatch }) {

    const { idEndereco, idPessoa, nome } = useParams()
    console.log(idPessoa)

    useEffect(() => {
        return () => {
            dispatch({ type: 'LIMPA_ENDERECO' })
        }
    }, [])

    useEffect(() => {
        if (idEndereco) {
            editEndereco(idEndereco, dispatch)
        }
        else {
            dispatch({ type: 'REGISTER_ENDERECO' })
        }
    }, []);

    if (loading) {
        return (<Loading />)
    }

    return (
        <s.Container>
            <h1>Formulário de endereços</h1>
            <Formik
                initialValues={{
                    tipo: endereco ? endereco.tipo : '',
                    logradouro: endereco ? endereco.logradouro : '',
                    bairro: endereco ? endereco.bairro : '',
                    numero: endereco ? endereco.numero : '',
                    complemento: endereco ? endereco.complemento : '',
                    cep: endereco ? endereco.cep : '',
                    cidade: endereco ? endereco.cidade : '',
                    estado: endereco ? endereco.estado : '',
                    pais: endereco ? endereco.pais : ''
                }}
                onSubmit={values => {
                    const enviaApi = {
                        idPessoa: parseInt(idPessoa),
                        tipo: values.tipo.toUpperCase(),
                        logradouro: cep.logradouro,
                        numero: values.numero,
                        complemento: values.complemento,
                        cep: values.cep.replace(/[^0-9]/gi, ''),
                        cidade: cep.localidade,
                        estado: cep.uf,
                        pais: values.pais
                    }
                    isUpdateEnd ? handleEditaEndereco(idEndereco, enviaApi, idPessoa, nome) : handleCreateAddress(enviaApi, idPessoa, nome)
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor='cep'>CEP*:</label>
                        <MaskedInput
                            mask={maskCep}
                            id="cep"
                            name="cep"
                            type="text"
                            placeholder="CEP"
                            onBlur={() => getCep(props.values.cep, dispatch)}
                            onChange={props.handleChange}
                            value={props.values.cep}
                        />
                        <label htmlFor='logradouro'>Logradouro*:</label>
                        <input
                            name='logradouro'
                            type='text'
                            placeholder='Digite o logradouro'
                            onChange={props.handleChange}
                            value={cep.logradouro}
                        />
                        <label htmlFor='bairro'>Bairro:</label>
                        <input
                            name='bairro'
                            type='text'
                            placeholder='Digite o bairro'
                            value={cep.bairro}
                        />
                        <label htmlFor='cidade'>Cidade*:</label>
                        <input
                            name='cidade'
                            type='text'
                            placeholder='Digite o cidade'
                            onChange={props.handleChange}
                            value={cep.localidade}
                        />
                        <label htmlFor='estado'>Estado*:</label>
                        <input
                            name='estado'
                            type='text'
                            placeholder='Digite o estado'
                            onChange={props.handleChange}
                            value={cep.uf}
                        />
                        <label htmlFor='pais'>Pais*:</label>
                        <input
                            name='pais'
                            type='text'
                            placeholder='Digite o pais'
                            onChange={props.handleChange}
                            value={props.values.pais}
                        />
                        <label htmlFor='tipo'>Tipo*:</label>
                        <select
                            name="tipo"
                            id="tipo"
                            type="select"
                            placeholder="Tipo"
                            onChange={props.handleChange}
                        >
                            <option value={props.tipoContato}></option>
                            <option value={props.tipoContato}>COMERCIAL</option>
                            <option value={props.tipoContato}>RESIDENCIAL</option>
                        </select>
                        <label htmlFor='numero'>Número*:</label>
                        <input
                            name='numero'
                            type='text'
                            placeholder='Digite o numero'
                            onChange={props.handleChange}
                            value={props.values.numero}
                        />
                        <label htmlFor='complemento'>Complemento:</label>
                        <input
                            name='complemento'
                            type='text'
                            placeholder='Digite o complemento'
                            onChange={props.handleChange}
                            value={props.values.complemento}
                        />
                        <button type='submit'>{isUpdateEnd ? 'Atualizar endereco' : 'Cadastrar endereço'}</button>
                        <Toaster />
                    </form>
                )}
            </Formik>
        </s.Container>
    )
}

const mapStateToProps = state => ({
    cep: state.enderecoReducer.cep,
    loading: state.enderecoReducer.loading,
    endereco: state.enderecoReducer.endereco,
    isUpdateEnd: state.enderecoReducer.isUpdateEnd
});

export default connect(mapStateToProps)(FormCriaEndereco)