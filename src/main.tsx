// src/main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './routes/ProtectedRoutes';
import { AuthProvider } from './providers/authProvider';
import Evaluation from './components/Evaluation';
import MainLayout from './components/MainLayout';
import Signup from './components/Signup';

Aos.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'evaluation',
            element: <Evaluation />
          },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </AuthProvider>
  </StrictMode>,
);
