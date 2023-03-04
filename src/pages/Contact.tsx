import React, { useState, useRef, useEffect } from "react"
import clsx from "clsx"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import type { StateMachineInput } from "@rive-app/react-canvas"
import { motion } from "framer-motion"
import Wave from "react-wavify"

import PageWrapper from "../components/PageWrapper"
import Confetti from "../components/Confetti"
import Snow from "../components/Snow"

import useWindowDimensions from '../hooks/useWindowDimensions';

const waveColors = [
  {
    dark: "#273036",
    bright: "#118ab2"
  },
  {
    dark: "#37444D",
    bright: "#06d6a0"
  },
  {
    dark: "#4D5F6B",
    bright: "#ef476f"
  }
]

const Contact = () => {
  const { rive, RiveComponent } = useRive({
    src: "/pup.riv",
    stateMachines: "Pup",
    autoplay: true,
  })

  const hover = useStateMachineInput(rive, "Pup", "hover") as StateMachineInput | null

  const [showConfetti, setShowConfetti] = useState(false)

  if (hover) {
    hover.value = showConfetti
  }

  const timeoutRef = useRef<number | null>(null)
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const { width } = useWindowDimensions()

  return (
    <PageWrapper
      animationKey="contact"
      animate={false}
      className={clsx("transition-colors", {
        "bg-slate-600": !showConfetti,
        "bg-sky-500": showConfetti
      })}
    >
      <div 
      className="h-1/2 mt-24 max-h-96 px-2 md:px-12 flex justify-center mx-auto"
      style={{
        width: "36rem",
        maxWidth: "90vw"
      }}
      >
        <RiveComponent
          className="cursor-pointer h-48 w-96"
          onClick={() => {
            setShowConfetti(true)
            if (hover) {
              hover.value = true
            }
            timeoutRef.current = setTimeout(() => {
              window.open(
                "mailto:givensuman@gmail.com?subject=Hello Given!",
                "_self"
              )
            }, 200)
          }}
        />
      </div>
      {/* {!showConfetti && (
        <Snow />
      )} */}
      {showConfetti && <>
        <Confetti />
        <div 
          className="absolute bottom-2 w-full flex justify-center px-2 z-10"
        >
          <motion.button
            key="stopconfettibutton"
            className="bg-slate-700 px-3 py-2 rounded-md hover:bg-slate-800 transition-colors text-lg"
            onClick={() => setShowConfetti(false)}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            Reset
          </motion.button>
        </div>
      </>}
      {waveColors.map((color, i) => (
        <Wave 
          key={i}
          className="absolute bottom-0 transition-colors"
          fill={showConfetti ? color.bright : color.dark}
          options={{
            height: 40 + (20 * i),
            amplitude: 20 + (2 * i),
            speed: 0.15 + (0.05 * i),
            points: 3 + i
          }}
        />
      ))}
    </PageWrapper>
  )
}

export default Contact
