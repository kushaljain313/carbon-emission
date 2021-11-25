import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    id: `horizontal-tab-${index}`,
    "aria-controls": `horizontal-tabpanel-${index}`,
  };
}
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        height: 74,
        marginTop: "100px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab icon={<PhoneIcon />} label="Buisiness Travel" {...a11yProps(0)} />
        <Tab icon={<FavoriteIcon />} label="Real Estate" {...a11yProps(1)} />
        <Tab icon={<PersonPinIcon />} label="Commuting" {...a11yProps(2)} />
        <Tab icon={<PersonPinIcon />} label="Vehicles" {...a11yProps(2)} />
        <Tab icon={<PersonPinIcon />} label="Others" {...a11yProps(2)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        Buisiness Travel
      </TabPanel>
      <TabPanel value={value} index={1}>
        Real Estate
      </TabPanel>
      <TabPanel value={value} index={2}>
        Commuting
      </TabPanel>
      <TabPanel value={value} index={3}>
        Vehicles
      </TabPanel>
      <TabPanel value={value} index={4}>
        Others
      </TabPanel>
    </Box>
  );
}
