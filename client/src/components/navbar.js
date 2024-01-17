import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
    <div className='navbar'>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>);
}