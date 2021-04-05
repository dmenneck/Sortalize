import React, { useState, useContext, forwardRef } from "react";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from '@material-ui/core/Tooltip';
import { AppContext } from "./AppContext";

const WhichAlgorithm = () => {
  const { value4, value5, value6 } = useContext(AppContext);
  const [whichAlgorithm, setWhichAlgorithm] = value4;
  const [openInformation, setOpenInformation] = value5;
  const [switchChecked, setSwitchChecked] = value6;

  const changeAlgo = (e) => {
    setWhichAlgorithm(e.target.value);
  };

  const handleClickOpen = () => {
    openInformation ? setOpenInformation(false) : setOpenInformation(true);
  };

  return (
    <div id="which-algo-wrapper">
      <Tooltip title="Select algorithm" placement="top">  
        <select
          name="algorithm"
          id="algorithm-select"
          onChange={changeAlgo}
          value={whichAlgorithm}
        >
          <option value="selectionsort">Selectionsort</option>
          <option value="bubblesort">Bubblesort</option>
          <option value="gnomesort">Gnomesort</option>
          <option value="insertionsort">Insertionsort</option>
          <option value="shakersort">Shakersort</option>
        </select>
      </Tooltip>
      <Tooltip title="Information" placement="top">
        <InfoIcon onClick={handleClickOpen} id="info-icon" style={{ fontSize: 30 }}/>
      </Tooltip>
    </div>
  );
};

export default WhichAlgorithm;
