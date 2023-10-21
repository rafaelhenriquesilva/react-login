import { useState } from 'react';
import './Login.css';
import LoginService from '../../services/Login.service';
import notify from '../../utils/Notification';
import Dashboard from '../Dashboard/Dashboard';
function Login() {

    const [email, setEmail] = useState('rafa@gmail.com');
    const [password, setPassword] = useState('');
    const [isLogged, setIsLogged] = useState(false);

    let loginUser = async (event) => {
        event.preventDefault();
        console.log(`Email: ${email}`)
        console.log(`password: ${password}`)
        console.log('Formulário enviado')

        // Chame o serviço de login aqui
        try {
            const loginService = new LoginService({
                username: email,
                password: password
            })
            const loginResponse = await loginService.loginAPI();
            console.log('Resposta do serviço de login:', loginResponse['data']);
            notify("success", "Logado com sucesso!");
            setIsLogged(true);
            // Você pode fazer algo com a resposta, como redirecionar o usuário ou mostrar mensagens de erro.
        } catch (error) {
            console.error('Erro ao chamar o serviço de login:', error);
            notify("error", "Login inválido");
            // Lida com erros, como exibir mensagens de erro para o usuário.
        }

    }

    const clear = () => {
        setEmail('')
        setPassword('')
    }

    return (
        <>
            {!isLogged && (
                <div className="card black-card" >
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-body">
                        <form className="form-group" onSubmit={loginUser}>
                            <label >Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label >Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='divButton'>
                                <button type="submit" className="btn btn-primary customButtom">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isLogged && (
                <div>
                    <Dashboard />
                </div>
            )}


        </>
    )
}

export default Login;