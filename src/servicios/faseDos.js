const APIROOT = "http://127.0.0.1:8000"

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