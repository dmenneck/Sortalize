import react, {useState, useEffect, useContext} from "react"
import gsap from "gsap"
import { Reveal, Tween } from 'react-gsap';

// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))
let tl1 = gsap.timeline();
let tl2 = gsap.timeline();

const animateWords = async (sortalize) => {
    for (let i = 0; i < sortalize.length; i++ ) {

        if(i == 5 ||i == 8) {
            document.getElementsByClassName(`sortalize-${i}`)[0].style.color = "orange"
            gsap.to(`.sortalize-${i}`, {y: -40})
        } else {
            document.getElementsByClassName(`sortalize-${i}`)[0].style.color = "grey"
        }
        await timer(100);
    }
    
    tl1.to(".sortalize-5", {x: 40, ease: "expo.out"})
       .to(".sortalize-5", {y: 0, ease: "expo.out"})

    tl2.to(".sortalize-8", {x: -40, ease: "expo.out"})
       .to(".sortalize-8", {y: 0, ease: "expo.out"})
    
    gsap.to(".comic-font-intro", {opacity: 0, delay: 1, duration: .7})
}

const IntroSlide = () => {
    const FadeInLeft = ({ children }) => (
        <Tween
          from={{ opacity: 0, transform: 'translate3d(-10vw, 0, 0)' }}
          ease="back.out(1.2)"
        >
          {children}
        </Tween>
      );

    let sortalize = ['S', 'o', 'r', 't', "'", 'z', 'l', 'i', 'a', 'e']

    useEffect(() => {
        setTimeout(() => {
            animateWords(sortalize)
        }, 1000);
    }, [])

    return (
        <div id="intro-slider"> 
            <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                    <div className="comic-font-intro">
                    {sortalize.map((i, idx) => {
                        return <p key={i} className={`sortalize-${idx} sortalize_chars`}>{i}</p>
                    })}
                    </div>
                </FadeInLeft>
            </Reveal>
        </div>
    )
 
}

export default IntroSlide;