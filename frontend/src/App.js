import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutConEncabezado from './componentes/Layouts/LayoutConEncabezado';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import Contacto from './componentes/Publicos/Contacto';
import LoginRegistro from './componentes/Compartidos/Login_Registro';
import Productos from './componentes/Publicos/DetalleProducto';
import Perfil from './componentes/Compartidos/Perfil';
import Dispositivo from './componentes/Compartidos/Dispositivo';
import AltaCliente from './componentes/Compartidos/AltaCliente';
import AltaIOT from './componentes/Compartidos/AltaIOT';


import LayoutConEncabezadoAdmin from './componentes/Layouts/LayoutConEncabezadoAdmin';
import MNProductos from './componentes/Administrativo/MNProductos';
import MNEmpleados from './componentes/Administrativo/MNEmpleados';
import MNDispositivos from './componentes/Administrativo/MNDispositivos';
import MNFQTS from './componentes/Administrativo/MNFQTS';
import MNContacto from './componentes/Administrativo/MNContacto';

import InventarioProductos from './componentes/Administrativo/InventarioProductos';
import AltaProductos from './componentes/Administrativo/AltaProductos';
import AltaCategorias from './componentes/Administrativo/AltaCategorias';

import AltaMision from './componentes/Administrativo/AltaMision';
import AltaVision from './componentes/Administrativo/AltaVision';
import AltaPoliticas from './componentes/Administrativo/AltaPoliticas';


import RegistroEmpleado from './componentes/Administrativo/AltaEmpleado';
import AltaEmpleado from './componentes/Administrativo/AltaEmpleado';
import CrudEmpleados from './componentes/Administrativo/CrudEmpleados';
import VerContacto from './componentes/Administrativo/VerContacto';


import PaginaAdministrativa from './paginas/PaginaAdministrativa';
import InformacionEmpresa from './componentes/Publicos/InformacionEmpresa';




const App = () => {
  return (
    <>
      <Routes>
          {/* Rutas Publicas */}
        <Route path="/" element={<LayoutConEncabezado><PaginaPrincipal /></LayoutConEncabezado>} />
        <Route path="/inicio" element={<LayoutConEncabezado><PaginaPrincipal /></LayoutConEncabezado>} />
        <Route path="/login" element={<LayoutConEncabezado><LoginRegistro /></LayoutConEncabezado>} />
        <Route path="/contacto" element={<LayoutConEncabezado><Contacto /></LayoutConEncabezado>} />
        <Route path="/productos" element={<LayoutConEncabezado><Productos /></LayoutConEncabezado>} />
        <Route path="/nosotros" element={<LayoutConEncabezado><InformacionEmpresa /></LayoutConEncabezado>} />
        <Route path="/Registro" element={<LayoutConEncabezado><AltaCliente /></LayoutConEncabezado>} />

        {/* Rutas Usuario */}
        <Route path="/Usuario" element={<LayoutConEncabezado><PaginaPrincipal /></LayoutConEncabezado>} />
        <Route path="/Usuario/perfil" element={<LayoutConEncabezado><Perfil /></LayoutConEncabezado>} />
        <Route path="/Usuario/Dispositivo" element={<LayoutConEncabezado><Dispositivo /></LayoutConEncabezado>} />
        <Route path="/Usuario/inicio" element={<LayoutConEncabezado><PaginaPrincipal /></LayoutConEncabezado>} />
        <Route path="/Usuario/contacto" element={<LayoutConEncabezado><Contacto /></LayoutConEncabezado>} />
        <Route path="/Usuario/productos" element={<LayoutConEncabezado><Productos /></LayoutConEncabezado>} />
        <Route path="/Usuario/nosotros" element={<LayoutConEncabezado><InformacionEmpresa /></LayoutConEncabezado>} />
        <Route path="/Usuario/AgregarIOT" element={<LayoutConEncabezado><AltaIOT /></LayoutConEncabezado>} />
        
        {/* Rutas Administrativas */}
        {/* Productos */}
        <Route path="/Admin" element={<LayoutConEncabezadoAdmin><MNProductos/><PaginaAdministrativa /></LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Productos" element={<LayoutConEncabezadoAdmin><MNProductos/><AltaProductos /></LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/ProductosAlta" element={<LayoutConEncabezadoAdmin><MNProductos/> <AltaProductos /></LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/ProductosInventario" element={<LayoutConEncabezadoAdmin><MNProductos/> <InventarioProductos /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/ProductosCategorias" element={<LayoutConEncabezadoAdmin><MNProductos/> <AltaCategorias /> </LayoutConEncabezadoAdmin>} />

        {/* Empleados */}
        <Route path="/Admin/Empleados" element={<LayoutConEncabezadoAdmin><MNEmpleados/> <RegistroEmpleado /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/EmpleadosAltas" element={<LayoutConEncabezadoAdmin><MNEmpleados/> <AltaEmpleado /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/EmpleadosCrud" element={<LayoutConEncabezadoAdmin><MNEmpleados/> <CrudEmpleados /> </LayoutConEncabezadoAdmin>} />

        {/* Dispositivos */}
        <Route path="/Admin/Dispositivos" element={<LayoutConEncabezadoAdmin><MNDispositivos/> <AltaIOT /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Alta" element={<LayoutConEncabezadoAdmin><MNDispositivos/> <AltaIOT /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Administrar" element={<LayoutConEncabezadoAdmin><MNDispositivos/> <AltaIOT /> </LayoutConEncabezadoAdmin>} />

        {/* Fqts */}
        <Route path="/Admin/Fqts" element={<LayoutConEncabezadoAdmin><MNFQTS/> <AltaMision /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Fqts/Mision" element={<LayoutConEncabezadoAdmin><MNFQTS/> <AltaMision /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Fqts/Vision" element={<LayoutConEncabezadoAdmin><MNFQTS/> <AltaVision /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/Fqts/Politicas" element={<LayoutConEncabezadoAdmin><MNFQTS/> <AltaPoliticas /> </LayoutConEncabezadoAdmin>} />

        {/* Contacto */}
        <Route path="/Admin/Contacto" element={<LayoutConEncabezadoAdmin><MNContacto/> <VerContacto /> </LayoutConEncabezadoAdmin>} />
        <Route path="/Admin/VerContactos" element={<LayoutConEncabezadoAdmin><MNContacto/> <VerContacto /> </LayoutConEncabezadoAdmin>} />
        
        <Route path="/Admin/CrudEmpleados" element={<LayoutConEncabezadoAdmin><CrudEmpleados /></LayoutConEncabezadoAdmin>} />
        
        {/* Aquí puedes añadir más rutas administrativas según sea necesario */}
      </Routes>
    </>
  );
};

export default App;
