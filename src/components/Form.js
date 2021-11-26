import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputField from "./InputField";
import ButtonComponent from "./ButtonComponent";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "58ch" },
        height: "400px",
        width: "50%",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="p"
        noWrap
        component="div"
        sx={{
          display: { xs: "none", sm: "block" },
          alignSelf: "flex-start",
          m: 1,
        }}
      >
        Calculate Your Flight's Carbon Emission
      </Typography>

      <InputField
        type="time"
        size="small"
        label="Departure"
        sx={{ width: "75%" }}
      />

      <InputField type="text" size="small" label="Destination" />

      <InputField type="number" size="small" label="Number of Passengers" />
      <FormGroup
        aria-label="position"
        row
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="One Way"
          labelPlacement="start"
        />

        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Economy"
          labelPlacement="start"
        />
        {/* <FormControlLabel value="end" label="Start" labelPlacement="end" /> */}
      </FormGroup>
      <ButtonComponent label="Calculate and add to the cart" />
    </Box>
  );
};

export default Form;
