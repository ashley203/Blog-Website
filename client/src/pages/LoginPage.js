import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        if(username.length === 0 || password.length === 0){
            alert("Input username and password");
        }
        else{
            const res = await fetch("http://localhost:3001/user/login/", 
                {method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password})   
            });
            if (res.status === 200) {
                alert("User logged in");
                //localStorage.setItem("userID", res.id);
                res.json().then(data => {localStorage.setItem("userID", data.id); console.log(data.id)});
                navigate("/posts");
            } else {
                alert("Incorrect username or password");
            }
        }     
    }

    return (
    <div className="Login">
        <form className="login" onSubmit={loginUser}>
            <h2>Login</h2>
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
            <button>Login</button>
            
        </form>
    </div>
    );
}