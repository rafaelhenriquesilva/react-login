import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('rafa@gmail.com');
    const [password, setPassword] = useState('');

    let loginUser = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}`)
        console.log(`password: ${password}`)
        console.log('Formulário enviado')

    }
    return <>

        <form>
            <div className="form-group" onSubmit={loginUser}>
                <label >Email address</label>
                <input 
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input 
                        type="password" 
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </>
}

export default Login;