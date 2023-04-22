import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";


function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // función para cerrar sesión
  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <nav>
        <ul id="left">
          <Link className="link" to="/">
            <img src="" alt="Logo" />
          </Link>
        </ul>
        <ul id="center">
          <Link className="link" to="">
            Busqueda
          </Link>
        </ul>
        <ul id="right">
          <Link className="link" to="">
            Cursos
          </Link>
          {isLoggedIn ? (
            <>
              <img src="https://via.placeholder.com/40" alt="Imagen de perfil" />
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
             {isLoggedIn ? null : <Link className="link" to="/login">Entrar</Link>}
              <Link className="link" to="/registro">
                <img src="https://via.placeholder.com/40" alt="Imagen de registro" />
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
