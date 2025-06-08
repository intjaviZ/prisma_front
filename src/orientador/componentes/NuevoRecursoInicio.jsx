import { MessageCircleQuestion } from "lucide-react";
import { Link } from "react-router-dom";

const NuevoRecursoInicio = () => {
    return (
        <div className="flex items-start justify-between gap-20 mb-10 px-10 py-32">
            <Link to={'entornoVr'} className="group w-1/2 h-72 p-7 flex flex-col items-center justify-center
                shadow-lg rounded-xl bg-white text-center
                hover:shadow-xl hover:border hover:border-[#10bc69] transition-shadow duration-300">
                <div className="mb-2.5 text-center flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#10bc69" className="bi bi-headset-vr" viewBox="0 0 16 16">
                        <path d="M8 1.248c1.857 0 3.526.641 4.65 1.794a5 5 0 0 1 2.518 1.09C13.907 1.482 11.295 0 8 0 4.75 0 2.12 1.48.844 4.122a5 5 0 0 1 2.289-1.047C4.236 1.872 5.974 1.248 8 1.248" />
                        <path d="M12 12a4 4 0 0 1-2.786-1.13l-.002-.002a1.6 1.6 0 0 0-.276-.167A2.2 2.2 0 0 0 8 10.5c-.414 0-.729.103-.935.201a1.6 1.6 0 0 0-.277.167l-.002.002A4 4 0 1 1 4 4h8a4 4 0 0 1 0 8" />
                    </svg>
                </div>
                <h3 className="font-bold mb-3.5 text-xl text-[#5f687b] group-hover:text-[#0a8f4c] transition-colors duration-300">Nuevo Entorno Virtual</h3>
            </Link>
            <Link to={'preguntaComun'} className="group w-1/2 h-72 p-7 flex flex-col items-center justify-center
                    shadow-lg rounded-xl bg-white text-center
                    hover:shadow-xl hover:border hover:border-[#10bc69] transition-shadow duration-300">
                <div className="mb-2.5 text-center flex items-center justify-center">
                    <MessageCircleQuestion className="text-[#10bc69] w-9 h-9" />
                </div>
                <h3 className="font-bold mb-3.5 text-xl text-[#5f687b] group-hover:text-[#0a8f4c] transition-colors duration-300">Nueva pregunta Común</h3>
            </Link>
        </div>
    );
}

export default NuevoRecursoInicio;