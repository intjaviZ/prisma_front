import { useLocation } from "react-router-dom";
import Footer from "../componentes/general/Footer";
import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionResultado from "../componentes/resultado/SectionResultado";
import { useEffect, useState } from "react";

const Resultado = () => {
    const location = useLocation();
    const resultados = location.state || {};
    const [prueba, setPrueba] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/test/resultado/3');
            const data = await response.json();
            setPrueba(data);
        }
        fetchData();
    },[]);
    return ( 
        <div>
            <Header verNav={true}/>
            <main className="mt-0 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Resultados"/>
                <SectionResultado resultados={prueba}/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Resultado;