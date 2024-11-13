// Login.js
import React, { useState } from 'react';

function Login() {
    // Estado para almacenar el usuario y la contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Maneja el evento de envío del formulario
    const handleLogin = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        alert(`Usuario logueado: ${username}`);
    };

    return (
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '200px' }}>
            <label>
                Usuario:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ margin: '5px 0', padding: '8px' }}
                />
            </label>

            <label>
                Contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ margin: '5px 0', padding: '8px' }}
                />
            </label>

            <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                Login
            </button>
        </form>
    );
}

export default Login;