import React from 'react';
import logo from '../componentes/img/logo.png'

function Logo() {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="logo_academia_jao" />
    </div>
  );
}

export default Logo;
