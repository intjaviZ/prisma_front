import { FiltroProvider } from "../contextos/FiltroContext";
import LayoutOrientador from "./LayoutOrientador";
import VistasProtegidas from "./VistaProteegida";

const MainOrientador = () => {
    return (
        <FiltroProvider>
            <VistasProtegidas>
                <LayoutOrientador />
            </VistasProtegidas>
        </FiltroProvider>
    );
}

export default MainOrientador;