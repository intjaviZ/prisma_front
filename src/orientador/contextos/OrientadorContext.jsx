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

    const acceder = () => {
        setOrientador(prev => ({ ...prev, ['permissions']: true }));
    };

    return (
        <ContextOrientador.Provider value={{orientador, actualizarOrientador, limpiarOrientador, acceder}}>
            {children}
        </ContextOrientador.Provider>
     );
}

export const useOrientador = () => useContext(ContextOrientador);