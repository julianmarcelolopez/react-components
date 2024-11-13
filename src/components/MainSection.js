// components/MainSection.js
import React from 'react';
import '../styles/MainSection.css';

function MainSection({ activeTab }) {
    return (
        <main>
            {activeTab === 'Home' && <div><h2>Bienvenido a la Página Principal</h2><p>Esta es la sección de inicio.</p></div>}
            {activeTab === 'Profile' && <div><h2>Perfil de Usuario</h2><p>Esta es la sección de perfil.</p></div>}
            {activeTab === 'Settings' && <div><h2>Configuración</h2><p>Esta es la sección de configuración.</p></div>}
        </main>
    );
}

export default MainSection;