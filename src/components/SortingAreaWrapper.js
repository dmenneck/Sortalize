import React, {useState, useContext} from "react";
import gsap from "gsap"
import SortingField from "../components/SortingField";
import { AppContext } from "./AppContext";

const SortingAreaWrapper = () => {
  const { value1,value6, value7, value9, value5 } = useContext(AppContext)
  const [amountOfElements, setAmountOfElements] = value1;
  const [wrapperVisible, setWrapperVisible] = useState(false)
  const [openInformation, setOpenInformation] = value5;
  const [switchChecked, setSwitchChecked] = value6;
  const [doneSorting, setDoneSorting] = value7;
  const [sortingData, setSortingData] = value9;

  setTimeout(() => {
    setWrapperVisible(true)
  }, 3000)

  if (sortingData != undefined) {
    gsap.to(".swaps", {opacity: 1, duration: .5})
  } else {
    gsap.to(".swaps", {opacity: 0, duration: .5})
  }

  let amountOfSwaps;
  let time;
  if (sortingData == undefined) {
    amountOfSwaps = 0
    time = 0
  } else {
    amountOfSwaps = sortingData.swaps
    time = sortingData.time
  }

  if (wrapperVisible) {
    return (
      <div id="sorting-area-wrapper" style={{display: openInformation ? "none" : "block"}}>
        <div id="sorting-finished-informations" style={{display: amountOfSwaps == 0 || !doneSorting ? "none" : "block"}}>
          <p className="swaps" style={{opacity: 0, color: switchChecked ? "rgb(2, 34, 73)" : "white"}}>swaps: {amountOfSwaps} </p>
          <p className="swaps" style={{opacity: 0, color: switchChecked ? "rgb(2, 34, 73)" : "white"}}>time: {Math.floor((time / 1000) % 60)}s</p>
        </div>
        <SortingField />
      </div>
    );
  } else {
    return null
  }
};

export default SortingAreaWrapper;
