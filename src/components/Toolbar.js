import react, { useContext, useState } from "react";
import Slider from "../components/Slider";
import Sleep from "../components/Sleep";
import Start from "../components/Starts";
import WhichAlgorithm from "../components/WhichAlgorithm";
import { AppContext } from "./AppContext";
import { Reveal, Tween } from 'react-gsap';

const Toolbar = () => {
  const { value6 } = useContext(AppContext);
  const [switchChecked, setSwitchChecked] = value6;
  const [showComponent, setShowComponent] = useState(false)


  setTimeout(() => {
    setShowComponent(true)
  }, 3000)

  if (showComponent) {
    return (
      <Reveal>
        <Tween from={{ opacity: 0 }} duration={2}>
          <div
              id="toolbar"
              style={{ backgroundColor: switchChecked ? "#022249" : ""}}
            >
              <Slider />
              <WhichAlgorithm />
              <Sleep />
              <Start />
          </div>
        </Tween>
      </Reveal>
      );
  } else {
    return (
      null
    )
  }
};

export default Toolbar;


