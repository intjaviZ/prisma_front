import { useOrientador } from "../contextos/OrientadorContext";
import VistasProtegidas from "./VistaProteegida";

const MainOrientador = () => {
    const { orientador } = useOrientador();
    return (
        <VistasProtegidas permissions={orientador.permissions} />
    );
}

export default MainOrientador;