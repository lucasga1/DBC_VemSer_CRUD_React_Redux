const INITIAL_STATE = {
    contatos: [],
    contato: {},
    loading: false,
    isUpdateCont: true
}

const contatosReducer = (state = INITIAL_STATE, action) => {
    if(action.type === "SET_CONTATOS") {
        return {
            ...state,
            contatos: action.contatos
        }
    }

    if(action.type === "SET_CONTATOS_BY_ID"){
        return {
            ...state,
            contato:{},
            loading: false,
            isUpdateCont: true
        }
    }
    return state
}

export default contatosReducer;