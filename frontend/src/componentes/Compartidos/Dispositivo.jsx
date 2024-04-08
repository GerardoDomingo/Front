import '../Estilo/Dispositivo.css';
import imagen from '../img/CORTINA ABIERTA.jpg';
import imagen2 from '../img/CORTINA CERRADA.jpg';

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

const userData = JSON.parse(localStorage.getItem('userData'));
const idUsuario = userData._id;

function Dispositivo() {
    const [curtainOpen, setCurtainOpen] = useState(false);
    const [dispositivos, setDispositivos] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const [dispositivoActivo, setDispositivoActivo] = useState({}); // Estado para almacenar la info del dispositivo activo

    useEffect(() => {
        const fetchDispositivos = async () => {
            try {
                const response = await axios.get(`https://pract-8613e.uc.r.appspot.com/api/clientes/${idUsuario}/dispositivos`);
                setDispositivos(response.data);

            } catch (error) {
                console.error('Error al obtener dispositivos:', error);
            }
        };

        fetchDispositivos();
    }, [idUsuario]);

    useEffect(() => {
        if (selectedDevice) {
            let intervalId; // Variable para almacenar el ID del intervalo
        
            // Función para buscar el dispositivo activo y actualizar los datos
            const fetchDispositivoActivo = async () => {
                try {
                    const response = await axios.get(`https://pract-8613e.uc.r.appspot.com/api/dispositivos/${selectedDevice}`);
                    setDispositivoActivo(response.data);
                    if(response.data.estado_cortinero === "cerrado"){
                        setCurtainOpen(false);
                    }else if(response.data.estado_cortinero === "abierto"){
                        setCurtainOpen(true);
                    }
                } catch (error) {
                    console.error('Error al obtener el dispositivo activo:', error);
                }
            };
        
            // Llamada inicial al montar el componente
            fetchDispositivoActivo();
        
            // Configurar un intervalo para actualizar los datos por segundo
            intervalId = setInterval(fetchDispositivoActivo, 200);
            console.log(dispositivoActivo);
            // Limpiar el intervalo cuando el componente se desmonte
            return () => clearInterval(intervalId);
        }
    }, [selectedDevice]);

    const toggleCurtain = async () => {
        setCurtainOpen(!curtainOpen);
        try {
            // Envía un mensaje MQTT con el nuevo estado 
            const topic = `accion/cortina/cortimundo/${dispositivoActivo.clave_cortinero}`;
            const message = curtainOpen ? 'cerrado' : 'abierto';
            const response = await axios.post(`https://pract-8613e.uc.r.appspot.com/api/dispositivos/iot/send-message`, {
                topic: topic,
                message: message
            });

            console.log(message,'Cortina actualizada',response);
        } catch (error) {
            console.error('Error al actualizar el estado de la cortina:', error);
        }
    };

    const handleDeviceSelect = (deviceId) => {
        setSelectedDevice(deviceId);
    };

    return (
        <center>
            <div>
                <h2>Selecciona un Dispositivo:</h2>
                <select value={selectedDevice} onChange={(e) => handleDeviceSelect(e.target.value)}>
                    <option value="">Selecciona un dispositivo</option>
                    {dispositivos.map(device => (
                        <option key={device._id} value={device._id}>
                            {device.nombre}
                        </option>
                    ))}
                </select>
                {selectedDevice && <p>Dispositivo seleccionado: {selectedDevice}</p>}
            </div>
            { }
            <div id='tarjeta' className='tarjeta'>
                <div className="app">
                    <main className="main-control">
                        <h1>{dispositivoActivo.nombre}</h1>

                        <img src={curtainOpen ? imagen : imagen2} alt="" id='imagencortinaAbierta' />
                        <div className={`curtain-status ${curtainOpen ? 'closed' : 'open'}`}>
                            {curtainOpen ? 'Cerrar Cortinas' : 'Abrir Cortinas'}
                        </div>
                        <button className="curtain-toggle" onClick={toggleCurtain}>
                            {curtainOpen ? 'Cerrar Cortinas' : 'Abrir Cortinas'}
                        </button>

                        <div className="temperature">
                            Temperatura actual:
                            <span className="temp-value"> {dispositivoActivo.estado_tem}°C</span>
                        </div>
                        <div className="temperature">
                            Humedad actual:
                            <span className="temp-value"> {dispositivoActivo.estado_hun}%</span>
                        </div>
                    </main>
                </div>
            </div>
        </center>
    );
}

export default Dispositivo;
