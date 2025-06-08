import { Link, useLocation } from "react-router-dom";
import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionPreguntasFrec from "../componentes/preguntasFrec/SectionPreguntasFrec";

const PreguntasFrec = () => {
    const location = useLocation();
    const { idEscuela, idDimension } = location.state || {};
    return ( 
        <div>
            <Header />
            <main>
                <SubTitle subtitulo={"Preguntas frecuentes"}/>
                <SectionPreguntasFrec idDimension={idDimension} idEscuela={idEscuela} />
                <div className="flex flex-col items-center justify-center gap-6 my-7">
                    <Link to={'/chat'} state={{"idEscuela": idEscuela, "idDimension": idDimension}}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                     py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md">
                        Ir al Chat
                     </Link>
                     <p className="font-light text-xl">Conoce nuestro Chat de IA</p>
                </div>
            </main>
        </div>
     );
}
 
export default PreguntasFrec;