import React from "react";
import ReservarHora from "./ReservarHora";

const Agenda = () => {

  const confirmarReserva = () => {
    console.log("Reserva confirmada");
    alert("Reserva confirmada");
  }

  return (
    <>
      <h1>Agenda</h1>
      <ReservarHora onClick={confirmarReserva} />
      <ReservarHora onClick={confirmarReserva} />
      <ReservarHora onClick={confirmarReserva} />
    </>
  );
};

export default Agenda;
