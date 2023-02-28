import React from "react"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"

import Link from "../components/Link"
import PageWrapper from '../components/PageWrapper';

const About = () => {

    const { rive, RiveComponent } = useRive({
        src: "/plant.riv",
        stateMachines: "State Machine 1",
        autoplay: false
    })

    const animateMiddle = useStateMachineInput(rive, "State Machine 1", "TriggerMiddle")
    const animateTop = useStateMachineInput(rive, "State Machine 1", "TriggerUp")
    const animateDown = useStateMachineInput(rive, "State Machine 1", "TriggerDown")

    return (
        <PageWrapper 
            animationKey="about"
            className="bg-yellow-700"
        >
            <Link href="/">
                Home
            </Link>
            <Link href="/about" active>
                About
            </Link>
            <button onClick={() => animateMiddle?.fire()}>
                middle
            </button>
            <button onClick={() => animateTop?.fire()}>
                Top
            </button>
            <button onClick={() => animateDown?.fire()}>
                Down
            </button>
            <RiveComponent 
                onMouseEnter={() => rive && rive.play()}
                onMouseLeave={() => rive && rive.pause()}
                style={{
                    height: "100vh",
                    width: "100%"
                }}
            />
        </PageWrapper>
    )
}

export default About