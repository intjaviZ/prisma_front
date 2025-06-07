const APIROOT = "http://127.0.0.1:8000"

export const pedirEstados = async () => {
    const response = await fetch(`${APIROOT}/localizacion/estados`);
    const estados = await response.json();
    return estados;
};

export const pedirMunicipios = async (idEstado) => {
    const response = await fetch(`${APIROOT}/localizacion/municipios/${idEstado}`);
    const municipios = await response.json();
    return municipios;
};

export const pedirEscuelas = async (idCiudad) => {
    const response = await fetch(`${APIROOT}/localizacion/escuelas/${idCiudad}`);
    const ciudades = await response.json();
    return ciudades;
};

export const pedirGrupos = async (idEscuela) => {
    const response = await fetch(`${APIROOT}/localizacion/grupos/${idEscuela}`);
    const ciudades = await response.json();
    return ciudades;
};

export const pedirPreguntas = async () => {
    const response = await fetch(`${APIROOT}/test/preguntas/`);
    const ciudades = await response.json();
    return ciudades;
};
export const pedirOpciones = async () => {
    const response = await fetch(`${APIROOT}/test/opciones/`);
    const ciudades = await response.json();
    return ciudades;
};

export const terminarTest = async (dataTest) => {
    try {
        const response = await fetch(`${APIROOT}/test/resultados/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataTest)
        });
        const resultados = await response.json();
        return resultados;
    } catch (error) {
        console.error("Error al enviar los resultados del test:", error);
        throw error; // Re-lanzar el error para que pueda ser manejado por el llamador
    }
}