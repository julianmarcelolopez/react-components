// screens/MainScreen.js
import React, { useState } from 'react';
import Header from '../components/Header';
import NavbarSection from '../components/NavbarSection';
import MainSection from '../components/MainSection';

function MainPage() {
    const [activeTab, setActiveTab] = useState('Home'); // Estado para la pestaña activa

    // Función para manejar el cambio de pestañas
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <NavbarSection activeTab={activeTab} handleTabClick={handleTabClick} />
            <MainSection activeTab={activeTab} />
        </div>
    );
}

export default MainPage;