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

    if (action.type === "SET_LOGOUT") {
        return {
            auth: {
                ...state,
                token: '',
                isLogged: false,
                isLoading: false,                
            }
        }
    }

    if (action.type === "LOADING_FALSE") {
        return {
            auth: {
                ...state,
                isLoading: false,
                isLogin: true,                
            }
        }
    }

    if (action.type === "SET_CRIA_LOGIN") {
        return {
            auth: {
                token: '',
                isLogged: false,
                isLoading: false,
                isLogin: false,
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