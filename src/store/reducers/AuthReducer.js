const INITIAL_STATE = {
    auth: {
        token: '',
        isLogged: false,
        isLoading: true,
        isLogin: true
    }
};

const authReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SET_LOGADO") {
        return {
            auth: {
                token: action.token,
                isLogged: true,
                isLoading: false,
                isLogin: true
            }
        }
    }

    if (action.type === "SET_CRIA_LOGIN") {
        return {
            auth: {
                token: '',
                isLogged: action.isLogged,
                isLoading: action.isLoading,
                isLogin: action.isLogin
            }
        }
    }

    if (action.type === "SET_LOADING") {
        return {
            auth: {
                ...state,
                isLoading: action.isLoading
            }
        }
    }
    return state
};


export default authReducer;