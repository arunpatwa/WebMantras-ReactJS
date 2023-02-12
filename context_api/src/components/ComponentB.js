import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = ({data}) => {
  return (
    <div className="comp">
        <h1>ComponentB</h1>
      <ComponentC data={data}/>
    </div>
  );
};

export default ComponentB;
