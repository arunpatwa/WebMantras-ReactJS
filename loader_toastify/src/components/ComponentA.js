import React from "react";

import ComponentB from "./ComponentB";

const ComponentA =({data}) => {
  return (
    <div className="comp">
      <div>ComponentA</div>
      <ComponentB data={data}/>
    </div>
  );
};

export default ComponentA;
