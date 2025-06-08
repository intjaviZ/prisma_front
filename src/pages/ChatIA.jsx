import Footer from "../componentes/general/Footer";
import Header from "../componentes/general/Header";
import SectionChatIA from "../componentes/chat/SectionChatIA";
import SubTitle from "../componentes/general/SubTitle";
import { useLocation } from "react-router-dom";

const ChatIA = () => {
    const location = useLocation();
    const { idEscuela, idDimension } = location.state || {};
    return ( 
        <div>
            <Header/>
            <main className="mt-0 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Soul Chat"/>
                <SectionChatIA idDimension={idDimension} idEscuela={idEscuela}/>
            </main>
            <Footer/>
        </div>
     );
}

export default ChatIA;