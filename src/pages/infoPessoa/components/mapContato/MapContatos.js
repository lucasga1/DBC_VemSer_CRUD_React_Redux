import { connect } from "react-redux";
import { Container } from "./MapContatos.styled";
import { handleDelete, navegaEditContato } from "../../../../store/actions/ContatosActions";
import { useParams, useNavigate } from "react-router-dom";

function MapContatos({ contatos }) {
  const navigate = useNavigate()

  const { idPessoa, nome } = useParams() 

  return (
    <Container>
      <h1>Contatos</h1>
      <div>
        <nav>
          <ul>
            {contatos.map(({ idContato, telefone, tipoContato, descricao }) =>
              <div key={idContato}>
                <div>
                  <li><span>Telefone:</span>{telefone}</li>
                  <li><span>Tipo de Contato:</span>{tipoContato}</li>
                  <li><span>Descrição:</span>{descricao}</li>
                </div>
                <div>
                  <button>Atualizar</button>
                  <button onClick={()=> handleDelete(idContato)}>Excluir</button>
                </div>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </Container>
  )
}

const mapStateToProps = state => ({
  contatos: state.contatosReducer.contatos
})

export default connect(mapStateToProps)(MapContatos);