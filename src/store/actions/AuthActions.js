import { connect } from 'react-redux';
import { apiDbc } from '../../api';

export const handleLogin = async (values, dispatch) => {
    try {
        const { data } = await apiDbc.post('/auth', values)
        localStorage.setItem('token', data)
        const logar = {
            type: 'SET_LOGADO',
            token: data
        }
        dispatch(logar)
        window.location.href = '/pessoa';
    } catch (error) {
        console.log(error)
    }
}

export const handleLogout = (dispatch) => {
    localStorage.removeItem('token')
    apiDbc.defaults.headers.common['Authorization'] = undefined;
    const logout = {
        type: 'SET_LOGOUT'
    }
    dispatch(logout)
    window.location.href = '/login';
}

export const handleCreateUser = async (value) => {
    try {
        const { data } = await apiDbc.post('/auth/create', value);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const criarNovoLogin = (dispatch) => {
    const criarLogin = {
        type: "SET_CRIA_LOGIN",
    }
    dispatch(criarLogin)
    window.location.href = '/criar-login';
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
