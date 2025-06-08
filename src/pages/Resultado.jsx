import { useLocation } from "react-router-dom";
import Footer from "../componentes/general/Footer";
import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionResultado from "../componentes/resultado/SectionResultado";

const Resultado = () => {
    const location = useLocation();
    const { resultados = {} }  = location.state || {};

    return ( 
        <div>
            <Header verNav={true}/>
            <main className="mt-0 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Resultados"/>
                <SectionResultado resultados={resultados}/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Resultado;