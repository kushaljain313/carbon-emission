import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ButtonComponent from "./ButtonComponent";
import Checkbox from "@mui/material/Checkbox";

import InputField from "./InputField";
import TableList from "./TableList";
const CarbonOffset = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        height: "400px",
        width: "30%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = 850 kgCo
        </Typography>
        <Typography
          variant="p"
          noWrap
          component="div"
          sx={{ alignSelf: "flex-start", ml: 1 }}
        >
          Total = £500
        </Typography>
      </Box>

      <TableList />

      <FormControlLabel
        value="end"
        control={<Checkbox />}
        label="Add 10% to your offset"
        labelPlacement="end"
        sx={{ alignSelf: "flex-start", ml: 1 }}
      />
      <ButtonComponent label="Choose a Carbon offset Project" />
    </Box>
  );
};

export default CarbonOffset;
