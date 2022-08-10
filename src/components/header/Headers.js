import Menu from "./menu/Menu";
import { Link } from 'react-router-dom';
import * as s from './Headers.styled';

function Headers() {
    return (
        <s.Header>
            <div>
                <nav>
                    <ul>
                        <Link to='/pessoa'><li>Pessoas</li></Link>
                    </ul>
                </nav>
            </div>
            <Menu />
        </s.Header>
    )
}
export default Headers