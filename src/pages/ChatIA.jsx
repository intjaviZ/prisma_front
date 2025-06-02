import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import SectionChatIA from "../componentes/SectionChatIA";
import SubTitle from "../componentes/SubTitle";

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