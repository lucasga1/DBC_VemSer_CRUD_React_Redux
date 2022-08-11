import { Formik } from 'formik';
import * as s from './Forms.styled';
import { handleCreateContato } from '../../../../store/actions/ContatosActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../../../components/loading/Loading';
import MaskedInput from "react-text-mask";
import { maskTelefone } from '../../../../consts';
import { Toaster } from 'react-hot-toast';

function FormCriaContato({ loading }) {

  const { idPessoa, nome } = useParams()

  if (loading) {
    return (<Loading />)
  }
  return (
    <s.Container style={{ height: '100vh' }}>
      <h1>Formulário de contatos</h1>
      <Formik
        initialValues={{
          idPessoa: '',
          tipoContato: '',
          telefone: '',
          descricao: '',
        }}
        onSubmit={values => {
          const contatoApi = {
            idPessoa: idPessoa,
            tipoContato: values.tipo,
            telefone: values.telefone.replace(/[^0-9]/gi, ''),
            descricao: values.descricao
          }
          console.log(contatoApi)
          handleCreateContato(contatoApi, idPessoa, nome)

        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor='tipo'>Tipo:</label>
            <select
              name="tipo"
              id="tipo"
              type="select"
              onChange={props.handleChange}
            >
              <option value={props.tipoContato}></option>
              <option value={props.tipoContato}>COMERCIAL</option>
              <option value={props.tipoContato}>RESIDENCIAL</option>
            </select>
            <br />

            <label htmlFor='telefone'>Telefone:</label>
            <MaskedInput
              mask={maskTelefone}
              name="telefone"
              id="telefone"
              type="text"
              placeholder='Digite seu número'
              onChange={props.handleChange}
              value={props.telefone}
            />
            <br />


            <label htmlFor='descricao'>Descricao:</label>
            <input
              name='descricao'
              type='text'
              placeholder='Digite a descrição do contato'
              onChange={props.handleChange}
              value={props.values.descricao}
            />
            <br />
            <br />
            <button type='submit'>Cadastrar contato</button>
            <Toaster />
          </form>
        )}
      </Formik>
    </s.Container>
  )
}

const mapStateToProps = state => ({
  loading: state.contatosReducer.loading,
})
export default connect(mapStateToProps)(FormCriaContato);


