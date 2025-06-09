import { motion } from "framer-motion"
import Semaforo from "./Semaforo";
import { Link } from "react-router-dom";

const SectionResultado = ({ resultados }) => {
    const { idEscuela, idEvaluacion, idDimension, idRiesgo, evaluacionGeneral, evaluacionDimension, dimension, riesgo } = resultados;
    const mensajes = {
        1: `Nos alegra saber que tienes un ${evaluacionGeneral}`,
        2: `Lo estás haciendo bien, tienes un ${evaluacionGeneral}`,
        3: `Estás a tiempo de trabajar tu salud, tienes un ${evaluacionGeneral}`,
        4: `Es importante que sigas trabajando en tu salud, tienes un ${evaluacionGeneral}`
    };
    const bgColors = {
        1: "text-green-500",
        2: "text-yellow-400",
        3: "text-orange-500",
        4: "text-red-600"
    };

    return (
        idEvaluacion != null && idDimension != null ? (
            <motion.section
                className="p-6 sm:p-10 bg-[#f9fafa] min-h-screen"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="max-w-2/3 mx-auto space-y-8">

                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-[#5f687b]">Resultados: Primera Fase</h2>
                        <p className="text-sm text-gray-600">Este test nos ayudará a generar una experiencia más personalizada para ti.</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                        <p className="text-lg font-medium text-neutral-800">¡Haz completado la primera fase de PRISMA!</p>

                        <div className="flex items-center gap-4">
                            <Semaforo riesgo={resultados.evaluacionGeneral} />
                            <p className={`font-bold ${bgColors[idEvaluacion] ?? "text-gray-300"}`}>
                                {mensajes[idEvaluacion] ?? "Algo salió mal 😓"}
                            </p>
                        </div>

                        <p className="text-gray-700">
                            Puedes seguir trabajando en el área de <span className="font-semibold text-sky-500">{dimension}</span> para mejorar tu salud.
                        </p>

                        <p className="text-gray-700">
                            En esta dimensión obtuviste un <span className="font-semibold text-sky-500">{evaluacionDimension}</span>.
                        </p>

                        {idRiesgo && (
                            <p className="text-gray-700">
                                Dado el área de oportunidad de mejora, toma en cuenta hábitos relacionados a la <span className="font-semibold text-rose-500">{riesgo}</span>.
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-gray-700"></p>
                        <Link to={'/preguntasFrec'} state={{"idEscuela": idEscuela, "idDimension": idDimension}}
                        className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] 
                        inline-block px-6 py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                        >Siguiente fase</Link>
                    </div>
                </div>
                
            </motion.section>
        ) : <span>Primero debes completar tu test de evaluación en la Fase 1.</span>
    )
}

export default SectionResultado;