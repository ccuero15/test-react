// src/components/PrivateRoute.tsx
import React  from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
//import { useAuth } from '../context/AuthContext';

const ProtectedRoute: React.FC = () => {
    //const { user } = useAuth();
    const auth = useAuth();
    //const [ isAuth ] = useState(true);


    // Si está autenticado, renderiza el Outlet que contendrá las rutas protegidas
    return auth.isAuthtenticated ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
