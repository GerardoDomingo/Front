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
                      <a href="" class="nav-link"><span class="inner-link">Frecuentes</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/VerContactos" class="nav-link"><span class="inner-link">Todos</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

    );
}

export default MenuDispositivos;