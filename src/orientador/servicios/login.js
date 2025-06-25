import { APIROOT } from "../../servicios/ROOT";

export const loginOrientador = async (data) => {
    try {
        console.log(data);
        
        const response = await fetch(`${APIROOT}/orientador/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        const orientador = response.json();
        console.log(data);
        console.log("status",response.status);
        
        
        return {
            "data": orientador,
            "status": response.status
        }
    } catch (error) {
        alert('Error al iniciar sesion:', error);
        throw error;
    }
}

export const pedirEscuelas = async () => {
    const response = await fetch(`${APIROOT}/localizacion/escuelas/`);
    const escuelas = await response.json();
    
    if (response.status == 404) { return []; }
    return escuelas;
};