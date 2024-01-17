function Login(){
    return (
        <form className="login">
            <h2>Register</h2>
            <label>
                Username:
                <input type="text"/>
            </label>
            <label>
                Password:
                <input type="password"/>
            </label>           
        </form>
    );
}

export default Login;