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

export const handleCreateContato = async (values, idPessoa) => {
    try {
        await apiDbc.post(`/contato/${idPessoa}`, values)
        window.location.href = `/info-pessoa/${idPessoa}`
    } catch (error) {
        console.log(error)
    }
}