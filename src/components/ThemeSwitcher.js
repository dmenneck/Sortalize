import { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import Tooltip from '@material-ui/core/Tooltip';

const ThemeSwitcher = () => {
  const { value6 } = useContext(AppContext);
  const [switchChecked, setSwitchChecked] = value6;

  const handleChange = () => {
    switchChecked ? setSwitchChecked(false) : setSwitchChecked(true);

    switchChecked
      ? (document.body.style.backgroundColor = "#1F1F1F")
      : (document.body.style.backgroundColor = "#C7EEF5");
  };

  return (
    <div id="theme_switcher">
      {!switchChecked ? (
        <Tooltip title="Switch to Light Mode" placement="top">
          <Brightness7Icon onClick={handleChange} style={{ fill: "white" }} />
        </Tooltip>
      ) : (
        <Tooltip title="Switch to Dark Mode" placement="top">
          <BrightnessLowIcon onClick={handleChange} style={{ fill: "black" }} />
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeSwitcher;

