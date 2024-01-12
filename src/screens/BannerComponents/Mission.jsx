import React from "react";
import "./Mission.css";

function Mission() {
  const array = [
    {
      id: "01",
      name: "Networking",
      desc: "Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.",
    },
    {
      id: "02",
      name: "Partage",
      desc: "Promouvoir le partage de connaissances et d’expertises.",
    },
    {
      id: "03",
      name: "Recrutement",
      desc: "Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de profils qualifiés.",
    },
    {
      id: "04",
      name: "Collaborations",
      desc: "Créer des opportunités de collaborations en Afrique.",
    },
    {
      id: "05",
      name: "Evénements",
      desc: "Augmenter la visibilité des évenements autour du “Business in Africa”.",
    },
  ];

  return (
    <>
      <div className="missionmain" id="mission">
        <div className="missionParent">
          <h1>Missions de PANDA</h1>
        </div>
        <div className="missioncards">
          {array.map((item, key) => (
            <div key={item.id} className="cardsContainer">
              <div className="itemid">
                <h4>{item.id}</h4>
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
      </div>
    </>
  );
}

export default Mission;
