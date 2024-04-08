import React from 'react';
import imagen1 from '../imagenes/cortina-luz-solar.jpg';
import imagen2 from '../imagenes/panaderia2.jpg';

const PaginaPrincipal = () => {
  return (
    
    <div className="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src={imagen1} alt="Imagen 1" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">Las Mejores Cortinas</h4>
                <h1 className="display-3 text-white mb-md-4">Cambiando Vidas Desde 1890</h1>
                <a href="./nosotros" className="btn btn-primary py-md-3 px-md-5 mt-2">QUIENES SOMOS</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src={imagen2} alt="Imagen 2" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h4 className="text-white text-uppercase mb-md-3">Las Mejores Cortinas</h4>
                <h1 className="display-3 text-white mb-md-4">Cambiando Vidas Desde 1890</h1>
                <a href="./nosotros" className="btn btn-primary py-md-3 px-md-5 mt-2">SOBRE NOSOTROS</a>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
          <div className="btn btn-secondary px-0" style={{ width: "45px", height: "45px" }}>
            <span className="carousel-control-prev-icon mb-n1"></span>
          </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
          <div className="btn btn-secondary px-0" style={{ width: "45px", height: "45px" }}>
            <span className="carousel-control-next-icon mb-n1"></span>
          </div>
        </a>
      </div>
    </div>

    
  );
}

export default PaginaPrincipal;
