import { useEffect } from "react";
import { handleDelete, getPessoas } from "../../store/actions/PessoasActions";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from "moment";
import * as S from "./Pessoa.styled";
import Loading from "../../components/loading/Loading";

function Pessoa({ pessoas, dispatch, loading }) {

  const navigate = useNavigate()

  const setup = () => {
    getPessoas(dispatch)
  }

  useEffect(() => {
        setup()
  }, [])
  
  useEffect(() => {
    return () => {
      dispatch({ type: 'LIMPA_PESSOA' })
    }
  }, [])
  
  const deletePessoa = (idPessoa) => {
    handleDelete(idPessoa)
    getPessoas(dispatch)
  }
  
  const navegarFormEditPessoa = (idPessoa) => {
    navigate(`/editar-pessoa/${idPessoa}`)
  }

  const navegarFormCriaPessoa = () => {
    navigate(`/criar-pessoa`);
  }
  
  const navegarFormContato = (idPessoa, nome) => {
    navigate(`/criar-contato/${idPessoa}/${nome}`)
  }

  const navegarFormEndereco = (idPessoa, nome) => {
    navigate(`/criar-endereco/${idPessoa}/${nome}`)
  }

  if (loading) {
    return (<Loading />)
  }

  return (
    <S.Container>
      <S.DivPessoas>
        <S.DivH1>
          <h1>Lista de Pessoas</h1>
          <button onClick={navegarFormCriaPessoa}>Cadastrar nova pessoa</button>
        </S.DivH1>
        <div>
          {pessoas.map(({ nome, dataNascimento, cpf, email, idPessoa }) => (
            <S.Pessoas key={idPessoa}>
              <div>
                <div onClick={() => navigate(`/info-pessoa/${idPessoa}/${nome}`)}>
                  <div>
                    <li><span>Nome:</span> {nome}</li>
                  </div>
                  <div>
                    <li><span>CPF:</span> {cpf.replace(/\D/g, '')
                      .replace(/(\d{3})(\d)/, '$1.$2')
                      .replace(/(\d{3})(\d)/, '$1.$2')
                      .replace(/(\d{3})(\d)/, '$1-$2')
                      .replace(/(-\d{2})\d+?$/, '$1')}</li>
                    <li><span>Data de Nasc.:</span> {moment(dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}</li>
                    <li><span>E-mail:</span> {email}</li>
                  </div>
                </div>
                <div>
                  <button onClick={() => navegarFormEditPessoa(idPessoa)}>Atualizar</button>
                  <button onClick={() => deletePessoa(idPessoa)}>Excluir</button>
                  <button onClick={() => navegarFormContato(idPessoa, nome)}>Criar Contato</button>
                  <button onClick={() => navegarFormEndereco(idPessoa, nome)}>Criar Endereço</button>
                </div>
              </div>
            </S.Pessoas>
          ))}
        </div>

      </S.DivPessoas>
    </S.Container>

  )
}
const mapStateTopProps = state => ({
  pessoas: state.pessoasReducer.pessoas,
  pessoa: state.pessoasReducer.pessoa,
  loading: state.pessoasReducer.loading
})

export default connect(mapStateTopProps)(Pessoa)