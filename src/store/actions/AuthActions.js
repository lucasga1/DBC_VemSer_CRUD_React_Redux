import { connect } from 'react-redux';
import { apiDbc } from '../../api';
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
export const handleLogin = async (values, dispatch) => {
    try {
        const { data } = await apiDbc.post('/auth', values)
        notifyPositive('Login efetuado com sucesso!')
        setTimeout(() => {
            localStorage.setItem('token', data)
            const logar = {
                type: 'SET_LOGADO',
                token: data
            }
            dispatch(logar)
            window.location.href = '/pessoa';
        }, 1500)
    } catch (error) {
        console.log(error)
        notifyError('Usuário ou senha inválido.')
    }
}

export const handleLogout = (dispatch) => {
    localStorage.removeItem('token')
    apiDbc.defaults.headers.common['Authorization'] = undefined;
    const logout = {
        type: 'SET_LOGOUT'
    }
    dispatch(logout)
    window.location.href = '/';
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
    window.location.href = `/criar-login`;
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
