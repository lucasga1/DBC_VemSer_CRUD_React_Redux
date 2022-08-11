import { Navigate } from "react-router-dom";
import { apiDbc } from "../../api";

export const getContatos = async (idPessoa, dispatch) => {
    try {
        const { data } = await apiDbc.get(`/contato/${idPessoa}`)
        const contatos = {
            type: "SET_CONTATOS",
            contatos: data
        }
        dispatch(contatos)
    } catch (error) {
        console.log(error)
    }
}

export const handleCreateContato = async (values, idPessoa, nome) => {
    try {
        await apiDbc.post(`/contato/${idPessoa}`, values)
        window.location.href = `/info-pessoa/${idPessoa}/${nome}`
    } catch (error) {
        console.log(error)
    }
}

export const handleDelete = async (idContato) => {
    try {
        await apiDbc.delete(`/contato/${idContato}`)
    } catch (error) {
        console.log(error)
    }
}   

/* export const handleEditContato = async (idContato, idPessoa, nome) => {
    try {
        await apiDbc.put(`/contato/${idContato}`)
        window.location.href = `/info-pessoa/${idPessoa}/${nome}`
    } catch (error) {
        console.log(error)
    }
}

export const navegaEditContato = (idContato, idPessoa, navigate) => {
    navigate(`/editar-contato/${idContato}/${idPessoa}`)
}

export const editContato = async (idPessoa, dispatch) => {
    try {
        const {data} = await apiDbc.get(`/contato/${idPessoa}`)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
} */