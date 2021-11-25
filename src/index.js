import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import ProfileTabs from "./ProfileTab";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

import Box from "@mui/material/Box";

ReactDOM.render(
  <React.StrictMode>
    <Box
      sx={{
        display: "flex",
        // flexDirection: "row",
        // flexWrap: "nowrap",
        // justifyContent: "flex-start",
      }}
    >
      {" "}
      <ProfileTabs />
      <PrimarySearchAppBar />
    </Box>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
