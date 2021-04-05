import react, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";
import gsap from "gsap"


const HoveredValue = () => {
    const { value10 } = useContext(AppContext);
    const [hoveredValue, setHoveredValue] = value10;

    gsap.fromTo("#hovered-value", {opacity: 0}, {opacity: 1, duration: 0.5})
    gsap.fromTo("#hovered-value", {y: 200}, {y: 190, duration: 0.4})

    return (
        <div id="hovered-value">{hoveredValue}</div>
    )
}

export default HoveredValue;