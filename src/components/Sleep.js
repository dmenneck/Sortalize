import react, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import FastForwardIcon from '@material-ui/icons/FastForward';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

const Sleep = () => {
  const { value4 } = useContext(AppContext);
  const [whichAlgorithm, setWhichAlgorithm] = value4;
  const classes = useStyles();

  return (
    <div id="slider-wrapper" className={classes.root}>
      <div className="slidecontainer slidecontainer-1">
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          max={10}
          valueLabelDisplay="auto"
          id="slider-sleep"
          disabled={whichAlgorithm == "quicksort" ? true : false}
        />
        <Tooltip title="Speed" placement="top" id="fast-forward" style={{display: window.innerWidth < 770 ? "none" : "block"}}>
          <FastForwardIcon id="fast-forward"/>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sleep;
