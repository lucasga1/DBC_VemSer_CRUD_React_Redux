const INITIAL_STATE = {
    contatos: [],
    contato: {}
}

const contatosReducer = (state = INITIAL_STATE, action) => {
    if(action.type === "SET_CONTATOS") {
        return {
            ...state,
            contatos: action.contatos
        }
    }
    return state
}

export default contatosReducer;