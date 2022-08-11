import { Body, Div } from './NotFound.styled'
import notfound from './images/notfound.png'

function NotFound() {

  return (
    <Body>
      <Div>
        <img src={notfound} alt="" />       
      </Div>
    </Body>
  )
}
export default NotFound