import { useFiltro } from "../contextos/FiltroContext";


const gruposMock = Array.from({ length: 40 }, (_, i) => `Grupo ${i + 1}`);
const dimensionesMock = ['Académica', 'Familiar', 'Social'];
const evaluacionesMock = ['Diagnóstico', 'Parcial 1', 'Parcial 2', 'Final', 'Extra'];

const BarraFiltros = () => {
  const { filtros, actualizarFiltro, limpiarFiltros } = useFiltro();

  return (
    <div className="flex items-center justify-end gap-4">
      {/* Grupo */}
      <select
        className="p-2 rounded shadow-md bg-white focus:outline-none"
        value={filtros.grupo}
        onChange={(e) => actualizarFiltro('grupo', e.target.value)}
      >
        <option value="">Grupo</option>
        {gruposMock.map((g, idx) => (
          <option key={idx} value={g}>{g}</option>
        ))}
      </select>

      {/* Dimensión */}
      <select
        className="p-2 rounded shadow-md bg-white focus:outline-none"
        value={filtros.dimension}
        onChange={(e) => actualizarFiltro('dimension', e.target.value)}
      >
        <option value="">Dimensión</option>
        {dimensionesMock.map((d, idx) => (
          <option key={idx} value={d}>{d}</option>
        ))}
      </select>

      {/* Evaluación */}
      <select
        className="p-2 rounded shadow-md bg-white focus:outline-none"
        value={filtros.evaluacion}
        onChange={(e) => actualizarFiltro('evaluacion', e.target.value)}
      >
        <option value="">Evaluación</option>
        {evaluacionesMock.map((ev, idx) => (
          <option key={idx} value={ev}>{ev}</option>
        ))}
      </select>
       
        {/* Botones de acción */}
      <button onClick={actualizarFiltro} className="bg-green-100 text-green-600 px-4 py-2 rounded-lg">
        Aplicar
      </button>
      <button onClick={limpiarFiltros} className="bg-red-100 text-red-600 px-4 py-2 rounded-lg">
        Limpiar
      </button>
    </div>
  );
};

export default BarraFiltros;
