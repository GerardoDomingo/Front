import React from 'react';
import '../Estilo/Menu1.css'; // Asegúrate de importar tus estilos CSS


function MenuEmpleados() {
    return (
        <div role="navigation">
            <div class="">
              <div class="text-center">
                <nav class="main-nav-wrap">
                  <ul class="top-bar">
                    <li class="nav-item">
                      <a href="/Admin/EmpleadosAltas" class="nav-link"><span class="inner-link">Altas</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/EmpleadosCrud" class="nav-link"><span class="inner-link">Administrar Empleado</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

    );
}

export default MenuEmpleados;