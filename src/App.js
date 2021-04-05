import Toolbar from "../src/components/Toolbar";
import MobileToolbar from "../src/components/MobileToolbar";
import SortingAreaWrapper from "../src/components/SortingAreaWrapper";
import { ContextProvider } from "../src/components/AppContext";
import ThemeSwitcher from "../src/components/ThemeSwitcher";
import Information from "../src/components/Information";
import Header from "../src/components/Header";
import IntroSlide from "./components/Intro";
import HoveredValue from "./components/HoveredValue"
import {IntroMessage} from "./components/IntroMessage"

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <IntroMessage />
        <HoveredValue />
        <IntroSlide />
        <Header />
        <Information />
        <ThemeSwitcher />
        <SortingAreaWrapper />
        <Toolbar />
        <MobileToolbar />
      </ContextProvider>
    </div>
  );
};

export default App;
