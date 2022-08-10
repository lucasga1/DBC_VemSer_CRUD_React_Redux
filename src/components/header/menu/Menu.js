import * as s from './Menu.styled';
import { handleLogout } from '../../../store/actions/AuthActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Menu({ dispatch }) {
  const navigate = useNavigate()
  return (
    <s.Menu>
      <button onClick={() => handleLogout(dispatch, navigate)}>Sair</button>
    </s.Menu>
  )
}

export default connect()(Menu);