import react, {useContext, useEffect} from "react"
import gsap from "gsap"
import Slider from "../components/Slider";
import Sleep from "../components/Sleep";
import WhichAlgorithm from "../components/WhichAlgorithm";
import { AppContext } from "./AppContext";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FastForwardIcon from '@material-ui/icons/FastForward';

const MobileTabs = ({activeNavigation}) => {
    const {value1, value4, value6} = useContext(AppContext);
    const [amountOfElements, setAmountOfElements] = value1;
    const [whichAlgorithm, setWhichAlgorithm] = value4;

    gsap.fromTo("#forward-icon-mobile", {x: 26, opacity: 1}, {x: 340, opacity: 0, duration: 2.5, repeat: -1})
    gsap.fromTo("#fast-forward-mobile", {x: 26, opacity: 1}, {x: 240, opacity: 0, duration: 2.5, repeat: -1})

    let component;
    let sliderActive;

    if (activeNavigation == "slider") {
        sliderActive = true;
    } else if (activeNavigation == "speed") {
        sliderActive = false;
        component = <Sleep />;
    } else if (activeNavigation == "algorithms") {
        sliderActive = false;
        component = <WhichAlgorithm />;
    }  else if (activeNavigation == "start") {
        sliderActive = false;
        component = <Sleep />;
    }
    
    let slide;
    if (sliderActive) {
        window.innerWidth < 650 ? slide =  <Slider /> : slide = null;
    }
   
    return (
        <div className="mobile-tabs-wrapper" style={{display: activeNavigation != "" && window.innerWidth < 770  ? "block" : "none"}}>
            {component}

            <div style={{display: sliderActive ? "block" : "none"}}>
                {window.innerWidth < 770 ? slide =  <Slider style={{display: "none"}} /> : null}
            </div>
            
            <ArrowForwardIosIcon id="forward-icon-mobile" style={{display: activeNavigation == "slider" && amountOfElements == 0 ? "block" : "none" }}/>
            <FastForwardIcon id="fast-forward-mobile" style={{display: activeNavigation == "start" ? "block" : "none"}}/>
        </div>
    )
}

export default MobileTabs;

