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
        notifyPositive('Contato criado com sucesso!')
        setTimeout(() => {
            window.location.href = `/info-pessoa/${idPessoa}/${nome}`
        }, 1500)
    } catch (error) {
        console.log(error)
        notifyError('Falha ao criar contato.')
    }
}

export const handleDelete = async (idContato) => {
    try {
        await apiDbc.delete(`/contato/${idContato}`)
    } catch (error) {
        console.log(error)
    }
}
