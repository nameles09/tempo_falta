import { useState, useEffect } from 'react';
import data from '../../../lib/data';

export default function PerfilPage () {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/perfil');
            const data = await res.json();
            setUser(data);
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Perfil</h1>
            {user && <p>Nome: {user.name}</p>}
            {user && <p>Email: {user.email}</p>}
        </div>
    );
}