import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';
//import App from './App.tsx'
import Aos from 'aos';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
//import About from './pages/About';
import ProtectedRoute from './routes/ProtectedRoutes';
import { AuthProvider } from './providers/authProvider';
import Evaluation from './components/Evaluation';
import MainLayout from './components/MainLayout';

Aos.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Define MainLayout como la ruta principal
    children: [
      {
        index: true, // Ruta por defecto, equivalente a '/'
        element: <Login />
      },
      {
        path: 'signup',
        element: <App />
      },
      {
        element: <ProtectedRoute />, // Rutas protegidas
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
    </AuthProvider>
  </StrictMode>,
)
