import React from "react";
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className=" dashboard-main dashboard-format-main">
        <p>Numero do pedido</p>
        <p> Data do pedido </p>
        <p> Situacao atual </p>
        <p> Qtd.itens </p>
        <p> Valor total do pedido </p>
        <p> Metodo de pagamento </p>
        <p className="main"> Acoes </p>
      </div>

      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>A caminho do destino</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      <hr/>
      
      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>Em seperacho</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      <hr/>

      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>Entregrue</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      <hr/>

      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>A caminho do destino</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      <hr/>
      
      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>Em seperacho</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      <hr/>

      <div className="dashboard-format dashboard-format-main">
            <p>#0123456789</p>
            <p>29/JUN/2023</p>
            <p>Entregrue</p>
            <p>5</p>
            <p>R$ 2,120,00</p>
            <p>Cartao de credito</p>
            <p>imprimir Etiqueta</p>
      </div>
      
    </div>
  );
};

export default Dashboard;
