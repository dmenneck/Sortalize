import {useState, useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import gsap from "gsap"

export const IntroMessage = () => {
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowData(true)
            gsap.fromTo("#intro-message", {y: -50, opacity: 0}, {y: 20, opacity: 1})
        }, 4000)
    }, [])

    const closeIntro = () => {
        if (window.innerWidth < 770) {
            gsap.fromTo("#intro-message", {y: 20}, {y: 200, opacity: 0})
        } else {
            gsap.fromTo("#intro-message", {y: 20}, {y: -140, opacity: 0})
        }

        setTimeout(() => {
            setShowData(false)
        }, 1000)
    }

    const rotateForth = () => {
        gsap.to("#close-intro-message", {rotate: 90})
    }

    const rotateBack = () => {
        gsap.to("#close-intro-message", {rotate:0})
    }


    if (showData) {
        return (
            <div id="intro-message">
                <h1 style={{display: "inline"}}>There might be some bugs with ios-devices. Working on it!</h1>
                <CloseIcon onClick={closeIntro} id="close-intro-message" onMouseEnter={rotateForth} onMouseLeave={rotateBack} />
            </div>
        );   
    } else {
        return null;
    }
}