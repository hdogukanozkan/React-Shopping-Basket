import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/header";
import products from "./products.json";
import Product from "./component/product";
import Sepet from "./component/sepet";

function App() {
  const [money] = useState(100);
  const [urunler, setUrunler] = useState([]);
  const [toplam, setToplam] = useState();

  const satinAl = (product) => {
    const urunlerVarmi = urunler.find((item) => item.id === product.id);

    if (urunlerVarmi) {
      urunlerVarmi.amount += 1;
      console.log("1.");
      setUrunler((oldArray) => [
        ...oldArray.filter((item) => item.id !== product.id),
        urunlerVarmi,
      ]);
    } else {
      console.log("2.");
      product.amount += 1;
      setUrunler([...urunler, product]);
    }
  };

  const satin = (product) => {
    const urunlerVarmi = urunler.find((item) => item.id === product.id);

    if (urunlerVarmi) {
      urunlerVarmi.amount -= 1;
      console.log("1.");
      setUrunler((oldArray) => [
        ...oldArray.filter((item) => item.id !== product.id),
        urunlerVarmi,
      ]);

      if (urunlerVarmi.amount === 0) {
        setUrunler((oldArray) => [
          ...oldArray.filter((item) => item.id !== product.id),
        ]);
      }
    }
  };

  useEffect(() => {
    setToplam(
      urunler.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );

    console.log(urunler);
  }, [urunler]);

  return (
    <div className="App">
      <Header money={money} total={toplam} />

      <div className="container urunler">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            gonder={satinAl}
            donder={satin}
            money={money}
            total={toplam}
          />
        ))}
      </div>

      <Sepet sepet={urunler} total={toplam} />
    </div>
  );
}

export default App;
