import { useEffect, useState } from "react";

export default function Pagamentos() {
    const [pagamentos, setPagamentos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/pagamentos');
            const data = await res.json();
            setPagamentos(data);
        }

        fetchPagamentos();
    }, []);

    return (
        <div>
            <h1>Pagamentos</h1>
            {pagamentos.map((pagamento) => (
                <div key={pagamento.id}>
                    <p>Data: {pagamento.data}</p>
                    <p>Montante: {pagamento.montante}</p>
                </div>
            ))}
        </div>
    );
}

