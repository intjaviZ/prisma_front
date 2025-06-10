import { createContext, useContext, useState } from "react";

const ContextOrientador = createContext();

export const OrientadorProvider = ({ children }) => {
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

    return (
        <ContextOrientador.Provider value={{orientador, actualizarOrientador, limpiarOrientador}}>
            {children}
        </ContextOrientador.Provider>
     );
}

export const useOrientador = () => useContext(ContextOrientador);