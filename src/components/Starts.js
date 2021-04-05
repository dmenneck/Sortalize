import react, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';

import {startSorting} from "../functions/startSorting"

const Start = () => {
  const { value1,value4, value7, value9, value11 } = useContext(AppContext);
  
  const [amountOfElements, setAmountOfElements] = value1;
  const [whichAlgorithm, setWhichAlgorithm] = value4;
  const [doneSorting, setDoneSorting] = value7;
  const [sortingData, setSortingData] = value9;
  const [startSortingMobile, setStartSortingMobile] = value11;

  const Sort = async () => {
    setAmountOfElements(1);

    setDoneSorting(false);
    let data = await startSorting(whichAlgorithm)
    setSortingData(data)
    setDoneSorting(true);
    setStartSortingMobile(false);
  }

  return (
    <div>
      <Tooltip title="Start Sorting" placement="top">
        <button variant="outlined" onClick={doneSorting ? Sort : null} className="sort-btn">
          <PlayArrowIcon style={{fill: "white"}}/>
        </button>
      </Tooltip>
  </div>
  ) 
};

export default Start;
