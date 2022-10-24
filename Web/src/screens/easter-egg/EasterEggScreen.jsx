import React from "react";
import { EasterEggList } from "../../components";
import "../easter-egg/EasterEggScreen.css";

function EasterEggScreen() {
  return (
    <div className="easter-screen pt-5">
      <div className="container pb-5">
        <div className="ps-2">
        <h1>Un viaje fantástico</h1>
        <br></br>
        <h4>
          En abril de 2022, un grupo de intrépidos fans de Agoney decide
          contratar a los formadores más estrictos de la deep web para aprender
          a mover ranas de sitio y otras proezas que no hace ni Harry.</h4>
          <div className="my-4">
          <img style={{maxHeight:"500px"}}src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666652648/xan-campos-web/Easter%20Egg/nasiospamatar_ak7hgm.png"></img>
          </div>
         <h4>Tras seis árduos meses de rellenar encuestas hasta el vómito y algún
          que otro lab empezado, estos talentosos hackers se disponen a
          aterrizar en el sector para parasitar durante años a costa de alguna
          empresa incauta (telefónica, quizás?).<br></br>
          <br></br>
          Si tiene usted algún problema informático o psicosesuarl y
          se los encuentra, quizá pueda contratarlos... Ell@s son los...
        </h4>
        <div style={{height:"50px"}}></div>
        <h3>WDPT APR'22 IRONMASTERS</h3>
        </div>
        <EasterEggList />
        <h4>Muchas gracias a Carlos, Julio y Edgar por vuestros conocimientos, buen rollo y paciencia. Muchas gracias también a tod@s los compañer@s de viaje en esta intensa aventura,
        entre tod@s lo habéis convertido en algo único. Stockholm, god level.</h4>
      </div>
      
    </div>
  );
}

export default EasterEggScreen;
