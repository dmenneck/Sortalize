import react, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [amountOfElements, setAmountOfElements] = useState(1);
  const [randomize, setRandomize] = useState([]);
  const [whichAlgorithm, setWhichAlgorithm] = useState("selectionsort");
  const [openInformation, setOpenInformation] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [doneSorting, setDoneSorting] = useState(true);
  const [resetElements, setResetElements] = useState(false);
  const [sortingData, setSortingData] = useState();
  const [hoveredValue, setHoveredValue] = useState();
  const [startSortingMobile, setStartSortingMobile] = useState(false)

  return (
    <AppContext.Provider
      value={{
        value1: [amountOfElements, setAmountOfElements],
        value2: [randomize, setRandomize],
        value4: [whichAlgorithm, setWhichAlgorithm],
        value5: [openInformation, setOpenInformation],
        value6: [switchChecked, setSwitchChecked],
        value7: [doneSorting, setDoneSorting],
        value8 : [resetElements, setResetElements],
        value9: [sortingData, setSortingData],
        value10: [hoveredValue, setHoveredValue],
        value11: [startSortingMobile, setStartSortingMobile],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
