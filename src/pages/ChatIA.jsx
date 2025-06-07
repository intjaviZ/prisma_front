import Footer from "../componentes/general/Footer";
import Header from "../componentes/general/Header";
import SectionChatIA from "../componentes/chat/SectionChatIA";
import SubTitle from "../componentes/general/SubTitle";

const ChatIA = () => {
    return ( 
        <div>
            <Header/>
            <main className="mt-0 min-h-[calc(100vh-80px)]">
                <SubTitle subtitulo="Soul Chat"/>
                <SectionChatIA/>
            </main>
            <Footer/>
        </div>
     );
}

export default ChatIA;