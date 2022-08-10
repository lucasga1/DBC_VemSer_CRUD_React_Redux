import apiDbc from "../../api";

export const getPessoas = async (dispatch) => {
    try {
        const { data } = await apiDbc.get(`/pessoa?pagina=0&tamanhoDasPaginas=150`)
        const pessoas = {
            type: 'SET_PESSOA',
            pessoas: data.content
        }
        dispatch(pessoas)
    } catch (error) {
        console.log(error)
    }
}

export const handleCreateUser = async (values, navigate) => {
    try {
        await apiDbc.post('/pessoa', values);
        navigate('/pessoa')
    } catch (error) {
        console.log(error);
    }
};

export const handleDelete = async (idPessoa) => {
    try {
        await apiDbc.delete(`/pessoa/${idPessoa}`)
    } catch (error) {
        console.log(error)
    }
};

export const handleEditPessoa = async (values, idPessoa, navigate) => {
    try {
        await apiDbc.put(`/pessoa/${idPessoa}`, values)
        navigate('/pessoa')
    } catch (error) {
        console.log(error)
    }
}

export const editPessoa = async (idPessoa, dispatch) => {
    try {
        const { data } = await apiDbc.get(`/pessoa/lista-completa?idPessoa=${idPessoa}`)
        const pessoa = {
            type: "SET_PESSOA_ID",
            pessoa: data && data[0]
        }
        dispatch(pessoa)
    } catch (error) {
        console.log(error)
    }
}
