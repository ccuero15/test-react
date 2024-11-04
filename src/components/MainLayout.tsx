import React from 'react'
import Navbar from './Navbar'
//import { LayoutProps } from '../interfaces'
import { Outlet } from 'react-router-dom';

export const imgTest = './src/assets/background_1';

const MainLayout = () => {
    //const imgUrl = 'oerco';
    return (
        <>
            <Navbar />
            <div className="relative flex flex-col h-screen bg-cover bg-center" style={{ backgroundImage: `url('./src/assets/background_1.svg')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
           
            {/* Main Content */}
            <main className="relative z-10 flex-1 flex items-center justify-center p-6">
                {/* Render the page content passed as children */}
                <div className="w-full max-w-md">
                    <Outlet/>
                </div>
            </main>
        </div>
        </>
    )
}

export default MainLayout