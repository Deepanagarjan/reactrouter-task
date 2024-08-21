// import React from 'react';
import Card from "./Card";

const Career = (data) => {
  const career = data.data.filter((item) => item.head === "Career");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {/* <h1>Career</h1> */}
        {career.map((item, index) => {
          return (
            <>
              <Card key={index} item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
