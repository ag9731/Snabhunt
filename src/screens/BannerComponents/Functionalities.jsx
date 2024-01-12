import React from "react";
import "./Functionalities.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Functionalities() {
  const array = [
    {
      id: "/images/Union.svg",
      name: "Networking",
      desc: "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.",
    },
    {
      id: "/images/Union.svg",
      name: "Partage",
      desc: "Promouvoir le partage de connaissances et d’expertises.",
    },
    {
      id: "/images/Union.svg",
      name: "Recrutement",
      desc: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés.",
    },
    {
      id: "/images/Union.svg",
      name: "Collaborations",
      desc: "Créer des opportunités de collaborations en Afrique.",
    },
    {
      id: "/images/Union.svg",
      name: "Evénements",
      desc: "Augmenter la visibilité des évenements autour du “Business in Africa”.",
    },
  ];
  return (
    <>
      <div className="funmain" id="function">
        <div className="funParent">
          <h1>Fonctionnalités</h1>
        </div>
        <div className="funcardsParent">
          <div className="funcards">
            {array.map((item, key) => (
              <div key={item.id} className="funcardsContainer">
                <div className="funitemid">
                  <img src={item.id} alt="" />
                </div>
                <div>
                  <h3>{item.name}</h3>
                </div>
                <div>
                  <h4>{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="funleft">
            {/* <img src="/images/map.png" alt="" /> */}
            <iframe
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31964830.2866771!2d55.81223842755778!3d12.046491870089556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c208e31627%3A0x5d217976eda1bc09!2sSNAP%20TECH%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1705061306092!5m2!1sen!2sin"
              width="300"
              height="350"
              style={{ border: 0, borderRadius: 250 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <button>Explore la Travel Map</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Functionalities;
