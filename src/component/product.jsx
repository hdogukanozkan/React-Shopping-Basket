import React from "react";

export default function Product(props) {
  return (
    <div className="box" key={props.product.id}>
      <div className="imageBurada">
        <img src={props.product.image} alt="" />
      </div>
      <h2>
        {props.product.title.charAt(0).toUpperCase() +
          props.product.title.slice(1)}
      </h2>
      <h3>${props.product.price}</h3>
      <div className="btnAll">
        <button
          className="btnRed"
          disabled={props.product.amount === 0}
          onClick={() => props.donder(props.product)}
        >
          Sat
        </button>
        <span>{props.product.amount ? props.product.amount : 0}</span>
        <button
          className="btnGreen"
          onClick={() => {
            props.gonder(props.product);
          }}
          disabled={props.total + props.product.price > props.money}
        >
          Satın al
        </button>
      </div>
    </div>
  );
}
