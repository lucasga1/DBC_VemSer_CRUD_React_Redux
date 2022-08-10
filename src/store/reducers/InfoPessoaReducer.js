const INITIAL_STATE = {
    enderecos: [],
    loading: false,
    endereco: {},
    cep: {}
}

const infoPessoaReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SET_ENDERECOS_ID_PESSOA"){
        return {
            ...state,
            enderecos: action.enderecos
        }
    }
    
    if (action.type === "SET_CEP") {
        return {
            ...state,
            cep: action.cep,
            loading: true
        }
    }

    if (action.type === "LOADING_FALSE"){
        return {
            ...state,
            loading: true
        }
    }
    return state;
}

export default infoPessoaReducer;