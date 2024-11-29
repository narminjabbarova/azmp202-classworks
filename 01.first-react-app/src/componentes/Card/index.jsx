import React from "react";
import { products } from "../Data/data";
import "./index.css"

export const Card = () => {
  // console.log(products);
  return (
    <>
      {products.map((item,idx) => (
        <div key={idx} className="card">
          <img src={item.image} alt="" style={{width:"200px"}} />
          <p>{item.category}</p>
          <span>{item.description}</span>
        </div>
      ))}
    </>
  );
};
