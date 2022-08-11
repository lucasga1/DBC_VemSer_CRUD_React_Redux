import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleDelete, navegaEditEnd } from '../../../../store/actions/EnderecoActions';

import * as s from './MapEndereco.styled'

function MapEndereco({ idPessoa, enderecos }) {

    const navigate = useNavigate();

    return (
        <s.Container>
            <h1>Endereços</h1>
            <nav>
                <ul>
                    {enderecos.map(({ tipo, logradouro, numero, complemento, cep, cidade, estado, pais, idEndereco }) => (
                        <div key={idEndereco}>
                            <div>
                                <li><span>Tipo:</span>{tipo}</li>
                                <li><span>Logradouro:</span>{logradouro}</li>
                                <li><span>Número:</span>{numero}</li>
                                <li><span>Complemento:</span>{complemento}</li>
                            </div>
                            <div>
                                <li><span>Cidade:</span>{cidade}</li>
                                <li><span>CEP:</span>{cep.replace(/\D/g, '')
                                    .replace(/(\d{5})(\d)/, '$1-$2')
                                    .replace(/(-\d{3})\d+?$/, '$1')}</li>
                                <li><span>Estado:</span>{estado}</li>
                                <li><span>País:</span>{pais}</li>
                            </div>
                            <div>
                                <button onClick={() => navegaEditEnd(idEndereco, idPessoa, navigate)}>Atualizar</button>
                                <button onClick={() => handleDelete(idEndereco)}>Excluir</button>
                            </div>
                        </div>
                    ))}
                </ul>
            </nav>
        </s.Container>
    )
}


const mapStateToProps = (state) => ({
    enderecos: state.enderecoReducer.enderecos,
    endereco: state.enderecoReducer.endereco
});
export default connect(mapStateToProps)(MapEndereco);