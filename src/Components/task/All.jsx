// import React from "react";
import Card from "./Card";

const All = (value) => {
  console.log(value.value);
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {value.value.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default All;
