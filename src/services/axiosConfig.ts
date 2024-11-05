import axios from 'axios';
import { toast } from 'react-toastify';

// Crear una instancia de Axios
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

// Interceptor de solicitudes
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor de respuestas
axiosInstance.interceptors.response.use(
    (response) => {
        // Si quieres mostrar un mensaje de éxito para las respuestas exitosas:
        toast.success('Operación exitosa');
        return response;
    },
    (error) => {
        // Manejo de errores 4xx y 5xx
        if (error.response?.status) {
            if (error.response.status >= 400 && error.response.status < 500) {
                toast.error(`Error ${error.response.status}: ${error.response.data?.message || 'Error del cliente'}`);
            } else if (error.response.status >= 500) {
                toast.error(`Error ${error.response.status}: ${error.response.data?.message || 'Error del servidor'}`);
            }
        } else {
            // Error sin respuesta, como problemas de red
            toast.error('Error de red o del servidor');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;