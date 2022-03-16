import React from "react";
import './style.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cirque1 from '../../img/cirque1.jpg'
import cirque2 from '../../img/cirque2.jpeg'
function Home() {
    return (
        <div className="homePage">
                <div className="rightSection">
                    <div className="circusPresentation">
                        <p>Dans un fabuleux chapiteau de 2500 places en fauteuils individuels, parqueté et très bien chauffé.</p>
                        <p> Un chapiteau d'accueil de plus de 600m² avec les toilettes à l'intérieur.</p>
                        <p> Stand Pop Corns, Crêpes, Barbes à papa, Bonbons, Confiseries, Bar etc...</p>
                    </div>
                </div>
                <div className="leftSection">
                    <div className="carrousel">
                        <Carousel variant="dark" style={{ height: "100%" }}>
                            <Carousel.Item>
                                <img
                                    src={cirque1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src={cirque2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
    )
}
export default Home;