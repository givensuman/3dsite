import React from "react"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"

import PageWrapper from '../components/PageWrapper';

const About = () => {

    const { rive, RiveComponent } = useRive({
        src: "/plant.riv",
        stateMachines: "Bird",
        autoplay: false
    })

    const animateMiddle = useStateMachineInput(rive, "Bird", "Middle")
    const animateTop = useStateMachineInput(rive, "Bird", "Up")
    const animateDown = useStateMachineInput(rive, "Bird", "Down")

    return (
        <PageWrapper 
            animationKey="about"
            className="bg-yellow-700 -z-20"
        >
            <div>
                <button onClick={() => animateMiddle?.fire()}>
                    Mid
                </button>
            </div>
            <RiveComponent 
                onMouseEnter={() => rive && rive.play()}
                onMouseLeave={() => rive && rive.pause()}
                style={{
                    height: "100vh",
                    width: "100%"
                }}
                className="fixed top-0 bottom-0 right-0 left-0 -z-10"
            />
        </PageWrapper>
    )
}

export default About