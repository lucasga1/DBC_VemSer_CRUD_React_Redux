import { Formik } from 'formik';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getCep, handleCreateAddress, editEndereco, handleEditaEndereco } from '../../../../store/actions/EnderecoActions';
import * as s from './Forms.styled';
import { useParams } from 'react-router-dom';

function FormCriaEndereco({ isUpdateEnd, endereco, cep, loading, dispatch }) {

    const { idEndereco, idPessoa } = useParams()
    console.log(idPessoa)
    useEffect(() => {
        return()=>{
          dispatch({type: 'LIMPA_ENDERECO'})
        }
      }, [])

    useEffect(() => {
        if (idEndereco) {
            editEndereco(idEndereco, dispatch)
        }  
        else {
            dispatch({type: 'REGISTER_ENDERECO'})
        }
    }, []);    

    if(loading) {
        return (<h1>Carregando</h1>)
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
                    isUpdateEnd ? handleEditaEndereco(idEndereco, enviaApi, idPessoa) : handleCreateAddress(enviaApi, idPessoa)
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor='cep'>CEP:</label>
                        <input
                            name='cep'
                            type='text'
                            placeholder='Digite o cep'
                            onChange={props.handleChange}
                            onBlur={() => getCep(props.values.cep, dispatch)}
                            value={props.values.cep}
                        />
                        <br />

                        <label htmlFor='logradouro'>Logradouro:</label>
                        <input
                            name='logradouro'
                            type='text'
                            placeholder='Digite o logradouro'
                            onChange={props.handleChange}
                            value={cep.logradouro}
                        />
                        <br />


                        <label htmlFor='bairro'>Bairro:</label>
                        <input
                            name='bairro'
                            type='text'
                            placeholder='Digite o bairro'
                            value={cep.bairro}
                        />
                        <br />

                        <label htmlFor='cidade'>Cidade:</label>
                        <input
                            name='cidade'
                            type='text'
                            placeholder='Digite o cidade'
                            onChange={props.handleChange}
                            value={cep.localidade}
                        />
                        <br />

                        <label htmlFor='estado'>Estado:</label>
                        <input
                            name='estado'
                            type='text'
                            placeholder='Digite o estado'
                            onChange={props.handleChange}
                            value={cep.uf}
                        />
                        <br />

                        <label htmlFor='pais'>Pais:</label>
                        <input
                            name='pais'
                            type='text'
                            placeholder='Digite o pais'
                            onChange={props.handleChange}
                            value={props.values.pais}
                        />
                        <br />

                        <label htmlFor='numero'>Número:</label>
                        <input
                            name='numero'
                            type='text'
                            placeholder='Digite o numero'
                            onChange={props.handleChange}
                            value={props.values.numero}
                        />
                        <br />

                        <label htmlFor='complemento'>Complemento:</label>
                        <input
                            name='complemento'
                            type='text'
                            placeholder='Digite o complemento'
                            onChange={props.handleChange}
                            value={props.values.complemento}
                        />
                        <br />

                        <label htmlFor='tipo'>Tipo:</label>
                        <input
                            name='tipo'
                            type='text'
                            placeholder='Digite o tipo'
                            onChange={props.handleChange}
                            value={props.values.tipo}
                        />
                        <br />
                        <br />
                        <button type='submit'>{isUpdateEnd ? 'Atualizar endereco' : 'Cadastrar endereço'}</button>
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