import { connect } from "react-redux";
import { apiDbc, apiCep} from "../../api";

export const getEnderecos = async (idPessoa, dispatch) => {
    console.log(idPessoa)
    try {
        const { data } = await apiDbc.get(`/endereco/retorna-por-id-pessoa?idPessoa=${idPessoa}`)
        const enderecos = {
            type: "SET_ENDERECOS_ID_PESSOA",
            enderecos: data
        }
        dispatch(enderecos)
    } catch (error) {
        console.log(error)
    }
}

export const getCep = async (cep, dispatch) => {
    try {
        const { data } = await apiCep.get(`/${cep}/json/`)
        const dataCep = {
            type: "SET_CEP",
            cep: data
        }
        dispatch(dataCep)
        console.log(dataCep)
    } catch (error) {
        console.log(error)
    }
}

const handleCreateAddress = async (values, id) => {
    try {
        await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values)
        window.location.href = `/pessoas`
    } catch (error) {
        console.log(error)
    }
}

const mapStateToProps = (state) => ({
    endereco: state.infoPessoaReducer.endereco
});

export default connect(mapStateToProps);