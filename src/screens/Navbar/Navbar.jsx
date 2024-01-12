import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Navmenu from "./Navmenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    // console.log("working");
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <>
      <div className="navmain">
        <div className="navlogo">
          <div className="nav1">
            <p>EN-FR</p>
          </div>
          <div className="nav2">
            <h2>Bienvenue sur P NDA</h2>
          </div>
          <div className="nav3">
            <div>
              <p>Créer un compte</p>
            </div>
            <div>
              <p>Se connecter</p>
            </div>
          </div>
        </div>
        {/* Mobile nav */}
        <div className="mobilenav">
          <div className="mnav1">
            <p>EN-FR</p>
          </div>
          <div className="mnav2">
            <h2>Bienvenue sur P NDA</h2>
          </div>
          <div className="mnav3">
            <div className="menuicons">
              {menuOpen ? (
                <>
                  <span onClick={handleMenuToggle} className="iconclose">
                    <AiOutlineClose />
                  </span>
                </>
              ) : (
                <span onClick={handleMenuToggle} className="iconopen">
                  <AiOutlineMenu />
                </span>
              )}
            </div>
          </div>
        </div>
        {/* Nav MEnu */}
        <div className={`navmenu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="head">Créer un compte</li>
            <li className="head">Se connecter</li>
            <a href="#mission" onClick={handleLinkClick}>
              <li>missions de pANDA</li>
            </a>
            <a href="#function" onClick={handleLinkClick}>
              <li>Fonctionnalités</li>
            </a>
            <a href="#events" onClick={handleLinkClick}>
              <li>experts</li>
            </a>
            <a href="#" onClick={handleLinkClick}>
              <li>Organisations en Afrique</li>
            </a>
            <a href="#" onClick={handleLinkClick}>
              <li>Offres d'emploi</li>
            </a>
            <a href="#" onClick={handleLinkClick}>
              <li>Evénements à venir</li>
            </a>
            <a href="#" onClick={handleLinkClick}>
              <li>Témoignages</li>
            </a>
            <a href="#" onClick={handleLinkClick}>
              <li>Fondateurs</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
