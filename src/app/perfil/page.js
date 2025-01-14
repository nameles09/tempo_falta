"use client";

import { useState } from "react";
import "../style/perfil.css";
import { useRouter } from "next/navigation";1


export default function ProfilePage() {
    const router = useRouter();
  const [monthlyInstallment, setMonthlyInstallment] = useState(2000); // Valor mensal pago
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/profile-pic.jpg",
    housesBought: 5,
    housesSold: 2,
    totalDebt: 30000,
  };


  const handleNavigate = (path) => {
    router.push(path);
  };


  // Função para calcular meses restantes
  const calculateRemainingMonths = (debt, installment) => {
    if (installment <= 0) return "Parcela inválida";
    return Math.ceil(debt / installment); // Arredondar para cima
  };

  const remainingMonths = calculateRemainingMonths(
    user.totalDebt,
    monthlyInstallment
  );

  return (
    <div className="profile-container">
      <h1>Perfil</h1>
      <div className="profile-card">
        <img src={user.image} alt="Profile" className="profile-image" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Casas Compradas: {user.housesBought}</p>
        <p>Casas Vendidas: {user.housesSold}</p>
        <p>Total Devido: R$ {user.totalDebt.toLocaleString()}</p>
        <div className="installment-section">
          <label htmlFor="installment">
            Valor da Parcela Mensal (R$):
          </label>
          <input
            type="number"
            id="installment"
            value={monthlyInstallment}
            onChange={(e) => setMonthlyInstallment(Number(e.target.value))}
            className="installment-input"
          />
          <p>
            Meses Restantes para Quitar:{" "}
            <strong>{remainingMonths}</strong>
          </p>
          <p>Casas Compradas: {user.housesBought}</p>
        <button
          onClick={() => handleNavigate("/casas")}
          className="profile-button"
        >
          Ver Casas Compradas
        </button>
        <p>Casas Vendidas: {user.housesSold}</p>
        <button
          onClick={() => handleNavigate("/casas")}
          className="profile-button"
        >
          Ver Casas Vendidas
        </button>
        </div>
      </div>
    </div>
  );
}
