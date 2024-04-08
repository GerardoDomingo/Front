import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../Estilo/estiloMenuN.css';
import '../Css/style.css';
import imagen from '../img/Logo_CortiMundo_blanco.png';

function Topbar() {
  return (
   
    <div className="container-fluid bg-primary d-none d-md-block">
      <div className="row align-items-center">

        <img src={imagen} alt="logo empresa" className="img-fluid" id="logoEmpresa" />

        <a href="#" className="navbar-brand mx-5 d-none d-lg-block">
          <h1 className="m-0 display-4 text-white">
            <span className="text-secondary">CORTI </span>MUNDO
          </h1>
        </a>

        <div className=" text-center">
          <div className="d-inline-flex align-items-center">
            <a className="text-white px-3" href="#">
              <FaFacebookF />
            </a>
            <a className="text-white px-3" href="#">
              <FaTwitter />
            </a>
            <a className="text-white px-3" href="#">
              <FaInstagram />
            </a>
            <a className="text-white pl-3" href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div >

  );
}

function Navbar() {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <a href="#" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary"><span className="text-secondary">CORTI </span>MUNDO</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <a href="./inicio" className="nav-item nav-link active">INICIO</a>
              <a href="./nosotros" className="nav-item nav-link active">QUIENES SOMOS</a>
            </div>
            <div className="navbar-nav mr-auto py-0">
              <a href="./productos" className="nav-item nav-link">PRODUCTOS</a>
              <a href="./contacto" className="nav-item nav-link">CONTACTO</a>
              <a href="./login" className="nav-item nav-link">INICIAR SESIÓN</a>
              <a href="./Registro" className="nav-item nav-link">Registro</a>
            </div>
          </div>
        </nav>
      </div>
    </div>


  );
}

function Menu() {
  return (
    <div>
      <Topbar />
      <Navbar />
    </div>
  );
}

export default Menu;