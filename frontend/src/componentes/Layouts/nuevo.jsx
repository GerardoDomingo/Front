import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutConEncabezado from './componentes/Layouts/LayoutConEncabezado';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import PaginaAdministrativa from './paginas/PaginaAdministrativa';
import InformacionEmpresa from './componentes/Publicos/InformacionEmpresa';
import Login from './componentes/Autenticacion/FormularioInicioSesion';
import Productos from './componentes/Publicos/Productos';
import { CrudUsuarios, CrudInsertarAdmi } from './componentes/Administrativo/CRUDUsuarios';
import { CrudProductos, CrudinsertarProducto } from './componentes/Administrativo/CRUDProductos';
import CrudMisionVision from './componentes/Administrativo/CRUDMisionVision';
import CrudQuienesSomos from './componentes/Administrativo/CRUDQuienesSomos';
import CrudPoliticas from './componentes/Administrativo/CRUDPoliticas';
import CrudPreguntas from './componentes/Administrativo/CRUDPreguntasFrecuentes';
import PaginaCliente from './paginas/PaginaCliente';
import InformacionEmpresaCliente from './componentes/Cliente/InformacionEmpresaCliente';
import PaginaPrincipalCliente from './paginas/PaginaPrincipalCliente';
import AsigarIot from './componentes/Administrativo/CRUDAsigarIOT';
import ProductosFiltrados from './componentes/Cliente/productosFiltrados';
import ContactoCliente from './componentes/Cliente/ContactoCliente';
import IoTCliente  from './componentes/Cliente/IoTCliente';
import PoliticasPrivacidadCliente from './componentes/Cliente/PoliticasPrivacidadCliente';
import ProductosFondasCliente from './componentes/Cliente/ProductosFondasCliente';
import ProductosJoyasCliente from './componentes/Cliente/ProductosJoyasCliente';
import ProductosLlaverosCliente from './componentes/Cliente/ProductosLlaverosCliente';
import ProductosMarcosCliente from './componentes/Cliente/ProductosMarcosCliente';
import DetallesProductoCliente from './componentes/Cliente/DetalleProductoCliente';
import ProductosFiltradosPublico from './componentes/Publicos/productosFiltradosPublico';
import FormularioRegistro from './componentes/Autenticacion/FormularioRegistro';
import DetallesProducto from './componentes/Cliente/DetalleProducto';
import PreguntasFrecuentes from './componentes/Publicos/PreguntasFrecuentes';
import PreguntasFrecuentesCliente from './componentes/Cliente/PreguntasFrecuentesCliente';
import PerfilUsuario from './componentes/Cliente/Perfil';
//nuevo
import PreguntaSecreta from './componentes/Autenticacion/FormularioPregunta';
import MenuPassword from './componentes/Autenticacion/FormularioMenuContrasena'
import ValidarCorreo from './componentes/Autenticacion/FormularioCorreo';
import ValidarCodigo from './componentes/Autenticacion/FormularioCodigoVerificacion'
import ActualizaP from './componentes/Autenticacion/FormularioActualizarContrasena'
import FormularioIoT from './componentes/Cliente/DispositivoIot';
import RutaPrivada from './contextos/ContextoAutenticacion';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutConEncabezado><PaginaPrincipal /></LayoutConEncabezado>} />
        <Route path="/login" element={<LayoutConEncabezado><Login /></LayoutConEncabezado>} />
        <Route path="/empresa" element={<LayoutConEncabezado><InformacionEmpresaCliente /></LayoutConEncabezado>} />
        <Route path="/productos" element={<LayoutConEncabezado><Productos /></LayoutConEncabezado>} />
        <Route path="/preguntasFrecuentes" element={<LayoutConEncabezado><PreguntasFrecuentesCliente /></LayoutConEncabezado>} />        
        <Route path="/privacidad" element={<LayoutConEncabezado><PoliticasPrivacidadCliente /></LayoutConEncabezado>} />
        <Route path="/registro" element={<LayoutConEncabezado><FormularioRegistro /></LayoutConEncabezado>} />
        <Route path="/categorias/:categoria/:productoId" element={<LayoutConEncabezado><DetallesProducto /></LayoutConEncabezado>} />
        <Route path="/categorias/:categoria" element={<LayoutConEncabezado><ProductosFiltradosPublico /></LayoutConEncabezado>} />
        <Route path="/recuperar_password" element={<LayoutConEncabezado><MenuPassword/></LayoutConEncabezado>} />
        <Route path="/validar_correo" element={<LayoutConEncabezado><ValidarCorreo/></LayoutConEncabezado>} />
        <Route path="/confirmarToken" element={<LayoutConEncabezado><ValidarCodigo/></LayoutConEncabezado>} />
        <Route path="/actualizarPass/:id" element={<LayoutConEncabezado><ActualizaP/></LayoutConEncabezado>} />
        <Route path="/preguntaSecreta/:id" element={<LayoutConEncabezado><PreguntaSecreta/></LayoutConEncabezado>} />

        
        
        {/* Rutas Administrativas */}
        <Route path="/admin" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><PaginaAdministrativa /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/usuarios" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudUsuarios /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/productos" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudProductos /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/informacion/mision-vision-lista" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudMisionVision /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/informacion/lista-quienes-somos" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudQuienesSomos /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/informacion/politicas-privacidad-lista" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudPoliticas /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/preguntas-frecuentes" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudPreguntas /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/insertarUsuario" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudInsertarAdmi /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/insertarProductos" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><CrudinsertarProducto /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/asignar-IOT" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><AsigarIot /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/empresa" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><InformacionEmpresaCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/privacidad" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><PoliticasPrivacidadCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/admin/preguntasFrecuentes" element={<RutaPrivada rolesPermitidos={['administrador']}><LayoutConEncabezado><PreguntasFrecuentesCliente /></LayoutConEncabezado></RutaPrivada>} /> 
        {/* Rutas Clente */}
        <Route path="/cliente" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><PaginaPrincipalCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/empresaCliente" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><InformacionEmpresaCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/IoTCliente" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><IoTCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/politicasCliente" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><PoliticasPrivacidadCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/contactoCliente" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><ContactoCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/empresa" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><InformacionEmpresaCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/privacidad" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><PoliticasPrivacidadCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/contactos" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><ContactoCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/detallesProducto" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><DetallesProductoCliente /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/categorias/:categoria" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><ProductosFiltrados /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/preguntasFrecuentes" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><PreguntasFrecuentesCliente /></LayoutConEncabezado></RutaPrivada>} /> 
        <Route path="/cliente/perfil" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><PerfilUsuario /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/categorias/:categoria/:productoId" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><DetallesProducto /></LayoutConEncabezado></RutaPrivada>} />
        <Route path="/cliente/dispositivoIoT" element={<RutaPrivada rolesPermitidos={['cliente']}><LayoutConEncabezado><FormularioIoT /></LayoutConEncabezado></RutaPrivada>} />
    
      </Routes>
    </>
  );
};

export default App;