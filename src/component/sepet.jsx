import React from "react";

export default function sepet(props) {
  return (
    <div className="sepet active">
      <h1>Alışveriş Sepeti</h1>
      {props.sepet.map((item) => (
        <div className="sepet-box">
          <div style={{ flex: 1.5 }}>
            <img src={item.image} />
          </div>
          <div style={{ flex: 2, padding: "0 .5rem" }}>
            <h1 key={item.id}>
              {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
            </h1>
          </div>
          <div className="amount">{item.amount}</div>
          <div className="price">${item.price}</div>
        </div>
      ))}
      <hr></hr>
      <h3 style={{ textAlign: "right", fontSize: "1.5rem", fontWeight: 400 }}>
        Total: <span style={{ fontWeight: 700 }}>${props.total}</span>
      </h3>

      <div
        className="Clicked"
        onClick={(e) => {
          e.stopPropagation();
          e.target.parentElement.parentElement.classList.toggle("active");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
}
