import React from "react";
import "./Decourez.css";

function Decourez() {
  return (
    <>
      <div className="decomain">
        <div className="decparent">
          <div className="decleft">
            <h1>Découvrez les experts</h1>
            <div className="ofreesleftbtn">
              <p>
                Connectez-vous avec des organisations africaines, postulez au
                job de vos rêves en Afrique ou partagez votre expertise même à
                distance!
              </p>
              <button className="desktopbtn">Voir tout</button>
            </div>
          </div>
          <div className="decright">
            <div>
              <h2>
                “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une
                offre d'emploi pour le poste de web developer publiée sur PANDA
                et le mois suivant je commençais à travailler à Dakar! ”
              </h2>
            </div>
            <div className="decimages">
              <img className="img1" src="/images/developer.png" alt="" />
              <img className="img2" src="/images/blackwomen.png" alt="" />
              <img className="img3" src="/images/vertical.png" alt="" />
            </div>
            <div className="mobilebtn">
              <div>
                <button>Voir tout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Decourez;
