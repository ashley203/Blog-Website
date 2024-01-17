import { useState } from "react";

function Register({handleChangeUsername, handleChangePassword}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form className="register">
            <h2>Register</h2>
            <label>
                Username:
                <input type="text"
                        onChange={({target}) => handleChangeUsername(target.value)}
                        value={username}/>
            </label>
            <label>
                Password:
                <input type="password"/>
            </label>
            
        </form>
    );
}

export default Register;