import { useState } from "react";
import '../../estilos/formulario.css';

const NuevoEntorno = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        video: '',
        dimension: '',
        riesgo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSubmit(formData);
    };
    return (
        <form className="p-12 shadow-lg rounded-xl bg-white" onSubmit={handleSubmit}>
            <div className="relative">
                <span className="absolute -top-3 text-[#5f687b] opacity-15 left-0 right-0 z-10 text-center
                    font-bold text-3xl uppercase leading-none">Nuevo entorno virtual</span>
                <h2 className="relative text-[#5f687b] text-2xl font-bold uppercase mb-5 pb-0 z-20 text-center">Nuevo entorno virtual</h2>
            </div>
            <div className="box-formulario pt-6 px-44">
                <div className="w-full py-3 flex flex-col">
                    <label className="pb-2">Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full py-3 flex flex-col">
                    <label className="pb-2">Descripción:</label>
                    <input
                        type="text"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full py-3 flex flex-col">
                    <label>URL del Video:</label>
                    <input
                        type="url"
                        name="video"
                        value={formData.video}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full py-3 flex flex-col">
                    <label>ID de la Dimensión:</label>
                    <input
                        type="text"
                        name="dimension"
                        value={formData.dimension}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full py-3 flex flex-col">
                    <label>ID del Riesgo:</label>
                    <input
                        type="text"
                        name="riesgo"
                        value={formData.riesgo}
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-4 w-full flex items-center justify-center">
                    <button type="submit"
                    className="text-white bg-[#10bc69] font-normal text-base tracking-[1px] inline-block px-6
                    py-2 rounded-full transition-all duration-500 shadow-sm hover:opacity-85 hover:shadow-md">Guardar</button>
                </div>
            </div>
        </form>
    );
}

export default NuevoEntorno;