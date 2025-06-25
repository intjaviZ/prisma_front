import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const ContextOrientador = createContext();

export const OrientadorProvider = () => {
    let [orientador, setOrientador] = useState({
        "permissions": false,
        "nombre": "",
        "escuelaId": "",
        "password": ""
    });

    const actualizarOrientador = (valor, campo) => {
        setOrientador(prev => ({ ...prev, [campo]: valor }));
    };

    const limpiarOrientador = () => {
        setOrientador({ permissions: false, nombre: '', escuelaId: '', password:'' });
    };

    const acceder = () => {
        setOrientador(prev => ({ ...prev, ['permissions']: true }));
    };

    useEffect(() => {
        console.log(orientador);
        
    },[orientador]);

    return (
        <ContextOrientador.Provider value={{orientador, actualizarOrientador, limpiarOrientador, acceder}}>
            <Outlet/>
        </ContextOrientador.Provider>
     );
}

export const useOrientador = () => useContext(ContextOrientador);