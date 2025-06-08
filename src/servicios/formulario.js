import { APIROOT } from "./ROOT";

export const pedirEstados = async () => {
    const response = await fetch(`${APIROOT}/localizacion/estados`);
    const estados = await response.json();
    if (response.status == 404) { return []; }
    return estados;
};

export const pedirMunicipios = async (idEstado) => {
    const response = await fetch(`${APIROOT}/localizacion/municipios/${idEstado}`);
    const municipios = await response.json();
    if (response.status == 404) { return []; }
    return municipios;
};

export const pedirEscuelas = async (idCiudad) => {
    const response = await fetch(`${APIROOT}/localizacion/escuelas/${idCiudad}`);
    const escuelas = await response.json();
    if (response.status == 404) { return []; }
    return escuelas || [{}];
};

export const pedirGrupos = async (idEscuela) => {
    const response = await fetch(`${APIROOT}/localizacion/grupos/${idEscuela}`);
    const grupos = await response.json();
    if (response.status == 404) { return []; }
    return grupos;
};

export const pedirPreguntas = async () => {
    const response = await fetch(`${APIROOT}/test/preguntas/`);
    const preguntas = await response.json();
    if (response.status == 404) { return []; }
    return preguntas;
};
export const pedirOpciones = async () => {
    const response = await fetch(`${APIROOT}/test/opciones/`);
    const opciones = await response.json();
    if (response.status == 404) { return []; }
    return opciones;
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