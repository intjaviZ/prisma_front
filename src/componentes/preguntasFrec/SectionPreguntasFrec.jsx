import { useEffect, useState } from "react";
import BloquesColapsables from "./BloquePregunta";
import { preguntasFrecuentes } from "../../servicios/faseDos";

const SectionPreguntasFrec = () => {
    const [preguntas, setPreguntas] = useState([]);
    useEffect(() => {
        const fetchPreguntasFrec = async () => {
            const response = await preguntasFrecuentes({
                "idDimension": 2,
                "idEscuela": 1,
            });
            setPreguntas(response);
        }
        fetchPreguntasFrec();
    }, []);
    return (
        <div className="p-10 mb-10">
            <div className="text-center container section-title">
                <h2 className="text-[#5f687b] text-3xl font-bold uppercase mb-5">Segunda Fase</h2>
            </div>
            <BloquesColapsables preguntas={preguntas}/>
        </div>
     );
}
 
export default SectionPreguntasFrec;