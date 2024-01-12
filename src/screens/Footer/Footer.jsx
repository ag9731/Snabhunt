import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footermain">
        <div className="footer1">
          <h4>Page d'accueil</h4>
          <ul>
            <li>Missions de PANDA</li>
            <li>Fonctionnalités</li>
            <li>Découvrez les experts</li>
            <li>Découvrez les organisations en Afrique</li>
            <li>Offres d'emploi</li>
            <li>Evénements à venir</li>
            <li>Témoignages</li>
            <li>Les fondateurs</li>
          </ul>
        </div>
        <div className="footer2">
          <h4>pour les EXPERTS</h4>
          <ul>
            <li>Découvrez les organisations en Afrique</li>
            <li>Offres d'emploi</li>
            <li>Travel Map</li>
            <li>Evénements à venir</li>
          </ul>
        </div>
        <div className="footer3">
          <h4>pour les organisations en Afrique</h4>
          <ul>
            <li>Découvrez les experts</li>
            <li>Travel Map</li>
            <li>Evénements à venir</li>
          </ul>
        </div>
        <div className="footer4">
          <h4>Contact </h4>
          <ul>
            <li>Nous contacter</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
