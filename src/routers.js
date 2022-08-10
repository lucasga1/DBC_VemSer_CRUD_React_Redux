import { connect } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { isAuth } from './store/actions/AuthActions';
import Headers from './components/header/Headers';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import CreatePessoa from './pages/pessoa/components/CreatePessoa';
import Pessoa from './pages/pessoa/Pessoa';

function Routers({ auth, dispatch }) {

  useEffect(() => {
    isAuth(dispatch)
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
            <Route path='/pessoa' element={<Pessoa />} />
            <Route path='/criar-pessoa' element={<CreatePessoa />} />
            <Route path='/editar-pessoa/:idPessoa' element={<CreatePessoa />} />
          </>)
        }
      </Routes>
    </BrowserRouter >
  )
}

const mapStateToProps = (state) => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Routers)