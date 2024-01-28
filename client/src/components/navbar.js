import {Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export default function Navbar() {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        navigate("/");
      };

    return (
        <div className='navbar'>
            {
                cookies.access_token ? 
                <>
                    <Link to="/create-posts">Create a post</Link>
                    <Link to="/posts">View all posts</Link>
                    <Link to="/my-posts">View my posts</Link>
                    <button onClick={logout}> Logout </button>
                </>
                
                :
                (<>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    
                </>)
                
            }
        </div>
    );
}