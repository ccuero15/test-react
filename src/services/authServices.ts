// src/services/authService.ts
import { SignupFormData } from '../interfaces';
import axiosInstance from './axiosConfig';
import axios from 'axios';
import { toast } from 'react-toastify';
import { extractErrors } from '../utils/errorUtils'; // Importa la función de error

const signup = async (data: SignupFormData) => {
    try {
        const response = await axiosInstance.post('auth/signup', data);
        toast.success('Registro exitoso'); // Mostrar notificación de éxito
        
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            // Usa la función extractErrors para obtener los mensajes de error
            const errorMessage = extractErrors(error.response);
            toast.error(`Error: ${errorMessage}`);
        } else {
            toast.error('Error inesperado en el registro');
        }
        throw error; // Lanza el error para manejarlo en el componente si es necesario
    }
};

export { signup };
