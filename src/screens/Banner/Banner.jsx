import React from "react";
import "./Banner.css";
import Mission from "../BannerComponents/Mission";
import Functionalities from "../BannerComponents/Functionalities";
import Offress from "../BannerComponents/Offress";
import Decourez from "../BannerComponents/Decourez";
import Evenements from "../BannerComponents/Evenements";
import Top5 from "../BannerComponents/Top5";
import Lastsection from "../BannerComponents/Lastsection";

function Banner() {
  return (
    <>
      <div className="bannermain">
        <div className="navhead1">
          <h1>
            Nous réunissons experts du monde
            <br /> entier et organisations en Afrique
          </h1>
        </div>
        <div className="bannerparent">
          <div className="banner1">
            <h1>Organisations en Afrique</h1>
            <p>
              Vous êtes une entreprise privée ou publique basée en Afrique et
              vous avez du mal à recruter des profils expérimentés? Vous êtes
              une start-up africaine et vous avez besoin des services d'un
              prestataire externe? Vous recherchez des profils d'experts bien
              spécifiques pour un futur projet?
            </p>
            <p>
              Grâce à son réseau d'experts,Welcome to Welcome to PANDA vous aide
              à trouver les experts dont vous avez besoin!
            </p>
          </div>
          <div className="banner2">
            <img className="mainImg" src="/images/expert.png" alt="" />
            <img className="bgImg" src="/images/company.png" alt="" />
          </div>
          {/* mobile */}
          <div className="mobile">
            <div className="banner1mobile">
              <h1>Organisations en Afrique</h1>
              <p>
                Vous êtes une entreprise privée ou publique basée en Afrique et
                vous avez du mal à recruter des profils expérimentés? Vous êtes
                une start-up africaine et vous avez besoin des services d'un
                prestataire externe? Vous recherchez des profils d'experts bien
                spécifiques pour un futur projet?
              </p>
              <p>
                Grâce à son réseau d'experts,Welcome to Welcome to PANDA vous
                aide à trouver les experts dont vous avez besoin!
              </p>
            </div>
            <div className="banner3mobile">
              <h1>Experts</h1>
              <p>
                Vous êtes un professionnel expérimenté et vous planifiez de
                partir travailler en Afrique? Vous vous rendez souvent en
                Afrique pour des raisons professionnelles et vous souhaitez
                étendre votre réseau?Vous souhaitez partager votre expertise
                avec des acteurs africains sans vous déplacer?Welcome to Welcome
                to
              </p>
              <p>
                PANDA est la plateforme de networking des experts pour leurs
                projets professionnels sur le continent africain!
              </p>
            </div>
          </div>

          <div className="banner3">
            <h1>Experts</h1>
            <p>
              Vous êtes un professionnel expérimenté et vous planifiez de partir
              travailler en Afrique? Vous vous rendez souvent en Afrique pour
              des raisons professionnelles et vous souhaitez étendre votre
              réseau?Vous souhaitez partager votre expertise avec des acteurs
              africains sans vous déplacer?Welcome to Welcome to
            </p>
            <p>
              PANDA est la plateforme de networking des experts pour leurs
              projets professionnels sur le continent africain!
            </p>
          </div>
        </div>
        <div className="mission">
          <Mission />
        </div>
        <div className="functionalities">
          <Functionalities />
        </div>
        <div className="Decourez">
          <Decourez />
        </div>
        <div className="offres">
          <Offress />
        </div>
        <div className="even">
          <Evenements />
        </div>
        <div className="top5">
          <Top5 />
        </div>
        <div className="top5">
          <Lastsection />
        </div>
      </div>
    </>
  );
}

export default Banner;
