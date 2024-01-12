import React from "react";
import "./Offress.css";

function Offress() {
  const array = [
    {
      designation: "Lead Software Engineer",
      title: "Madagascar",
      icon: "https://mir-s3-cdn-cf.behance.net/user/276/1b37864685437.62626ce2ac158.png",
      companyname: "Tubik Studio",
    },
    {
      designation: "Risk Analyst",
      title: "Madagascar",
      icon: "https://mir-s3-cdn-cf.behance.net/user/276/1b37864685437.62626ce2ac158.png",
      companyname: "Bubba Gump",
    },
    {
      designation: "Financial Analyst",
      title: "Madagascar",
      icon: "https://static.vecteezy.com/system/resources/previews/017/396/804/original/netflix-mobile-application-logo-free-png.png",
      companyname: "SP-holding",
    },
    {
      designation: "Data Engineer",
      title: "Madagascar",
      icon: "https://mir-s3-cdn-cf.behance.net/user/276/1b37864685437.62626ce2ac158.png",
      companyname: "Vehement Capital Partners",
    },
  ];

  return (
    <>
      <div className="offressmain">
        <div className="offressparent">
          <div className="offressleft">
            <h1>Offres d'emploi</h1>
            <div className="ofreesleftbtn">
              <p>
                Publiez les offres d'emploi au sein de votre organisation auprès
                de notre communauté d'experts! Expert à la recherche d'un emploi
                en Afrique? Trouvez le job de vos rêves!
              </p>
              <button>Publier ou postuler à une offre d'emploi</button>
            </div>
          </div>
          <div className="offressright">
            {array.map((item, index) => (
              <div key={index} className="offressrightContainer">
                <h2>{item.designation}</h2>
                <p>{item.title}</p>
                <img src={item.icon} alt="" />
                <h5>{item.companyname}</h5>
                <button>View</button>
              </div>
            ))}
          </div>
          <div className="offressmobilebtn">
            <button>Publier ou postuler à une offre d'emploi</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offress;
