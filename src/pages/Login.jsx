import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  const goToHomePage = () => {
    navigate('/home')
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" onClick={ goToHomePage }>Entrar</button>
      </form>
      <h4>Não está cadastrado ainda?</h4>
      <button type="button" onClick={ goToRegister }>Cadastre-se</button>
    </div>
  );
}

export default Login;