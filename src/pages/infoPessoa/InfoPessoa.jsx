import React, { useEffect } from "react"
import { Col, Row } from 'antd';
import { getEnderecos } from "../../store/actions/EnderecoActions"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import MapEndereco from "./components/mapEndereco/MapEndereco";

function InfoPessoa({ enderecos, dispatch }) {
  const { idPessoa } = useParams()

  useEffect(() => {
    getEnderecos(idPessoa, dispatch)
  }, [])

  useEffect(() => {
    return()=>{
      dispatch({type: 'LIMPA_ENDERECO'})
    }
  }, [])

  return (
    <div>
      <Row>
        <Col span={18} push={6} style={{ backgroundColor: 'blue' }}>
          Coluna Contatos
        </Col>
        <Col span={6} pull={18}>
          <MapEndereco idPessoa={idPessoa}/>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  enderecos: state.enderecoReducer.enderecos,
  endereco: state.enderecoReducer.endereco
});
export default connect(mapStateToProps)(InfoPessoa)