import react, { useContext, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

const SortingField = () => {
  const { value1, value2, value8, value10 } = useContext(AppContext);
  const [amountOfElements, setAmountOfElements] = value1;
  const [randomize, setRandomize] = value2;
  const [resetElements, setResetElements] = value8
  const [hoveredValue, setHoveredValue] = value10;


  const fillArr = () => {
    let arr = [];
    for (let i = 1; i < 101; i++) {
      arr.push(i);
    }
    setRandomize(arr);
  }

  // initial fill on page load
  useEffect(() => {
    fillArr()
  }, []);

  if (resetElements) {
    // reset values in arr
    setRandomize([])
    // re-fill array with sorted number 1-100
    fillArr()
    setResetElements(false)
  }


  return (
    <div className="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={(window.innerHeight / 2) - (window.innerHeight / 14) + 60}
        width={10 * amountOfElements} 
        transform="scale(1 -1)"
        id="svg"
      >
        {randomize.slice(0, amountOfElements).map((i, index) => {
          return (
            <rect x={index * 10} width="9" height={i * 3} rx="2" class="rects"  onMouseOver={(() => setHoveredValue(i))} onMouseLeave={(() => setHoveredValue())} />
          );
        })}
      </svg>
    </div>
  );
};

export default SortingField;
