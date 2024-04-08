import React from 'react';
import '../Estilo/Menu1.css'; // Asegúrate de importar tus estilos CSS


function MenuProductos() {
    return (
        <div role="navigation">
            <div class="">
              <div class="text-center">
                <nav class="main-nav-wrap">
                  <ul class="top-bar">
                    <li class="nav-item">
                      <a href="/Admin/ProductosAlta" class="nav-link"><span class="inner-link">Alta Productos</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/ProductosInventario" class="nav-link"><span class="inner-link">Inventario</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="/Admin/ProductosCategorias" class="nav-link"><span class="inner-link">Categorias</span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

    );
}

export default MenuProductos;