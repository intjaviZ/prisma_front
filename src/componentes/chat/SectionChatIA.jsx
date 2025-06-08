import { Link } from "react-router-dom";
import InputChat from "./InputChat";
import ResponseChatCard from "./ResponseChatCard";

const SectionChatIA = () => {
    return (
        <section className="p-5 md:p-20 md:pt-10">
            <div className="bg-[#f9f9f9] rounded-3xl shadow-lg p-5 sm:p-8 sm:pb-14">
                <div className="text-center container section-title">
                    <h2 className="text-[#5f687b] text-3xl font-bold uppercase mb-5">Segunda Fase</h2>
                    <p className="mb-3 text-[#5f687b]  text-2xl">
                        En qué te puedo ayudar?
                    </p>
                    <p className="mb-0 text-[#444444] text-sm">
                        Este modelo puede cometer errores, usa esta información solo como apoyo.
                    </p>
                </div>
                <InputChat />
                <ResponseChatCard status={"success"} 
                response={"Puedo armarte un componente completo o un sandbox con todo esto funcionando si quieres probarlo de inmediato. ¿Te gustaría también que la tarjeta cambie de color sutilmente según el tipo de respuesta (neutral, positiva, negativa)? También se puede.¿O prefieres algo más visual (como incluir íconos o miniaturas)? Dímelo y lo ajustamos."} />
            </div>
            <div className="mt-12 w-full flex items-center justify-center">
                    <Link
                        to={'/vr'}
                        className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                    py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                    >
                        Siguiente fase
                    </Link>
                </div>
        </section>
    );
}

export default SectionChatIA;