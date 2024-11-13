// components/NavbarSection.js
import React from 'react';
import '../styles/NavbarSection.css';

function NavbarSection({ activeTab, handleTabClick }) {
    return (
        <nav>
            <button
                onClick={() => handleTabClick('Home')}
                className={`tab ${activeTab === 'Home' ? 'active' : ''}`}
            >
                Home
            </button>
            <button
                onClick={() => handleTabClick('Profile')}
                className={`tab ${activeTab === 'Profile' ? 'active' : ''}`}
            >
                Perfil
            </button>
            <button
                onClick={() => handleTabClick('Settings')}
                className={`tab ${activeTab === 'Settings' ? 'active' : ''}`}
            >
                Configuración
            </button>
        </nav>
    );
}

export default NavbarSection;