import { connect } from "react-redux";
import { Container } from "./MapContatos.styled";
import { handleDelete } from "../../../../store/actions/ContatosActions";

function MapContatos({ contatos }) {

  return (
    <Container>
      <h1>Contatos</h1>
      <div>
        <nav>
          <ul>
            {contatos.map(({ idContato, telefone, tipoContato, descricao }) =>
              <div key={idContato}>
                <div>
                  <li><span>Tipo de Contato:</span>{tipoContato}</li>
                  <li><span>Telefone:</span>{telefone}</li>
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