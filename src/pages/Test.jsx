import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import Footer from "../componentes/general/Footer";
import SectionFormulario from "../componentes/test/SectionFormulario";

const Test = () => {
    return ( 
        <div>
            <Header/>
            <main className="mt-0 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Responde con sinceridad las siguientes preguntas"/>
                <SectionFormulario/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Test;