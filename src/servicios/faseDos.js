import { APIROOT } from "./ROOT";

export const preguntasFrecuentes = async (clasificacionPreg) => {
    try {
        const response = await fetch(`${APIROOT}/orientador/preguntasFrec/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(clasificacionPreg)
        });
        const resultados = await response.json();
        return resultados;
    } catch (error) {
        console.error("Error al enviar los resultados del test:", error);
        throw error; // Re-lanzar el error para que pueda ser manejado por el llamador
    }
}
export const enviarPregunta = async (pregunta) => {
    try {
        const response = await fetch(`${APIROOT}/chat/openai/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pregunta)
        });
        const resultados = await response.json();
        return {
            "status": response.status,
            "respuesta": resultados.respuesta
        };
    } catch (error) {
        console.error("Error al enviar los resultados del test:", error);
        return {
            "status": 400,
            "respuesta": ""
        };
    }
}