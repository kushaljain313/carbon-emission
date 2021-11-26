import React from "react";
import Box from "@mui/material/Box";

import CarbonOffset from "../components/CarbonOffset";
import Form from "../components/Form";
import Typography from "@mui/material/Typography";

const TravelPage = ({ label }) => {
  return (
    <Box
      component="div"
      color="#3D2CA7"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        height: "600px",

        width: "100%",
        backgroundColor: "#E5F0FC",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        textColor: "blue",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          // display: { xs: "none", sm: "block" },
          width: "100%",
          flexGrow: 1,
        }}
      >
        {label}
      </Typography>
      <Form />
      <CarbonOffset />
    </Box>
  );
};

export default TravelPage;
