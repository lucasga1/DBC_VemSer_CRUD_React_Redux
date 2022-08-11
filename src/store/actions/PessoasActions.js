import { apiDbc } from "../../api";
import toast from 'react-hot-toast';

//toastr/////////////////////////////////////////////////////////////
const notifyPositive = (value) => toast(value, {
    position: 'top-right',
    style: {
        backgroundColor: '	#7CFC00',
        color: '#000'
    },
});
const notifyError = (value) => toast(value, {
    position: 'top-right',
    style: {
        backgroundColor: '#FF0000',
        color: '#fff'
    },
});
//////////////////////////////////////////////////////////////////////

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
        notifyPositive('Usuário criado com sucesso!')
        setTimeout(() => {
            navigate('/pessoa')
        }, 1500)
    } catch (error) {
        console.log(error);
        notifyError('Falha ao cadastrar, tente novamente.')
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
        notifyPositive('Usuário atualizado com sucesso!')
        setTimeout(() => {
            navigate('/pessoa')
        }, 1500)
    } catch (error) {
        console.log(error)
        notifyError('Falha ao atualizar, tente novamente.')
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
