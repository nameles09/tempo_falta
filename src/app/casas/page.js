export default function HousesPage() {
    // Dados simulados
    const boughtHouses = [
      { id: 1, name: "Casa de Praia", price: 500000 },
      { id: 2, name: "Apartamento no Centro", price: 300000 },
    ];
  
    const soldHouses = [
      { id: 3, name: "Casa no Campo", price: 400000 },
      { id: 4, name: "Apartamento Duplex", price: 700000 },
    ];
  
    return (
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        <h1>Casas</h1>
        <div style={{ marginBottom: "30px" }}>
          <h2>Casas Compradas</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {boughtHouses.map((house) => (
              <li key={house.id} style={{ marginBottom: "10px" }}>
                {house.name} - R$ {house.price.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Casas Vendidas</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {soldHouses.map((house) => (
              <li key={house.id} style={{ marginBottom: "10px" }}>
                {house.name} - R$ {house.price.toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  