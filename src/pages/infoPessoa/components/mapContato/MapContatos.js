import { connect } from "react-redux"
import { Container } from "./MapContatos.styled";

function MapContatos({ contatos }) {
  return (
    <Container>
      <h1>Contatos</h1>
      <div>
        <nav>
          <ul>
            {contatos.map(({ idContato, idPessoa, telefone, tipoContato, descricao }) =>
              <div key={idContato}>
                <div>
                  <li><span>Telefone:</span>{telefone}</li>
                  <li><span>Tipo de Contato:</span>{tipoContato}</li>
                  <li><span>Descrição:</span>{descricao}</li>
                  <li><span>IdPessoa:</span>{idPessoa}</li>
                </div>
                <div>
                  <button>Atualizar</button>
                  <button>Excluir</button>
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