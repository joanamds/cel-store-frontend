import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  return (
    <div>
      <h1>Cadastre-se</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <label htmlFor="role">Role:</label>
        <input type="text" id="role" name="role" value={role} onChange={e => setRole(e.target.value)} />
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;