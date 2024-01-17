import { useState } from "react";
import Register from "../components/register"

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:3001/user/register/", 
            {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})   
        });
        if (res.status === 200) {
            alert("User registered");
        } else {
            alert("Failed");
        }
    }

    return(
        <form className="register" onSubmit={registerUser}>
            <h2>Register</h2>
            <label>
                Username:
                <input type="text"
                        onChange={({target}) => {setUsername(target.value)}}
                        value={username}/>
            </label>
            <label>
                Password:
                <input type="password"
                         onChange={({target}) => {setPassword(target.value)}}
                         value={password}/>
            </label>
            <button>Register</button>
            
        </form>
    );
}

export default RegisterPage;