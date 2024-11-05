import { AxiosResponse } from 'axios';

export const extractErrors = (response: AxiosResponse): string => {
    // Verifica si hay errores en la respuesta
    if (response.data && response.data.errors && Array.isArray(response.data.errors)) {
        // Une los mensajes de error en una sola cadena
        return response.data.errors.map((error: string) => error).join(', ');
    }
    // Mensaje de error por defecto en caso de no encontrar errores específicos
    return 'Ocurrió un error inesperado.';
};