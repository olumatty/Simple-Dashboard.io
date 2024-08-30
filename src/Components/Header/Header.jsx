import React from "react";
import './Header.css'

const Header = () => {
    return ( 
        <div className="header_card">
            <div className="Title">
                <h2> Dashboard logistica</h2>
                <button>Exportar relatorio</button>
            </div>
            <div className="Cards">
                <div className="card">
                    <p> pacotes em separacoa</p>
                    <h2>1.234</h2>
                </div>

                <div className="card">
                    <p> pacotes pendentes de envio</p>
                    <h2 className="red">3.210</h2>
                </div>

                <div className="card">
                    <p> pacotes prontos para envio</p>
                    <h2>3.210</h2>
                </div>

                <div className="card">
                    <p> Docas disponivels</p>
                    <h2>3</h2>
                </div>
            </div>

        </div>
     );
}
 
export default Header;