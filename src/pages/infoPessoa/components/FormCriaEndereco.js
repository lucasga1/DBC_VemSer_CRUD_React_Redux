import { Formik } from 'formik';
import { connect } from 'react-redux';
import { getCep } from '../../../store/actions/InfoPessoaActions';
import handleCreateAddress from '../../../store/actions/InfoPessoaActions'
import * as s from './Forms.styled';
import { useParams } from 'react-router-dom';

function FormCriaEndereco({ cep, loading, dispatch }) {

    const { idPessoa, idEndereco } = useParams()
    
    return (
        <s.Container>
            <h1>Formulário de endereços</h1>
            <Formik
                initialValues={{
                    tipo: '',
                    logradouro: cep.logradouro,
                    numero: '',
                    complemento: '',
                    cep: '',
                    cidade: cep.localidade,
                    estado: cep.uf,
                    pais: ''
                }}
                onSubmit={values => {
                    console.log(values)
                    console.log(idPessoa)
                    handleCreateAddress(values, idPessoa)
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
                        <button type='submit'>Cadastrar endereço</button>
                    </form>
                )}
            </Formik>
        </s.Container>
    )
}

const mapStateToProps = state => ({
    cep: state.infoPessoaReducer.cep,
    loading: state.infoPessoaReducer.loading
});

export default connect(mapStateToProps)(FormCriaEndereco)