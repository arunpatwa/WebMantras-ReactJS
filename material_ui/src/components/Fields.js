import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
const Fields = ({ name, email, index,data, setData }) => {
  
  const removeItem = () => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="data">
      <div className="saved_data">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack>
          <Button onClick={removeItem} variant="contained" color="error">
            <DeleteIcon />
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Fields;
