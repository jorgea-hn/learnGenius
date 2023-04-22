import React from "react";
import "./Registro.css"
function Registro() {
    return (
        <div className="contenedor">
            <div className="Saludo">
                <h1>Te damos la Bienvenida a</h1>
                <img src="https://cursosonlinecertificados.com/wp-content/uploads/2019/02/LOGO-3.png" alt="" />
            </div>

            <div className="contenedor-formulario">
                <form id="formulario" action="/action_page.php">
                    <h2>REGISTRATE</h2><br />
                    <input className="formulario-input" type="email" id="fname" placeholder="Correo electronico" /><br />
                    <input className="formulario-input" type="text" id="fname" placeholder="Nombre y apellido" /><br />
                    <input className="formulario-input" type="text" id="lname" placeholder="Contraseña" /><br />
                    <input className="formulario-input" type="text" id="lname" placeholder="Confirmar contraseña" /><br />
                    <input className="formulario-input" type="text" id="lname" placeholder="Numero de telefono" /><br /><br />
                    <input id="boton-formulario" type="submit" value="Registrarse" /><br /><br />
                    <div id="terminos">
                        <input  type="checkbox" />
                        <p>Aceptar terminos y condiciones</p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Registro