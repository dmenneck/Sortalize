import React, {useState, useContext} from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AppContext } from "./AppContext";
import Highlight from 'react-highlight'
import Complexity from "../components/Complexity"
import {getCurrentAlgoData } from "../data/algorithms"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function FullWidthTabs() {
  const {value4, value5} = useContext(AppContext)
  const [whichAlgorithm, setWhichAlgorithm] = value4
  const [openInformation, setOpenInformation] = value5
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let data;
  if(openInformation) {
    data = getCurrentAlgoData(whichAlgorithm)
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Information" />
          <Tab label="Time complexity" />
          <Tab label="Code" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <h1 id="info-algo-name">{data.information.name}</h1>
          <span>{data.information.text}</span>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Complexity data={data.complexity.text}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <div id="code_wrapper">
          <Highlight className='javascript'>
            {data.code.js}
          </Highlight>

        </div>
          <span>...see full code on </span>
          <a href={data.code.link} target="_blank" style={{color: "white"}}>github</a>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
