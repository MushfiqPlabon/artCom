import React, { Fragment } from "react";
import Product from "./Product";

let products = [
  { name: `P1`, desc: `Lorem ipsum dolor`, price: 50, img: `0`, href: `0` },
  { name: `P2`, desc: `Lorem ipsum dolor`, price: 20, img: `0`, href: `0` },
  { name: `P3`, desc: `Lorem ipsum dolor`, price: 60, img: `0`, href: `0` },
  { name: `P4`, desc: `Lorem ipsum dolor`, price: 70, img: `0`, href: `0` },
];

const ProductList = () => {
  return (
    <>
      <div id="art">
        <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900 p-9 m-6 pt-8">
          Would you like to purchase some of my art?
        </h1>
        <div className="flex flex-wrap py-5 justify-around justify-items-center justify-self-center content-around items-center self-center place-content-around place-items-center place-self-center">
          {products.map((e, i) => {
            return (
              <Product
                key={i}
                img={e.img}
                title={e.title}
                desc={e.desc}
                price={e.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
