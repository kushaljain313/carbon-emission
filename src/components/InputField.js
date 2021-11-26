import React from "react";

import TextField from "@mui/material/TextField";

const InputField = ({ type, size, label }) => {
  return (
    <TextField
      label={label}
      type={type}
      id="filled-size-small"
      // defaultValue="Small"
      // variant="filled"
      size={size}
    />
  );
};

export default InputField;
