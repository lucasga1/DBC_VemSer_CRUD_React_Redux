import { useEffect } from "react"
import { getEnderecos } from "../../store/actions/InfoPessoaActions"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"

function InfoPessoa({ enderecos, dispatch }) {
  console.log(enderecos)
  const { idPessoa } = useParams()
  console.log(idPessoa)

  useEffect(() => {
    getEnderecos(idPessoa, dispatch)
  }, [])

  return (
    <div>
      {enderecos.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
        <>
          <div>{tipo}</div>
          <div>{logradouro}</div>
          <div>{numero}</div>
          <div>{complemento}</div>
          <div>{cidade}</div>
          <div>{cep}</div>
          <div>{estado}</div>
          <div>{pais}</div>
          <div>{idEndereco}</div>
          <br />
        </>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  enderecos: state.infoPessoaReducer.enderecos,
  endereco: state.infoPessoaReducer.endereco
});


export default connect(mapStateToProps)(InfoPessoa)