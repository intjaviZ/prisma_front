import { Link } from "react-router-dom";
import InputChat from "./InputChat";
import ResponseChatCard from "./ResponseChatCard";
import { useState } from "react";
import { enviarPregunta } from "../../servicios/faseDos";

const SectionChatIA = ({ idEscuela, idDimension }) => {

    const [prompt, setPromt] = useState({
        "prompt": ""
    });
    const [respuesta, setRespuesta] = useState({
        "respuesta": ""
    });
    const [status, setStatus] = useState("empty");

    const onChanged = (value) => {
        setPromt({ prompt: value });
    }
    const send = async (e) => {
        e.preventDefault();
        setStatus("loading");
        const response = await enviarPregunta(prompt);
        setRespuesta({respuesta: response.respuesta});
        response.status == 200 ? setStatus("success") : setStatus("error")
    }
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
                <InputChat value={prompt.prompt} onChanged={e => onChanged(e.target.value)} sendQuset={send} />
                <ResponseChatCard status={status} response={respuesta}/>
            </div>
            <div className="mt-12 w-full flex items-center justify-center">
                <Link
                    to={'/vr'} state={{"idEscuela": idEscuela, "idDimension": idDimension}}
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