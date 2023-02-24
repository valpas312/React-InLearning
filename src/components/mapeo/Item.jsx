import React from "react";

const Item = () => {
  const elementos = [
    {
      id: 1,
      titulo: "Café",
      definicion: "Bebida que se hace por infusión con la semilla tostada y molida del cafeto.",
    },
    {
      id: 2,
      titulo: "Té",
      definicion: "Infusión de las hojas del té.",
    },
    {
      id: 3,
      titulo: "Chocolate",
      definicion: "Bebida que se hace de chocolate desleído y cocido en agua o en leche.",
    },
  ];
  return (
    <>
      <h1>Item</h1>
      <ul>
        {elementos.map((elemento) => {
            const {id, titulo, definicion} = elemento;
          return <div key={id}>
            <h2>{titulo}</h2>
            <p>{definicion}</p>
          </div>;
        })}
      </ul>
    </>
  );
};

export default Item;
