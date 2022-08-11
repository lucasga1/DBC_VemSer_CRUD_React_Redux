import { connect } from "react-redux";
import { apiDbc, apiCep } from "../../api";
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
        notifyPositive('Endereço criado com sucesso!')
        setTimeout(() => {
            window.location.href = `/info-pessoa/${id}/${nome}`
        }, 1500)
    } catch (error) {
        console.log(error)
        notifyError('Falha ao criar endereço, tente novamente')
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
        notifyPositive('Endereço atualizado com sucesso!')
        setTimeout(() => {
            window.location.href = `/info-pessoa/${idPessoa}/${nome}`
        }, 1500)
    } catch (error) {
        console.log(error)
        notifyError('Falha ao atualizar endereço, tente novamente')
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