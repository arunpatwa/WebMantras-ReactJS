import React, { useState, useEffect } from "react";

const Home = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  // here setState are the functions

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );

      const response = await get.json();

      setData(response);

      console.log(response);
    }
    getData();
    document.title = `(${state}) Employees Online `;
  }, [state]);
  return (
    <div>
      <button onClick={() => setState(state + 2)}>Click Me {state}</button>
      {data.map((elements, index) => {
        return (
          <div key={index} className="data">
            <h4>{elements.firstName}</h4>
            <h4>{elements.lastName}</h4>
            <h4>{elements.email}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
