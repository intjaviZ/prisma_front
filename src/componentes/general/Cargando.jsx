import { useEffect, useState } from "react";

const Cargando = () => {
    const [sinDatos,setSinDatos] = useState(false);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            // ModalError("Oooops!","Intenta más tarde", true);
            setSinDatos(true);
        }, 5000);

        return () => clearTimeout(timeOut);
    },[]);
    return (
        <div className="h-full w-full flex flex-col items-center justify-center flex-grow pt-20">
            {!sinDatos ? <>
                <div className="border-[#5f687b] h-28 lg:h-40 2xl:h-60 w-28 lg:w-40 2xl:w-60 animate-spin rounded-full border-8 border-t-[#10bc69]" />
                <h1 className="pt-10 lg:text-xl 2xl:text-5xl">Cargando...</h1>
            </> : <h1 className="pt-10 md:text-xl lg:text-2xl xl:text-5xl">ERROR DE SERVIDOR :&#40;</h1>}
        </div>
    );
}
export default Cargando;