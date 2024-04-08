import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vision = () => {
    const [vision, setVision] = useState('');
    const [editando, setEditando] = useState(false);
    const [nuevaVision, setNuevaVision] = useState('');

    useEffect(() => {
        obtenerVision();
    }, []);

    const obtenerVision = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/vision');
            setVision(respuesta.data.valor);
        } catch (error) {
            console.error('Hubo un error al obtener la visión: ', error);
        }
    };

    const actualizarVision = async () => {
        try {
            await axios.put('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/visionActualizacion', { valor: nuevaVision });
            setVision(nuevaVision);
            setEditando(false);
        } catch (error) {
            console.error('Hubo un error al actualizar la visión: ', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await actualizarVision();
        } catch (error) {
            console.error('Error actualizando visión: ', error);
        }
    };

    return (
        <center>
            <div>
                {vision ? (
                    <div>
                        <h2>Visión</h2>
                        {!editando ? (
                            <div className='d1'>
                                <p>{vision}</p>
                                <button onClick={() => setEditando(true)}>Editar</button><br /><br />
                            </div>
                        ) : (
                            <div className='d1'>
                                <form onSubmit={handleSubmit}>
                                    <textarea 
                                        value={nuevaVision} 
                                        style={{ width: 'auto', minHeight: '150px', maxWidth: '390px' }} 
                                        onChange={(e) => setNuevaVision(e.target.value)} 
                                    /><br /><br />
                                    <button type="submit">Guardar</button>
                                    <button onClick={() => setEditando(false)}>Cancelar</button>
                                </form>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <h2>Visión</h2>
                        <p>No hay visión definida.</p>
                        <button onClick={() => setEditando(true)}>Agregar</button>
                    </div>
                )}
            </div>
        </center>
    );
};

export default Vision;
