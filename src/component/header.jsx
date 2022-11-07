import React from "react";

export default function header(props) {
  return (
    <div className="header ">
      <div className="container">
        <h2>
          Bakiyeniz: <span className="Dolar">${props.money}</span>
        </h2>
        <h2>
          Sepet Tutarı: <span className="Dolar">${props.total}</span>
        </h2>
      </div>
    </div>
  );
}
