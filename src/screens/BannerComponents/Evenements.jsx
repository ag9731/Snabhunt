import React from "react";
import "./Evenements.css";

function Evenements() {
  return (
    <>
      <div className="evenmain" id="events">
        <div className="evenparent">
          <div className="evenleft">
            <div className="evenlefttop">
              <h1>Evénements à venir</h1>
              <p>Publié par: Pablo Diahuno</p>
              <img src="/images/party.png" alt="" />
            </div>
            <div className="evenleftbottom">
              <p>
                Connectez-vous avec des organisations africaines, postulez au
                job de vos rêves en Afrique ou partagez votre expertise même à
                distance!
              </p>
              <button>Voir tout</button>
            </div>
          </div>
          <div className="evenmain2">
            <div className="evencenter">
              <img src="/images/party.png" alt="" />
            </div>
            <div className="evenright">
              <p>
                L'événement:
                <span className="evenrightdata"> The Nancy party’s</span>{" "}
              </p>
              <p>
                Date: <span className="evenrightdata">10/07/22</span>
              </p>
              <p>
                <span className="evenrightdata">Lieu: Senegal</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Evenements;
