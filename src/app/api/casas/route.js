import { useEffect,useState } from "react";

export default function Casas() {
    const [casas, setCasas] = useState([]);

    useEffect(() => {
        async function fetchCasas() {
            const res = await fetch('/api/casas');
            const data = await res.json();
            setCasas(data);
        }    

        fetchCasas();
    }, []);

    return (
        <div>
            <h1>Minhas Casas</h1>
            {casas.map((casa) => (
                <div key={casa.id}>
                    <p>Endereço: {casa.address}</p>
                    <p>ValorTotal: {casa.value}</p>
                    <p>ValorPago: {casa.paid}</p>
                </div>
            ))}
        </div>
    );
}