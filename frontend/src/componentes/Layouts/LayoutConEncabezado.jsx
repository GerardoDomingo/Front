// En src/componentes/LayoutConEncabezado.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuUsuario from '../Compartidos/MenuUsuario';
import Menu from '../Compartidos/MenuPublico';
import PieDePaginaPublica from '../Compartidos/PieDePaginaPublica';
import PieDePaginaUsuario from '../Compartidos/PieDePaginaUsuario';

const LayoutConEncabezado = ({ children }) => {
  const location = useLocation();
  const mostrarEncabezadoPublico = !location.pathname.startsWith('/Usuario');

  return (
    <>
      {mostrarEncabezadoPublico ? <Menu /> : <MenuUsuario />}
      <div>{children}</div>
      {mostrarEncabezadoPublico ? <PieDePaginaPublica /> : <PieDePaginaUsuario />}
    </>
  );
};

export default LayoutConEncabezado;
