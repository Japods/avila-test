import React from 'react';
import Image from 'next/image';
import logo from '../public/logo_salud.svg';
import rightImage from '../public/right-image.svg';
import tekLogo from '../public/tek-logo.svg';

function HomePage() {
  return (
    <div className="min-h-screen w-screen container-blue flex items-center justify-center">
      <div className="left-container mr-20">
        <div className="card-login" align="center">
          <div className="top-content">
            <Image className="logo-login" alt="Avila Tek Logo" src={logo} />
            <p className="title-login mt-10">¡BIENVENIDO!</p>
            <div className="formulario-avilatek w-full items-center flex flex-col">
              <input
                type="text"
                className="input-avilatek mt-10 outline-none focus:border-none"
                placeholder="Correo"
              />
              <input
                type="text"
                className="input-avilatek mt-10 outline-none"
                placeholder="Contraseña"
              />
            </div>
            <p className="forgot-password mt-5 cursor-pointer text-left">
              ¿Olvidaste tu contraseña?
            </p>
          </div>
          <div className="bottom-content">
            <div className="button-login flex items-center justify-center">
              Ingresar
            </div>
            <p className="forgot-password mt-5 cursor-pointer">
              ¿No tiene una cuenta? Regístrese
            </p>
          </div>
        </div>
      </div>
      <div className="rigthƒ-container">
        <Image alt="Avila Tek Logo" src={rightImage} />
      </div>
      <div className="footer w-full flex items-center justify-center">
        <span className="mr-3">
          Copyright © 2021 Grupo Nueve Once. Todos los Derechos Reservados.
          Desarrollado por Avila Tek
        </span>

        <Image className="logo-login" alt="Avila Tek Logo" src={tekLogo} />
      </div>
    </div>
  );
}

export default HomePage;
