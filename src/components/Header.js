import react, { useContext, useState } from "react";
import gsap from "gsap";
import { Reveal, Tween } from "react-gsap";
import { AppContext } from "./AppContext";

const Header = () => {
  const { value6 } = useContext(AppContext);
  const [switchChecked, setSwitchChecked] = value6;
  const [showComponent, setShowComponent] = useState(false);

  setTimeout(() => {
    setShowComponent(true);
  }, 3000);

  const animate = () => {
    let tl = gsap.timeline();
    tl.to(".header-text", { y: -5, duration: 0.2 }).to(".header-text", {
      y: 5,
      duration: 0.2,
    });
  };

  return (
    <Reveal>
      <Tween from={{ opacity: 0 }} duration={2}>
        <div
          className="comic-font header-text"
          style={{
            color: switchChecked ? "#022249" : "white",
            display: showComponent ? "block" : "none",
            cursor: "pointer",
          }}
          onClick={animate}
        >
          Sort'ali<span className="z">z</span>e
        </div>
      </Tween>
    </Reveal>
  );
};

export default Header;
