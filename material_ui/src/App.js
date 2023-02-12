import "./App.css";
import React, { useState } from "react";
import Fields from "./components/Fields";

import Header from "./components/Header";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm(form);
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <Stack direction="row" spacing={3}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <TextField
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Box>
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="saved_data">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <Fields name={element.name}
            email={element.email}
            index={element.index}
            data={data}
            setData={setData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
