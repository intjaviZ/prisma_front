import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionFormulario from "../componentes/test/SectionFormulario";

const Test = () => {
    return ( 
        <div>
            <Header/>
            <main className="mt-0 pb-10 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Responde con sinceridad las siguientes preguntas"/>
                <SectionFormulario/>
            </main>
        </div>
     );
}
 
export default Test;