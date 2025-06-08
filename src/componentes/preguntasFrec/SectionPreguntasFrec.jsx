import { useEffect, useState } from "react";
import BloquesColapsables from "./BloquePregunta";
import { preguntasFrecuentes } from "../../servicios/faseDos";

const SectionPreguntasFrec = ({idEscuela, idDimension}) => {
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        const fetchPreguntasFrec = async () => {
            const response = await preguntasFrecuentes({
                "idDimension": idDimension || null,
                "idEscuela":idEscuela || 1,
            });
            setPreguntas(response);
        }
        fetchPreguntasFrec();
    }, []);
    return ( idDimension != null && idEscuela != null ?
        <div className="p-10 mb-10">
            <div className="text-center container section-title">
                <h2 className="text-[#5f687b] text-3xl font-bold uppercase mb-5">Segunda Fase</h2>
            </div>
            <BloquesColapsables preguntas={preguntas}/>
        </div>  : <p className="text-2xl font-semibold text-center m-20">Primero debes completar tu test de evaluación en la Fase 1.</p>
     );
}
 
export default SectionPreguntasFrec;