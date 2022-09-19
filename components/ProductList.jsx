import React from "react";
import Product from "./Product";

let products = [
  { name: `P1`, Desc: `Lorem ipsum dolor`, Price: 50, img: ``, href: `` },
  { name: `P2`, Desc: `Lorem ipsum dolor`, Price: 20, img: ``, href: `` },
  { name: `P3`, Desc: `Lorem ipsum dolor`, Price: 60, img: ``, href: `` },
  { name: `P4`, Desc: `Lorem ipsum dolor`, Price: 70, img: ``, href: `` },
];

const ProductList = () => {
  return (
    <>
      <div id="art">
          <h1 className="text-4xl text-center font-bold tracking-tight text-gray-900">
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
                />
              );
            })}
          </div>
        </div>
    </>
  );
};

export default ProductList;
