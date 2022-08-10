import { Formik } from 'formik';
import * as s from './Forms.styled';

function FormCriaContato() {

  return (
    <s.Container style={{height: '100vh'}}>
      <h1>Formulário de contatos</h1>
      <Formik
        initialValues={{
          idPessoa: '',
          tipoContato: '',
          telefone: '',
          descricao: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor='tipo'>Tipo:</label>
            <select
              name="tipoContato"
              id="tipoContato"
              type="text"
              onChange={props.values.handleChange}
            >
              <option value={props.values.tipoContato}></option>
              <option value={props.values.tipoContato}>COMERCIAL</option>
              <option value={props.values.tipoContato}>RESIDENCIAL</option>
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

export default FormCriaContato;


