import { useEffect, useState } from "react";
import '../../estilos/formulario.css';

const NuevaPreguntaFrec = () => {
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [dimension, setDimension] = useState('');
    const [riesgo, setRiesgo] = useState('');

    const [dimensiones, setDimensiones] = useState([]);
    const [riesgos, setRiesgos] = useState([]);

    useEffect(() => {
        // Mocks genéricos, puedes reemplazar con fetch/axios cuando tengas los endpoints
        setDimensiones([
            { id: 1, nombre: 'Escolar' },
            { id: 2, nombre: 'Familiar' },
            { id: 3, nombre: 'Social' }
        ]);

        setRiesgos([
            { id: 1, nivel: 'Bajo' },
            { id: 2, nivel: 'Medio' },
            { id: 3, nivel: 'Alto' }
        ]);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            pregunta_frec: pregunta,
            respuesta_frec: respuesta, // Se vincula a otra tabla
            dimension,
            riesgo
        };

        try {
            const response = await fetch('https://api.tu-backend.com/preguntas-frecuentes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Pregunta guardada exitosamente');
                setPregunta('');
                setRespuesta('');
                setDimension('');
                setRiesgo('');
            } else {
                console.error('Error al enviar', response.status);
            }
        } catch (error) {
            console.error('Error en fetch', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-12 shadow-lg rounded-xl bg-white">
            <div className="relative">
                <span className="absolute -top-3 text-[#5f687b] opacity-15 left-0 right-0 z-10 text-center
                    font-bold text-3xl uppercase leading-none">Nueva Pregunta Frecuente</span>
                <h2 className="relative text-[#5f687b] text-2xl font-bold uppercase mb-5 pb-0 z-20 text-center">Nueva Pregunta Frecuente</h2>
            </div>
            <div className="box-formulario pt-6 px-44">
                <div>
                    <label className="block mb-1 font-medium">Pregunta frecuente</label>
                    <input
                        type="text"
                        value={pregunta}
                        onChange={(e) => setPregunta(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Respuesta frecuente</label>
                    <input
                        type="text"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Dimensión</label>
                    <select
                        value={dimension}
                        onChange={(e) => setDimension(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Selecciona una dimensión</option>
                        {dimensiones.map((dim) => (
                            <option key={dim.id} value={dim.id}>
                                {dim.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Nivel de riesgo</label>
                    <select
                        value={riesgo}
                        onChange={(e) => setRiesgo(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Selecciona un riesgo</option>
                        {riesgos.map((r) => (
                            <option key={r.id} value={r.id}>
                                {r.nivel}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-4 w-full flex items-center justify-center">
                    <button
                        type="submit"
                        className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                    py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md"
                    >
                        Guardar pregunta
                    </button>
                </div>
            </div>
        </form>
    );
}

export default NuevaPreguntaFrec;