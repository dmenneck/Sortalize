import { AppContext } from "../components/AppContext";
import { Controls, PlayState, Tween } from "react-gsap";
import React, { useRef, useEffect, useContext } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import FullWidthTabs from "../components/Tabs";
import gsap from "gsap"

const Information = () => {
  const { value5, value6 } = useContext(AppContext);
  const [openInformation, setOpenInformation] = value5;
  const [switchChecked, setSwitchChecked] = value6;

  const fadeOut = () => {
    if (window.innerWidth < 770) {
      gsap.to("#open-info-wrapper", {y: 400})

      setTimeout(() => {
        setOpenInformation(false)
      }, 400)

    } else {
      setOpenInformation(false)
    }

  }

  if (openInformation) {
    return (
      <ClickAwayListener onClickAway={fadeOut}>
          <Tween from={{ y: "500px" }} to={{ y: "40%" }} duration={0.5}>
            <div
              id="open-info-wrapper"
              style={{ backgroundColor: switchChecked ? "#55BDCA" : "grey" }}
            >
              <FullWidthTabs />
            </div>
          </Tween>
      </ClickAwayListener>
    );
  } else {
    return null;
  }
};

export default Information;
