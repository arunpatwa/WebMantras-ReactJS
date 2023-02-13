import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  Bars,
  MutatingDots,
  TailSpin,
  ThreeCircles,
  ThreeDots,
} from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    async function getData() {
      const res = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=500&idStarts=1001`
      );
      const finalRes = await res.json();
      setData(finalRes);
      setLoading(false);
      toast.success("Successfully Fetched the Data");
      console.log(finalRes);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer/>
      <div className="spinner">
        {loading ? (
          <Bars />
        ) : (
          data.map((e, i) => {
            return <p>{e.firstName}</p>;
          })
        )}
      </div>
    </div>
  );
}

export default App;
