import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Politicas = () => {
    const [politicas, setPoliticas] = useState([]);
    const [editando, setEditando] = useState(false);
    const [nuevasPoliticas, setNuevasPoliticas] = useState([]);

    useEffect(() => {
        obtenerPoliticas();
    }, []);

    const obtenerPoliticas = async () => {
        try {
            const respuesta = await axios.get('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/politicas');
            setPoliticas(respuesta.data.valor);
            // Copiar las políticas actuales para el modo de edición
            setNuevasPoliticas(respuesta.data.valor.slice());
        } catch (error) {
            console.error('Hubo un error al obtener las políticas: ', error);
        }
    };

    const actualizarPoliticas = async () => {
        try {
            await axios.put('https://pract-8613e.uc.r.appspot.com/api/infoEmpresa/politicasActualizacion', { valor: nuevasPoliticas });
            setPoliticas(nuevasPoliticas);
            setEditando(false);
        } catch (error) {
            console.error('Hubo un error al actualizar las políticas: ', error);
        }
    };

    const handleChangePolitica = (index, newValue) => {
        const nuevasPoliticasCopy = [...nuevasPoliticas];
        nuevasPoliticasCopy[index] = newValue;
        setNuevasPoliticas(nuevasPoliticasCopy);
    };

    return (
        <center>
            <div className="d2">
                {politicas.length > 0 && (
                    <div>
                        <h2>Políticas</h2>
                        {!editando ? (
                            <div>
                                {politicas.map((politica, index) => (
                                    <p key={index}>{(index + 1) + ".- " + politica}</p>
                                ))}
                                <button onClick={() => setEditando(true)}>Editar</button><br /><br />
                            </div>
                        ) : (
                            <div>
                                {nuevasPoliticas.map((politica, index) => (
                                    <div key={index}>
                                        <input id='Politicas' type="text" value={politica} onChange={(e) => handleChangePolitica(index, e.target.value)} /><br /><br />
                                    </div>
                                ))}
                                <button onClick={actualizarPoliticas}>Guardar</button><br /><br />
                                <button onClick={() => setEditando(false)}>Cancelar</button>
                            </div>
                        )}
                    </div>
                )}
                {politicas.length === 0 && (
                    <div>
                        <h2>Políticas</h2>
                        <p>No hay políticas definidas.</p>
                        <button onClick={() => setEditando(true)}>Agregar</button>
                    </div>
                )}
            </div>
        </center>
    );
};

export default Politicas;
