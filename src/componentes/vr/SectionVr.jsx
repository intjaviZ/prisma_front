import { useEffect, useState } from "react";
import CardVr from "./CardVr";
import { EntornosVr } from "../../servicios/faseTres";

const SectionVr = () => {
    const [vrData, setVrData] = useState([]);
    useEffect(() => {
        const fetchPreguntasFrec = async () => {
            const response = await EntornosVr({
                "idDimension": 1,
                "idEscuela": 1,
            });
            setVrData(response);
        }
        fetchPreguntasFrec();
    },[]);

    return ( 
        <div className="p-10 mb-10">
            <div className="text-center container section-title my-10">
                <h2 className="text-[#5f687b] text-3xl font-bold uppercase mb-5">Tercera Fase</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
                {vrData.map((item, index) => (
                    <CardVr
                        key={index}
                        title={item.nombre}
                        description={item.descripcion}
                        videoUrl={item.video}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default SectionVr;