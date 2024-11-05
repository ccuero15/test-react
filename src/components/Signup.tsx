import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import { signup } from '../services/authServices';
import { SignupFormData } from '../interfaces';

const Signup: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormData>();

    // Watch para confirmar que los dos campos de contraseña coincidan
    const password = watch("password", "");
    const navigate = useNavigate(); // Hook para navegación
    const auth = useAuth();

    // Si el usuario está autenticado, redirige al dashboard
    if (auth.isAuthtenticated) {
        return <Navigate to='dashboard' />
    }

    const onSubmit = async (data: SignupFormData) => {
        try {
            const response = await signup(data); // Llamada al servicio signup
            // Si el registro es exitoso, redirige al login
            if (response) {
                navigate('/'); // Redirige al login
            }
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    };

    const goToLogin = () => {
        navigate('/'); // Redirige al login manualmente si el usuario hace clic en "Iniciar sesión"
    };

    return (
        <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Crear Cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre de Usuario"
                    {...register("username", { required: "Nombre de usuario es requerido" })}
                    className={`w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    {...register("email", {
                        required: "Correo electrónico es requerido",
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            message: "Formato de correo no válido"
                        }
                    })}
                    className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", { required: "Contraseña es requerida" })}
                    className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <input
                    type="password"
                    placeholder="Confirmar Contraseña"
                    {...register("confirmPassword", {
                        required: "Confirmación de contraseña es requerida",
                        validate: value => value === password || "Las contraseñas no coinciden"
                    })}
                    className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Registrarse
                </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
                ¿Ya tienes una cuenta? <span onClick={goToLogin} className="text-blue-500 hover:underline cursor-pointer">
                    Iniciar sesión
                </span>
            </p>
        </div>
    );
};

export default Signup;
