import React, { useState } from "react";
import "./Components.css";

const Tarjeta = () => {
  const linkData = [
    {
      text: "ANDRÉS GARCÍA",
      content:
        "Soy Andrés Eduardo García Bayona, tengo 19 años, vivo en Bogotá. Siempre me he tenido un interes en la tecnologia, la programación y el desarrollo de aplicaciones las cuales me impulsan a seguir aprendiendo aunque mi interés se inclina mas hacia la ciberseguridad, campo que es el mas me gusta.",
    },
    {
      text: "UNIVERSIDAD",
      content:
        "Actualmente me encuentro estudiando en la Universidad Uniminuto, buscando constantemente ampliar mis conocimientos para lograr mis metas y concluir mi carrera profesional de la mejor manera.",
    },
    {
      text: "CARRERA",
      content:
        "Me encuentro en la carrera de Ingeniería en Sistemas de sexto semestre, carrera muy acorde a mis intereses y habilidades para seguir aprendiendo del ámbito tecnológico.",
    },
    {
      text: "FACULTAD",
      content:
        "Estoy en la Facultad de Ingeniería en la carrera de Ingenieria en sistemas de la universidad Uniminuto",
    },
    {
      text: "CURSO",
      content:
        "Estoy cursando 'Desarrollo Basado en Plataformas' con NRC 4337 de la carrera Ingeniería en Sistemas con el profesor Gustavo Enrique.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="tarjeta-completa">
      <div className="tarjeta-titulo-container">
        {linkData.map((item, index) => (
          <div className="tarjeta" key={index}>
            <a
              href="?"
              onClick={(event) => {
                event.preventDefault();
                handleToggle(index);
              }}
            >
              <h2>{item.text}</h2>
            </a>
          </div>
        ))}
      </div>
      <div className="tarjeta-content-container">
        {linkData.map((item, index) => (
          <div
            className={`tarjeta-content ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >
            {activeIndex === index ? <p>{item.content}</p> : null}
          </div>
        ))}
        {activeIndex === null && (
          <div className="tarjeta-content">
            <p className="hola-text">HOLA!</p>
          </div>
        )}
      </div>
      <div class="foto-derecha">
        <div class="imagen-container">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQH1Ow7sVMYQXQ/profile-displayphoto-shrink_800_800/0/1682211591200?e=1697673600&v=beta&t=HGApXSXkmQeQqrhs8kjNVsmldSAuZ508yjKeldxHjyo"
            alt="Imagen"
            class="imagen"
          />
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
