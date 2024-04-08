// PerfilUsuario.jsx
import React from 'react';
import '../Estilo/PerfilUsuario.css';


import imagen from '../img/usuario.jpg';

const PerfilUsuario = ({ nombre, informacion }) => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const handleEdit = (section) => {
        // Aquí puedes agregar la lógica para manejar la edición de cada sección
        console.log(`Editar ${section}`);
    };

    return (
        <center>
            <div className="perfil-container">
                <div className="tarjeta">
                    <div className="imagen-container">
                        {/* Utiliza la foto de perfil del usuario si está disponible, de lo contrario, usa una imagen predeterminada */}
                        <img src={userData && userData.fotoPerfil ? userData.fotoPerfil : imagen} alt="Foto de perfil" className="imagen-perfil" />
                    </div>
                    <h2 className="nombre-usuario">{userData ? `${userData.cli_nombre} ${userData.cli_apaterno} ${userData.cli_amaterno}` : 'Usuario'}</h2>
                    <p className="informacion-usuario">
                        {/* Mostrar información del usuario si está disponible */}
                        {userData ? `Correo electrónico: ${userData.cli_correo}` : ''}
                        <br />
                        {userData && userData.cli_telefono ? `Teléfono: ${userData.cli_telefono}` : ''}
                        <br />
                        {userData && userData.cli_direccion ? `Dirección: ${userData.cli_direccion.calle_No_casa}, ${userData.cli_direccion.colonia}` : ''}
                    </p>
                </div>
            </div>
        </center>
    );
};

export default PerfilUsuario;

