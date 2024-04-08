import React from 'react';
import { useLocation } from 'react-router-dom';
import PieDePagina from '../Compartidos/PieDePaginaAdmin';
import MenuAdmin from '../Administrativo/Menuadmin2';
import Menu from '../Compartidos/MenuPublico';

const LayoutConEncabezado = ({ children },{ children2 }) => {
  const location = useLocation();
  const mostrarEncabezadoPublico = !location.pathname.startsWith('/Admin');

  return (
    <>
      {mostrarEncabezadoPublico ? <Menu /> : <MenuAdmin />}
      <div>{children}</div>
      <div>{children2}</div>
      <PieDePagina />
    </>
  );
};

export default LayoutConEncabezado;