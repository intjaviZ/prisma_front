import { APIROOT } from "./ROOT";

export const EntornosVr = async (clasificacionEntorno) => {
    try {
        const response = await fetch(`${APIROOT}/orientador/entornosVr/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(clasificacionEntorno)
        });
        const resultados = await response.json();
        
        return resultados;
    } catch (error) {
        console.error("Error al enviar los resultados del test:", error);
        throw error; // Re-lanzar el error para que pueda ser manejado por el llamador
    }
}