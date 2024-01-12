import React from "react";
import "./Navbar.css";

function Navmenu() {
  return (
    <div>
      <div className="navmenu">
        <ul>
          <a href="#">
            <li>missions de pANDA</li>
          </a>
          <a href="#">
            <li>Fonctionnalités</li>
          </a>
          <a href="#">
            <li>experts</li>
          </a>
          <a href="#">
            <li>Organisations en Afrique</li>
          </a>
          <a href="#">
            <li>Offres d'emploi</li>
          </a>
          <a href="#">
            <li>Evénements à venir</li>
          </a>
          <a href="#">
            <li>Témoignages</li>
          </a>
          <a href="#">
            <li>Fondateurs</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navmenu;
