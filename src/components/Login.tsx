import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
//import MainLayout from './MainLayout';

interface FormData {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate(); // Hook para navegación
    const onSubmit = (data: FormData) => {
        // Lógica para manejar el inicio de sesión
        console.log(data);
    };

    const goToSignup = () => {
        navigate('/signup'); // Redirige a la página de registro
    };

    const auth = useAuth();
    console.log(auth)

    if (auth.isAuthtenticated) {
        return <Navigate to='dashboard'/>
    }


    return (
        <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Username Field */}
                <input
                    type="text"
                    placeholder="Nombre de Usuario"
                    {...register("username", { required: "Nombre de usuario es requerido" })}
                    className={`w-full p-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

                {/* Password Field */}
                <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", { required: "Contraseña es requerida" })}
                    className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Iniciar sesión
                </button>
            </form>
            {/* <div className="flex items-center justify-center space-x-2 mt-4">
                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">F</button>
                <button className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700">G</button>
                <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800">A</button>
                <button className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700">X</button>
                <button className="p-2 rounded-full bg-blue-800 text-white hover:bg-blue-900">P</button>
            </div> */}
            <p className="text-sm text-gray-600 mt-4">
                ¿No puedes iniciar sesión?{" "}
                <span onClick={goToSignup} className="text-blue-500 hover:underline cursor-pointer">
                    Crear cuenta
                </span>
            </p>
        </div>

    );
};

export default Login;
