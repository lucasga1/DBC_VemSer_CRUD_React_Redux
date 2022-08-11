import { connect } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isAuth } from './store/actions/AuthActions';
import Headers from './components/header/Headers';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import CreatePessoa from './pages/pessoa/components/CreatePessoa';
import Pessoa from './pages/pessoa/Pessoa';
import InfoPessoa from './pages/infoPessoa/InfoPessoa';
import FormCriaEndereco from './pages/infoPessoa/components/forms/FormCriaEndereco';
import FormCriaContato from './pages/infoPessoa/components/forms/FormCriaContato';
import NotFound from './pages/notfound/NotFound';
import Loading from './components/loading/Loading';

function Routers({ auth, dispatch }) {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      isAuth(dispatch)
    } else {
      dispatch({type: 'LOADING_FALSE'})
    }
  }, [])

  if (auth.isLoading) {
    return (<h1>Carregando</h1>)
  }
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        {!auth.isLogged
          ? (<>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/criar-login' element={<Login />} />
          </>) : (<>
            <Route path='/loading' element={<Loading />} />
            <Route path='/pessoa' element={<Pessoa />} />
            <Route path='/criar-pessoa' element={<CreatePessoa />} />
            <Route path='/editar-pessoa/:idPessoa' element={<CreatePessoa />} />
            <Route path='/info-pessoa/:idPessoa/:nome' element={<InfoPessoa />} />
            <Route path='/criar-endereco/:idPessoa/:nome' element={<FormCriaEndereco />} />
            <Route path='/editar-endereco/:idEndereco/:idPessoa' element={<FormCriaEndereco />} />
            <Route path='/criar-contato/:idPessoa/:nome' element={<FormCriaContato />} />
            <Route path='/editar-contato/:idContato/:idPessoa' element={<FormCriaContato />} />
          </>)
        }
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Routers)