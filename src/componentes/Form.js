import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import CamposForm from './CamposForm';
import ButtonEntrar from './ButtonEntrar';

export default function Form() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/recuperar" element={<RecuperarForm />} />
      </Routes>
    </Router>
  );
}

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    Cookies.set('username', username, { expires: 1 });
    Cookies.set('password', password, { expires: 1 });
  };

  return (
    <form action="/login" method="POST" onSubmit={handleSubmit}>
      <CamposForm id="username" label="Nome de usuário:" type="text" placeholder="Digite seu nome de usuário" />
      <CamposForm id="password" label="Senha:" type="password" placeholder="Digite sua senha" />
      <ButtonEntrar />
      <div className="container-auxi">
        <Link className="Voltar" to="/recuperar">Recuperar senha</Link>
      </div>
    </form>
  );
}

function RecuperarForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form action="/recuperar" method="POST" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="Digite seu email" />
      <input type="submit" className="Recuperar" value="Enviar email de recuperação" />
      <div className="container-auxi">
        <Link className="Voltar" to="/">Voltar para o login</Link>
      </div>
    </form>
  );
}
