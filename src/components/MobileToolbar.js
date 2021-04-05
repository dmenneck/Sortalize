import react, { useContext, useState, useEffect } from "react";
import gsap from "gsap"
import MobileTabs from "../components/MobileTabs"
import { AppContext } from "./AppContext";
import { Reveal, Tween } from 'react-gsap';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CircularProgress from '@material-ui/core/CircularProgress';


import {startSorting} from "../functions/startSorting"

const MobileToolbar = () => {
  const { value4, value6, value7, value9, value11 } = useContext(AppContext);
  const [whichAlgorithm, setWhichAlgorithm] = value4;
  const [switchChecked, setSwitchChecked] = value6;
  const [doneSorting, setDoneSorting] = value7;
  const [sortingData, setSortingData] = value9;
  const [startSortingMobile, setStartSortingMobile] = value11;
  const [value, setValue] = useState("");
  const [showComponent, setShowComponent] = useState(false)
  const [firstLoad, setFirstLoad] = useState(false)


  setTimeout(() => {
    setShowComponent(true)
  }, 3000)

  const Sort = async () => {
    setDoneSorting(false);
    let data = await startSorting(whichAlgorithm)
    setSortingData(data)
    setDoneSorting(true);
    setStartSortingMobile(false);
  }

  // toggle mobile tab bars
  let sameValues
  const handleChange = (event, newValue) => {
    setFirstLoad(true)

    // start sorting
    if (newValue == value) {
      // check if same tab was clicked twice
      if (sameValues) {
        gsap.fromTo(".mobile-tabs-wrapper", {y: 0}, {y: -56})
        sameValues = false;
      } else {
        gsap.fromTo(".mobile-tabs-wrapper", {y: -56}, {y: 40} )
        sameValues = true;
      }
    } else {
      gsap.fromTo(".mobile-tabs-wrapper", {y: 0}, {y: -56})
      sameValues = false
      setValue(newValue);
    }
  };

  // execute when doneSorting bool changes
  useEffect(() => {
    // firstLoad: to hide slider on mount
    if (doneSorting && firstLoad) {
      gsap.fromTo(".mobile-tabs-wrapper", {y: 0}, {y: -56, duration: 0.8})
      sameValues = false
      setValue("slider");
    } 
  }, [doneSorting])

  if (showComponent) {
    return (
        <>
            <Reveal>
                <Tween from={{ opacity: 0 }} duration={2}>
                <div
                    id="mobile-toolbar"
                    > 
                    <BottomNavigation  value={value} onChange={handleChange}>
                        <BottomNavigationAction label="Slider" value="slider" icon={<EqualizerIcon />} />
                        <BottomNavigationAction label="Algorithms" value="algorithms" icon={<MoreHorizIcon />} />
                        <BottomNavigationAction label={doneSorting ? "Sorted!" : "Sorting..."} value="start" icon={doneSorting ? <PlayArrowIcon /> : <CircularProgress />} onClick={doneSorting ? Sort : null} />
                    </BottomNavigation>
                </div>
                </Tween>
            </Reveal>
            
            <MobileTabs activeNavigation={value}/>
        </>
      );
  } else {
    return (
      null
    )
  }
};

export default MobileToolbar;

/*
 const handleChange = (event, newValue) => {
    // start sorting
    if (newValue == value) {
      // check if same tab was clicked twice
      if (sameValues) {
        gsap.fromTo(".mobile-tabs-wrapper", {y: 200}, {y: -56})
        sameValues = false;
      } else {
        gsap.fromTo(".mobile-tabs-wrapper", {y: -56}, {y: 100}, {duration: 1})
        sameValues = true;
      }
    } else {
      gsap.fromTo(".mobile-tabs-wrapper", {y: 200}, {y: -56})
      sameValues = false
      setValue(newValue);
    }
  };


*/


