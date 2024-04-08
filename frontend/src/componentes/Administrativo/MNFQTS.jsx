import React from 'react';
import '../Estilo/Menu1.css'; // Asegúrate de importar tus estilos CSS


function MenuDispositivos() {
    return (
        <div role="navigation">
            <div class="">
              <div class="text-center">
                <nav class="main-nav-wrap">
                  <ul class="top-bar">
                    <li class="nav-item">
                      <a href="/Admin/Fqts/Mision" class="nav-link"><span class="inner-link">mision</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Fqts/Vision" class="nav-link"><span class="inner-link">vision</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/Fqts/Politicas" class="nav-link"><span class="inner-link">Politicas</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

    );
}

export default MenuDispositivos;