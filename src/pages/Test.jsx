import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import SectionFormulario from "../componentes/SectionFormulario";
import SubTitle from "../componentes/SubTitle";

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