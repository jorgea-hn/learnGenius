import React from "react";
import Nav from "../navegacion/Nav";
import "./Home.css"

function Home() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <section id="principal">
                    <div id="principal-container">
                        <h1>¿Preparado para vivir del Codding?</h1><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente, minima possimus, atque numquam praesentium quo officiis explicabo porro quibusdam voluptatibus, asperiores fugiat. A deleniti aut esse quae rem inventore?
                            Dolore quo, autem eius minus excepturi corporis ea maxime nisi ab laudantium consequatur nihil, aspernatur perferendis? Tempora necessitatibus numquam excepturi laboriosam! Ipsa itaque earum, suscipit non facere laborum iusto minus.
                            Repellat consequatur corrupti hic dolor ducimus at aperiam est nihil exercitationem eligendi commodi dolores modi rerum neque, quia, error nobis aspernatur eaque. Facilis temporibus nihil magnam sint ipsam, explicabo minima.</p><br />
                        <button>Ver cursos</button>
                    </div>
                </section>
                <section id="partnet">
                    <h2>Partnet</h2>
                    <div id="partnet-container">
                        <div className="partnet-container-card">
                            <img className="parnet-img" src="https://pxcdn.bigbangnews.com/bigbang/112015/1552075930272.png?cw=&ch=540" alt="" />
                            <p>Adidas</p>
                        </div>
                        <div className="partnet-container-card">
                            <img className="parnet-img" src="https://pxcdn.bigbangnews.com/bigbang/112015/1552075930272.png?cw=&ch=540" alt="" />
                            <p>Adidas</p>
                        </div>
                        <div className="partnet-container-card">
                            <img className="parnet-img" src="https://pxcdn.bigbangnews.com/bigbang/112015/1552075930272.png?cw=&ch=540" alt="" />
                            <p>Adidas</p>
                        </div>
                        <div className="partnet-container-card">
                            <img className="parnet-img" src="https://pxcdn.bigbangnews.com/bigbang/112015/1552075930272.png?cw=&ch=540" alt="" />
                            <p>Adidas</p>
                        </div>
                    </div>
                </section>
                <section className="session frase">
                        <h2>Uno para todos, todos para uno</h2>
                </section>
                <section className="session comunidad">
                        <h2>Unete a la comunidad</h2>
                </section>
                <section className="session inscripcion">
                        <h2>Pre-inscripcion</h2>
                </section>
                <section className="session cursos">
                        <h2>Cursos mas populares</h2>
                </section>
            </main>
            <footer>
                <p>Derechos de autor © 2022 | Nombre de la empresa</p>
                <p><a href="#">Política de privacidad</a></p>
            </footer>
        </div>
    )
}

export default Home