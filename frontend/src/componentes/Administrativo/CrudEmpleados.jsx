import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatalogoEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    // Estados para la edición de un empleado
    const [nombre, setNombre] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [telefono, setTelefono] = useState('');
    const [puesto, setPuesto] = useState('');
    const [usuario, setUsuario] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [preguntaSecreta, setPreguntaSecreta] = useState('');
    const [respuestaSecreta, setRespuestaSecreta] = useState('');
    const [direccion, setDireccion] = useState({
        calle_No_casa: '',
        colonia: ''
    });
    const [ID, setID] = useState('');



    useEffect(() => {
        obtenerEmpleados();
    }, []);

    const obtenerEmpleados = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/empleados');
            setEmpleados(respuesta.data);
        } catch (error) {
            console.error('Hubo un error al obtener los empleados: ', error);
        }
    };

    const eliminarEmpleado = async (id) => {
        try {
            await axios.delete(`https://pract-8613e.uc.r.appspot.com/api/empleadodelet/${id}`);
            obtenerEmpleados(); // Recargar la lista tras eliminar
        } catch (error) {
            console.error('Hubo un error al eliminar el producto: ', error);
        }
    };

    const abrirModalParaActualizar = (empleado) => {
        if (empleado && empleado._id) {
            setID(empleado._id);
            setNombre(empleado.E_nombre);
            setApellidoPaterno(empleado.E_apaterno);
            setApellidoMaterno(empleado.E_amaterno);
            setTelefono(empleado.E_telefono);
            setPuesto(empleado.E_puesto);
            setUsuario(empleado.E_usuario);
            setTipoUsuario(empleado.E_usuarioTipo);
            setCorreo(empleado.E_correo);
            setPreguntaSecreta(empleado.E_pregunta_secreta);
            setRespuestaSecreta(empleado.E_respuesta_secreta);
            setDireccion({
                calle_No_casa: empleado.E_direccion.E_calle_No_casa,
                colonia: empleado.E_direccion.E_colonia
            });
            setMostrarModal(true);
        } else {
            console.error('Empleado no válido para actualizar:', empleado);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const empleadoActualizado = {
            E_nombre: nombre,
            E_apaterno: apellidoPaterno,
            E_amaterno: apellidoMaterno,
            E_telefono: telefono,
            E_puesto: puesto,
            E_usuario: usuario,
            E_usuarioTipo: tipoUsuario,
            E_correo: correo,
            E_pregunta_secreta: preguntaSecreta,
            E_respuesta_secreta: respuestaSecreta,
            E_direccion: {
                E_calle_No_casa: direccion.calle_No_casa,
                E_colonia: direccion.colonia
            }
        };
        try {
            await axios.put(`https://pract-8613e.uc.r.appspot.com/api/empleadoactualizar/${ID}`, empleadoActualizado);
            setMostrarModal(false);
            obtenerEmpleados(); // Recarga la lista de empleados
        } catch (error) {
            console.error('Error actualizando empleado: ', error);
        }
    };

    return (
        <div>
            {/* Lista de empleados */}
            <div>
                <h2>CONSULTA EMPLEADOS</h2>
                <div className="centro2">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Teléfono</th>
                                <th>Puesto</th>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map((empleado) => (
                                <tr key={empleado._id}>
                                    <td>{empleado.E_nombre + empleado.E_apaterno + empleado.E_amaterno}</td>
                                    <td>{empleado.E_telefono}</td>
                                    <td>{empleado.E_puesto}</td>
                                    <td>{empleado.E_usuario}</td>
                                    <td>{empleado.E_correo}</td>
                                    <td>
                                        <button onClick={() => abrirModalParaActualizar(empleado)}>Actualizar</button>
                                        <button onClick={() => eliminarEmpleado(empleado._id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal para edición */}
            {mostrarModal && (
                <center>
                    <div style={{ top: '5%', left: '30%', padding: '10px' }}>
                        <div className='d1'>
                            <form onSubmit={handleSubmit}>
                                <label>Nombre:</label>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />
                                <label>Apellido Paterno:</label>
                                <input type="text" value={apellidoPaterno} onChange={(e) => setApellidoPaterno(e.target.value)} /><br />
                                <label>Apellido Materno:</label>
                                <input type="text" value={apellidoMaterno} onChange={(e) => setApellidoMaterno(e.target.value)} /><br />
                                <label>Teléfono:</label>
                                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} /><br />
                                <label>Puesto:</label>
                                <input type="text" value={puesto} onChange={(e) => setPuesto(e.target.value)} /><br />
                                <label>Usuario:</label>
                                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} /><br />
                                <label>Tipo de Usuario:</label>
                                <input type="text" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)} /><br />
                                <label>Correo:</label>
                                <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} /><br />
                                <label>Pregunta Secreta:</label>
                                <input type="text" value={preguntaSecreta} onChange={(e) => setPreguntaSecreta(e.target.value)} /><br />
                                <label>Respuesta Secreta:</label>
                                <input type="text" value={respuestaSecreta} onChange={(e) => setRespuestaSecreta(e.target.value)} /><br />
                                <label>Calle y Número:</label>
                                <input type="text" value={direccion.calle_No_casa} onChange={(e) => setDireccion({ ...direccion, calle_No_casa: e.target.value })} /><br />
                                <label>Colonia:</label>
                                <input type="text" value={direccion.colonia} onChange={(e) => setDireccion({ ...direccion, colonia: e.target.value })} /><br />
                                <button type="submit">Actualizar Empleado</button>
                                <button onClick={() => setMostrarModal(false)}>Cerrar</button>
                            </form>
                        </div>
                    </div>
                </center>
            )}

        </div>
    );
};

export default CatalogoEmpleados;
