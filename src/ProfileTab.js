import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import IconLabelTabs from "./components/IconLabelTabs";
import PersonPinIcon from "@mui/icons-material/PersonPin";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 6 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "#3D2CA7",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        width: "100px",
        height: 924,
        textAlign: "center",
        color: "#fff",
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          // display: { xs: "none", sm: "block" },
          display: "flex",
          textAlign: "center",
          height: "100px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Logo
      </Typography>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        indicatorColor="primary"
        textColor="inherit"
        sx={{ borderRight: 3, borderColor: "divider" }}
      >
        <Tab icon={<PersonPinIcon />} label="Dashboard" {...a11yProps(0)} />
        <Tab
          label="Carbon Footprint"
          icon={<PersonPinIcon />}
          {...a11yProps(1)}
        />
        <Tab
          icon={<PersonPinIcon />}
          color="primary"
          label="Profile"
          {...a11yProps(2)}
        />
        <Tab icon={<PersonPinIcon />} label="Settings" {...a11yProps(3)} />
        <Tab icon={<PersonPinIcon />} label="Item Five" {...a11yProps(4)} />
        <Tab icon={<PersonPinIcon />} label="Item Six" {...a11yProps(5)} />
        <Tab icon={<PersonPinIcon />} label="Item Seven" {...a11yProps(6)} />
        <Tab icon={<PersonPinIcon />} label="Item Eight " {...a11yProps(7)} />
        <Tab icon={<PersonPinIcon />} label="Item Nine" {...a11yProps(8)} />
        <Tab icon={<PersonPinIcon />} label="Item Ten" {...a11yProps(9)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h1 style={{ marginTop: "100px", color: "black" }}>Dashboard</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IconLabelTabs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item seven
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Eight
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Nine
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item ten
      </TabPanel>
    </Box>
  );
}
