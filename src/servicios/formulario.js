const APIROOT = "http://localhost:8000"

export const pedirEstados = async () => {
    const response = await fetch(`${APIROOT}/estados`);
    const estados = await response.json();
    return estados;
};

export const pedirCiudades = async (idEstado) => {
    const response = await fetch(`${APIROOT}/ciudades/${idEstado}`);
    const ciudades = await response.json();
    return ciudades;
};

export const pedirEscuelas = async (idCiudad) => {
    const response = await fetch(`${APIROOT}/escuelas/${idCiudad}`);
    const ciudades = await response.json();
    return ciudades;
};

export const pedirGrupos = async (idEscuela) => {
    const response = await fetch(`${APIROOT}/grupos/${idEscuela}`);
    const ciudades = await response.json();
    return ciudades;
};

export const pedirPreguntas = async () => {
    const response = await fetch(`${APIROOT}/preguntas/`);
    const ciudades = await response.json();
    return ciudades;
};
export const pedirOpciones = async () => {
    const response = await fetch(`${APIROOT}/opciones/`);
    const ciudades = await response.json();
    return ciudades;
};

export const terminarTest = async (dataTest) => {
    const response = await fetch(`${APIROOT}/guardarTest/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTest)
    });
    const resultados = response.json();
    return resultados;
}