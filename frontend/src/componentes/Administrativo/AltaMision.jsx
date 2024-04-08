import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mision = () => {
    const [mision, setMision] = useState('');
    const [editando, setEditando] = useState(false);
    const [nuevaMision, setNuevaMision] = useState('');

    useEffect(() => {
        obtenerMision();
    }, []);

    const obtenerMision = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/mision');
            setMision(respuesta.data.valor);
        } catch (error) {
            console.error('Hubo un error al obtener la misión: ', error);
        }
    };

    const actualizarMision = async () => {
        try {
            await axios.put('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/misionActualizacion', { valor: nuevaMision });
            setMision(nuevaMision);
            setEditando(false);
        } catch (error) {
            console.error('Hubo un error al actualizar la misión: ', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actualizarMision(); // Llamar a la función para actualizar la misión
        } catch (error) {
            console.error('Error actualizando misión: ', error);
        }
    };

    return (
        <center>
            <div>
                {mision && (
                    <div>
                        <h2>Misión</h2>
                        {!editando ? (
                            <div className='d1'>
                                <p>{mision}</p>
                                <button onClick={() => setEditando(true)}>Editar</button><br /><br />
                            </div>
                        ) : (
                            <div className='d1'>
                                <form onSubmit={handleSubmit}>
                                    <textarea value={nuevaMision} style={{ width: 'auto', minHeight: '150px', maxWidth: '390px' }} onChange={(e) => setNuevaMision(e.target.value)} /> <br /><br />
                                    <button type="submit">Guardar</button>
                                    <button onClick={() => setEditando(false)}>Cancelar</button>
                                </form>
                            </div>
                        )}
                    </div>
                )}
                {!mision && (
                    <div>
                        <h2>Misión</h2>
                        <p>No hay misión definida.</p>
                        <button onClick={() => setEditando(true)}>Agregar</button>
                    </div>
                )}
            </div>
        </center>
    );
};

export default Mision;
