import { Link } from "react-router-dom";
import Footer from "../componentes/general/Footer";
import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionPreguntasFrec from "../componentes/preguntasFrec/SectionPreguntasFrec";

const PreguntasFrec = () => {
    return ( 
        <div>
            <Header verNav={true}/>
            <main>
                <SubTitle subtitulo={"Preguntas frecuentes"}/>
                <SectionPreguntasFrec/>
                <div className="flex flex-col items-center justify-center gap-6 my-7">
                    <p>Conoce nuestro Chat de IA</p>
                    <Link to={'/chat'} 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                     py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md">
                        Ir al Chat
                     </Link>
                </div>
            </main>
            <Footer/>
        </div>
     );
}
 
export default PreguntasFrec;