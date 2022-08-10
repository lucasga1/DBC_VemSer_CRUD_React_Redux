const INITIAL_STATE = {
    pessoas: [],
    pessoa: {},
    loading: true,
    isUpdate: true
};

const pessoasReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SET_PESSOA") {
        return {
            ...state,
            pessoas: action.pessoas,
            loading: false,
            isUpdate: false
        }
    }
    if (action.type === "SET_PESSOA_ID"){
        return {
            ...state,
            pessoa: action.pessoa,
            loading: false,
            isUpdate: true
        }
    }

    if (action.type === "REGISTER_PESSOA"){
        return {
            ...state,
            pessoa: {},
            loading: false,
            isUpdate: false,
        }
    }

    if (action.type === "LIMPA_PESSOA"){
        return {
            ...state,
            pessoa: {},
            loading: true,
        }
    }
    return state
};


export default pessoasReducer;