import Header from "../componentes/general/Header";
import SubTitle from "../componentes/general/SubTitle";
import SectionVr from "../componentes/vr/SectionVr";

const Vr = () => {
    return ( 
        <div>
            <Header/>
            <main>
                <SubTitle subtitulo={"Prueba nuestros entornos VR para sentirte mejor"}/>
                <SectionVr/>
            </main>
        </div>
     );
}
 
export default Vr;