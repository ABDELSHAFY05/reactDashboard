import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from 'react-router-dom';
import {UserAuth} from '../../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth('');
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password) 
      navigate('/')
    } catch (e) {
      setError(true)
      console.log(e.message)
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
      <h1>Smart Stand</h1>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;