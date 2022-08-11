const INITIAL_STATE = {
    enderecos: [],
    loading: false,
    endereco: {},
    cep: {},
    isUpdateEnd: true,
}

const enderecoReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SET_ENDERECOS_ID_PESSOA"){
        return {
            ...state,
            enderecos: action.enderecos
        }
    }

    if (action.type === "SET_ENDERECO_ID_END"){
        return {
            ...state,
            endereco: action.endereco,
            loading: false,
            isUpdateEnd: true
        }
    }
    
    if (action.type === "SET_CEP") {
        return {
            ...state,
            cep: action.cep,
            loading: false
        }
    }

    if (action.type === "LOADING_FALSE"){
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === "REGISTER_ENDERECO"){
        return {
            ...state,
            endereco: {},
            loading: false,
            isUpdateEnd: false,
        }
    }

    if (action.type === "LIMPA_ENDERECO"){
        return {
            ...state,
            endereco: {},
            loading: true,
        }
    }

    return state;
}

export default enderecoReducer;