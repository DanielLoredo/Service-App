import React from "react";
import "./../css/HeaderStyle.css";
import logo_img from "./../img/daniel-icon.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo-box">
          <img src={logo_img} alt="Logo" className="logo" />
        </div>

        <div className="main-content">
          <h1 className="head-primary">
            <span className="head-primary-main">Servicio TI</span>
            <span className="head-primary-sub">Soporte Técnico del bueno</span>
          </h1>

          <a href="#" className="btn btn-white btn-animated">
            Llama Ya
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
