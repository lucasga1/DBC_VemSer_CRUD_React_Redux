import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { apiDbc, apiCep } from "../../api";

export const getEnderecos = async (idPessoa, dispatch) => {
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

export const handleCreateAddress = async (values, id, nome) => {
    try {
        await apiDbc.post(`/endereco/{idPessoa}?idPessoa=${id}`, values)
        window.location.href = `/info-pessoa/${id}/${nome}`
    } catch (error) {
        console.log(error)
    }
}

export const handleDelete = async (idEndereco) => {
    try {
        await apiDbc.delete(`/endereco/${idEndereco}`)
    } catch (error) {
        console.log(error)
    }
};

export const handleEditaEndereco = async (IdEndereco, values, idPessoa, nome) => {
    try {
        await apiDbc.put(`/endereco/${IdEndereco}`, values )
        window.location.href = `/info-pessoa/${idPessoa}/${nome}`
    } catch (error) {
        console.log(error)
    }
}

export const navegaEditEnd = (idEndereco, idPessoa, navigate) => {
    navigate(`/editar-endereco/${idEndereco}/${idPessoa}`)
}   

export const editEndereco = async (idPessoa, dispatch) => {
    try {
        const { data } = await apiDbc.get(`/endereco/${idPessoa}`)
        const endereco = {
            type: "SET_ENDERECO_ID_END",
            endereco: data
        }
        dispatch(endereco)
    } catch (error) {
        console.log(error)
    }
}

const mapStateToProps = (state) => ({
    endereco: state.infoPessoaReducer.endereco
});

export default connect(mapStateToProps);