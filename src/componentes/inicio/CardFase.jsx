import { Link } from "react-router-dom";

const CardFase = ({ titulo, info, ruta, icono }) => {
    return (
        <Link to={ruta} className="bg-white py-12 px-7 flex flex-col justify-center items-center w-2/5 min-w-80 border border-[rgba(68,68,68,0.2)]">
            <div className="mb-2.5">
                {icono}
            </div>
            <h3 className="font-bold mb-3.5 text-xl text-[#5f687b]">{titulo}</h3>
            <p className="leading-6 mb-0 text-sm text-center">{info}</p>
        </Link>
    );
}

export default CardFase;