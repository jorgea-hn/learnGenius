import React from "react";
import Nav from "../navegacion/Nav";

function Estudiantes() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <h1>Estudiantes</h1>
            </main>
            <footer>
                <p>Derechos de autor © 2022 | Nombre de la empresa</p>
                <p><a href="#">Política de privacidad</a></p>
            </footer>
        </div>
    )
}

export default Estudiantes