import { connect } from 'react-redux';
import apiDbc from '../../api';

export const handleLogin = async (values, dispatch, navigate) => {
    try {
        const { data } = await apiDbc.post('/auth', values)
        localStorage.setItem('token', data)
        const logar = {
            type: 'SET_LOGADO',
            token: data
        }
        dispatch(logar)
        navigate('/pessoa')
    } catch (error) {
        console.log(error)
    }
}

export const handleCreateUser = async (value) => {
    try {
        const { data } = await apiDbc.post('/auth/create', value);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const criarNovoLogin = (navigate, dispatch) => {
    const criarLogin = {
        type: "SET_CRIA_LOGIN",
        isLogged: true,
        isLoading: false,
        isLogin: false
    }
    dispatch(criarLogin)
    navigate('/criar-login')
}

export const isAuth = (dispatch) => {
    const token = localStorage.getItem('token')
    if (token) {
        apiDbc.defaults.headers.common['Authorization'] = token;
    }
    const logar = {
        type: 'SET_LOGADO',
        token: token
    }
    dispatch(logar)
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
})


export default connect(mapStateToProps)(handleLogin);
