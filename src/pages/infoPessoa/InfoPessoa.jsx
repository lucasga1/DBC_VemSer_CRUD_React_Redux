import { useEffect } from "react"
import { getEnderecos } from "../../store/actions/EnderecoActions";
import { getContatos } from "../../store/actions/ContatosActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import MapEndereco from "./components/mapEndereco/MapEndereco";
import MapContatos from "./components/mapContato/MapContatos";
import { Container } from "./InfoPessoa.styled"

function InfoPessoa({ dispatch }) {
  
  const { idPessoa, nome } = useParams()

  useEffect(() => {
    getEnderecos(idPessoa, dispatch)
    getContatos(idPessoa, dispatch)
  }, [])

  useEffect(() => {
    return () => {
      dispatch({ type: 'LIMPA_ENDERECO' })
    }
  }, [])

  return (
    <>
      <h1 
      style={
        {
          fontSize: '24px',
          textAlign: 'center',
          margin: '15px 0',
        }}
      >{`Informações de ${nome}`}</h1>
      <Container>
        <div span={18} push={6}>
          <MapContatos />
        </div>
        <div span={6} pull={18}>
          <MapEndereco idPessoa={idPessoa} />
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => ({
  enderecos: state.enderecoReducer.enderecos,
  endereco: state.enderecoReducer.endereco
});
export default connect(mapStateToProps)(InfoPessoa)