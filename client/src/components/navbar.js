import {Link} from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Navbar() {
    const [cookies, setCookies] = useCookies(["access_token"]);
    return (
        <div className='navbar'>
            <Link to="/home">Home</Link>
            {
                cookies.access_token ? 
                (<>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>)
                :
                <></>
            }
        </div>
    );
}