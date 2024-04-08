import React from 'react';
import '../Estilo/Menu1.css'; // Asegúrate de importar tus estilos CSS
import imagen from '../img/Logo_CortiMundo_blanco.png';

function Menu() {
  return (
  
    <body>
        <div role="navigation">
            <div class="">
              <div class="brand-logo">
                 <img src={imagen} alt="logo empresa"  id="logoEmpresdmin" />
              </div>
              <div class="brand-phone">
                <a href="#"><i class="fa fa-phone me-3"></i>7711253092</a>
              </div>
              <div class="text-center">
                <nav class="top-bar-wrap">
                  <ul class="top-bar">
                    <li class="nav-item">
                      <a href="/Admin/Productos" class="nav-link"><span class="inner-link">PRODUCTOS</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Dispositivos" class="nav-link"><span class="inner-link">Dispositivos</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Empleados" class="nav-link"><span class="inner-link">Empleados</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Fqts" class="nav-link"><span class="inner-link">Faqts</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Contacto" class="nav-link"><span class="inner-link">Contacto</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/" class="nav-link"><span class="inner-link">Cerrar Sesión</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
         
    
          <script src="../js/bootstrap.min.js"></script>
        
    </body>
    

      
  );
}

export default Menu;