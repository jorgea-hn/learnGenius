import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../login-registro/Registro.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginSubmit(event) {
    event.preventDefault();
    // Envía el correo electrónico y la contraseña a un servidor para validar las credenciales
    if (email === "usuario@example.com" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      alert("El correo electrónico o la contraseña no son válidos. Por favor, inténtalo de nuevo.");
    }
  }

  return (
    <div className="contenedor">
      <div className="Saludo">
        <h1>Te damos la Bienvenida a</h1>
        <img src="https://cursosonlinecertificados.com/wp-content/uploads/2019/02/LOGO-3.png" alt="" />
      </div>

      {isLoggedIn ? (
        <Navigate to="/estudiantes" />
      ) : (
        <div className="contenedor-formulario">
          <form id="formulario" onSubmit={handleLoginSubmit}>
            <h2>LOGIN</h2><br />
            <input className="formulario-input" type="email" id="fname" placeholder="Usuario" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <input className="formulario-input" type="password" id="fname" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} /><br /><br /><br />

            <input  id="boton-formulario" type="submit" value="Login" /><br /><br />

          </form>
        </div>
      )}
    </div>
  )
}

export default Login;



