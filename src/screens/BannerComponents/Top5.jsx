import React from "react";
import "./Top5.css";

function Top5() {
  const array = [
    {
      icon: "/images/Union.svg",
      title: "Les énergies renouvelables",
    },
    {
      icon: "/images/Union.svg",
      title: "L'agro-alimentaire",
    },
    {
      icon: "/images/Union.svg",
      title: "Les technologies",
    },
    {
      icon: "/images/Union.svg",
      title: "Le e-commerce",
    },
    {
      icon: "/images/Union.svg",
      title: "Les solutions de paiement",
    },
  ];

  return (
    <>
      <div className="top5main">
        <h1>Top 5 des domaines d’activités porteurs en Afrique </h1>
        <div className="top5parent">
          <div className="topleft">
            <img src="/images/agri.png" alt="" />
          </div>
          <div className="topright">
            {array.map((item, index) => (
              <div key={index} className="toprightbottommain">
                <div key={index} className="toprightdata">
                  <div>
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
            <button>Voir tout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top5;
