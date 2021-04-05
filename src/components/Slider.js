import react, { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { makeStyles } from "@material-ui/core/styles";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import Slider from "@material-ui/core/Slider";
import Tooltip from '@material-ui/core/Tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import gsap from "gsap/gsap-core";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

const CSlider = () => {
  const classes = useStyles();
  const { value1, value2, value6, value7, value8, value9 } = useContext(AppContext);
  const [amountOfElements, setAmountOfElements] = value1;
  const [randomize, setRandomize] = value2;
  const [switchChecked, setSwitchChecked] = value6;
  const [doneSorting, setDoneSorting] = value7;
  const [resetElements, setResetElements] = value8
  const [amountOfSwaps, setAmountOfSwaps] = value9;

  const valuetext = (value) => {
    setAmountOfElements(value);
    return `${value}`;
  };

  const randomizer = () => {
    if (doneSorting) {
      setAmountOfElements(1);

      let arr = [];
      let rnd = [];
  
      for (let i = 1; i < 101; i++) {
        arr.push(i);
      }
  
      rnd = arr.sort(() => Math.random() - 0.5);
  
      setRandomize(rnd);
    } 
  };

  const reset = () => {
    setAmountOfSwaps()
    setAmountOfElements(1);
    setResetElements(true);
  };

  if (window.innerWidth >= 650) {
    gsap.fromTo("#forward-icon", {x: 0, opacity: 1}, {x: 130, opacity: 0, duration: 2.5, repeat: -1})
  } 

  let slideComponent;
  // cant simply change max-attribute for some reason..

  if (window.innerWidth <= 250) {
    slideComponent = <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        max={18}
        valueLabelDisplay="auto"
        disabled={!doneSorting}
      />
  } else if (window.innerWidth > 250 && window.innerWidth <= 350) {
    slideComponent = <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        max={22}
        valueLabelDisplay="auto"
        disabled={!doneSorting}
      />
  } else if (window.innerWidth > 350 && window.innerWidth <= 451) {
    slideComponent = <Slider
      defaultValue={0}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      max={30}
      valueLabelDisplay="auto"
      disabled={!doneSorting}
    />
  } else if (window.innerWidth > 450 && window.innerWidth <= 551) {
    slideComponent = <Slider
      defaultValue={0}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      max={40}
      valueLabelDisplay="auto"
      disabled={!doneSorting}
    />
  } else if (window.innerWidth > 551 && window.innerWidth <= 880) {
      slideComponent = <Slider
      defaultValue={0}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      max={54}
      valueLabelDisplay="auto"
      disabled={!doneSorting}
    />
  }  else if (window.innerWidth > 881 && window.innerWidth <= 1100) {
    slideComponent = <Slider
    defaultValue={0}
    getAriaValueText={valuetext}
    aria-labelledby="discrete-slider-small-steps"
    step={1}
    max={80}
    valueLabelDisplay="auto"
    disabled={!doneSorting}
  />
  } else {
    slideComponent = <Slider
      defaultValue={0}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      max={100}
      valueLabelDisplay="auto"
      disabled={!doneSorting}
    />
  }
  
  return (
    <div id="slider-wrapper" className={classes.root}>
      <Tooltip title={doneSorting ? "watch what happens..." : "still sorting..."} placement="top">
        <button
          id="randomize-btn"
          className="comic-font"
          onClick={randomizer}
          style={{
            color: switchChecked ? "black" : "white",
            backgroundColor: switchChecked ? "white" : "black",
            cursor: doneSorting ? "pointer" : "auto"
          }}
        >
          Randomi<span className="z">z</span>e
        </button>
      </Tooltip>
      <Tooltip  title={doneSorting ? "Return" : "still sorting..."} placement="top">
        <SettingsBackupRestoreIcon
          className="comic-font"
          id="randomize-return"
          onClick={doneSorting ? reset : null}
        />
      </Tooltip>
      <ArrowForwardIosIcon id="forward-icon" style={{display: amountOfElements == 0 && window.innerWidth >= 770 ? "block" : "none"}}/>
      { slideComponent }
    </div>
  );
};

export default CSlider;
