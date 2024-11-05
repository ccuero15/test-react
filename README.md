# Proyecto de Registro de Usuario en React

Este proyecto es una aplicación web que permite a los usuarios registrarse en una plataforma mediante un formulario. Utiliza React, React Router, y React Hook Form para gestionar el formulario de registro, validaciones y la navegación entre las vistas.

## Descripción

La aplicación permite a los usuarios registrarse con su nombre de usuario, correo electrónico y contraseña. Después de un registro exitoso, el usuario es redirigido a la página de inicio de sesión. Además, la aplicación maneja la autenticación mediante un hook personalizado `useAuth`, que gestiona el estado de la autenticación del usuario.

El servicio de registro (API) se comunica con un backend utilizando Axios para hacer la solicitud POST de registro de usuario. El frontend también maneja mensajes de error y éxito usando `react-toastify`.

## Características

- **Formulario de Registro**: Los usuarios pueden ingresar su nombre de usuario, correo electrónico, contraseña y confirmar la contraseña.
- **Validación de Formularios**: Se valida que los campos sean completados correctamente, incluyendo la validación del formato del correo electrónico y la confirmación de la contraseña.
- **Autenticación**: Después de registrarse, los usuarios son redirigidos automáticamente a la página de inicio de sesión si el registro es exitoso.
- **Mensajes de Error y Éxito**: Utiliza `react-toastify` para mostrar mensajes informativos de éxito o error.
- **Redirección**: Si el usuario ya está autenticado, será redirigido al `dashboard` directamente.

## Tecnologías

- **React**: Librería para construir interfaces de usuario.
- **React Router**: Maneja la navegación entre diferentes rutas de la aplicación.
- **React Hook Form**: Biblioteca para manejar formularios en React con validaciones.
- **Axios**: Cliente HTTP para hacer las solicitudes al backend.
- **React Toastify**: Para mostrar notificaciones de éxito y error.
- **Tailwind CSS**: Para el diseño de la interfaz de usuario de forma rápida y sencilla.

## Estructura del Proyecto

```plaintext
src/
├── components/           # Componentes reutilizables (Formulario de registro, etc.)
├── hooks/                # Hooks personalizados (useAuth, etc.)
├── services/             # Lógica para las interacciones con la API (authServices)
├── interfaces/           # Tipos e interfaces de TypeScript
├── main.tsx               # Componente principal que renderiza la app
├── index.tsx             # Punto de entrada de la aplicación
