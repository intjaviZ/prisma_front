import BarraFiltros from "./BarraFiltros";

const BarraInicial = ({titulo, descripcion}) => {
    return (
        <div className="text-gray-700 flex justify-between items-center px-10 py-2">
            <div>
                <h1 className="font-semibold text-3xl">{titulo}</h1>
                <p className="font-light">{descripcion}</p>
            </div>
            <div>
                <BarraFiltros />
            </div>
        </div>
    );
}

export default BarraInicial;