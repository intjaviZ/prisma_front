const APIROOT = "http://127.0.0.1:8000"

export const EntornosVr = async (clasificacionEntorno) => {
    try {
        const response = await fetch(`${APIROOT}/orientador/entornosVr/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(clasificacionEntorno)
        });
        const resultados = await response.json();
        console.log(resultados);
        
        return resultados;
    } catch (error) {
        console.error("Error al enviar los resultados del test:", error);
        throw error; // Re-lanzar el error para que pueda ser manejado por el llamador
    }
}