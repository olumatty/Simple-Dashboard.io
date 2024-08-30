import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="content">
      <h2>Ultimos pedidos</h2>
      <div className="content-button">
        <button className="first">Em seperaco </button>
        <button className="second">A caminho do destino </button>
        <button className="third">Entregue </button>
      </div>
    </div>
  );
};

export default Content;
