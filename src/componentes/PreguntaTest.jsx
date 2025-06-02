const PreguntaTest = ({ pregunta, opciones, onChaged}) => {
    return (
        <div className="py-5 flex flex-col gap-2 w-full">
            <label htmlFor={"preg"+pregunta.idPregunta}>{pregunta.pregunta}</label>
            <select required name={"preg"+pregunta.idPregunta} onChange={onChaged} className="w-full">
                <option value={0}>Selecciona una Opción</option>
                {opciones.map((opcion) => (
                    <option key={opcion.idOpcion} value={opcion.valor}>{opcion.opcion}</option>
                ))}
            </select>
        </div>
    );
}

export default PreguntaTest;