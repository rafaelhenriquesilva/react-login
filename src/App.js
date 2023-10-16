
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('rafa@gmail.com');
  const [password, setPassword] = useState('');

  let loginUser = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`)
    console.log(`password: ${password}`)
    console.log('Formulário enviado')

  }
  return <>

    <div className="card custom_card" >

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
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>

    </div>




  </>
}

export default App;
