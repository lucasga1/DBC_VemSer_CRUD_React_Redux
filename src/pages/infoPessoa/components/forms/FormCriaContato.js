import { Formik } from 'formik';
import * as s from './Forms.styled';
import { handleCreateContato } from '../../../../store/actions/ContatosActions';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../../../components/loading/Loading';

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
            idPessoa: parseInt(idPessoa),
            tipoContato: values.tipo,
            telefone: values.telefone,
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
              placeholder="Tipo"
              onChange={props.handleChange}
            >
              <option value={props.tipoContato}></option>
              <option value={props.tipoContato}>COMERCIAL</option>
              <option value={props.tipoContato}>RESIDENCIAL</option>
            </select>
            <br />

            <label htmlFor='telefone'>Telefone:</label>
            <input
              name='telefone'
              type='text'
              placeholder='Digite o telefone'
              onChange={props.handleChange}
              value={props.values.telefone}
            />
            <br />


            <label htmlFor='descricao'>Descricao:</label>
            <input
              name='descricao'
              type='text'
              placeholder='Digite o descricao'
              onChange={props.handleChange}
              value={props.values.descricao}
            />
            <br />
            <br />
            <button>Cadastrar contatos</button>
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


