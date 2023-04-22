import React from "react";
import "./Registro.css"
function Registro() {
    return (
        <div>
            <div className="container">
                <form id="formulario" action="/action_page.php">
                    <h2>Registrate</h2><br />
                    <input className="formulario-input" type="email" id="fname"  placeholder="Correo electronico"/><br/>
                    <input className="formulario-input" type="text" id="fname"  placeholder="Nombre y apellido"/><br/>
                    <input className="formulario-input" type="text" id="lname"  placeholder="Contraseña"/><br/>
                    <input className="formulario-input" type="text" id="lname"  placeholder="Confirmar contraseña"/><br/>
                    <input className="formulario-input" type="text" id="lname"  placeholder="Numero de telefono"/><br/><br/>
                    <input type="submit" value="Registrarse"/><br /><br />
                    <div id="terminos">
                        <input type="checkbox" />
                        <p>Aceptar terminos y condiciones</p>
                    </div>
                    
                </form> 
            </div>
        </div>
    )
}

export default Registro