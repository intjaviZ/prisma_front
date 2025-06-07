const PreguntaTest = ({ pregunta, opciones, onChaged}) => {
    return (
        <div className="py-5 flex flex-col gap-2 w-full">
            <label htmlFor={"preg"+pregunta.id}>{pregunta.pregunta}</label>
            <select required name={"preg"+pregunta.id} onChange={onChaged} className="w-full">
                <option value={0}>Selecciona una Opción</option>
                {opciones.map((opcion) => (
                    <option key={opcion.id} value={opcion.valor}>{opcion.escala}</option>
                ))}
            </select>
        </div>
    );
}

export default PreguntaTest;