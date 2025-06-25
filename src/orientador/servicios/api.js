import {APIROOT } from '../../servicios/ROOT';

export const general = async (fitros) => {
    try {
        const response = await fetch(`${APIROOT}/orientador/general/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(fitros)
        });
        const orientador = response.json();
        return {
            "data": orientador,
            "status": response.status
        }
    } catch (error) {
        console.error('Error al pedir data:', error);
        throw error;
    }
}