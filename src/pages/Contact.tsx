import React, { useState, useRef, useEffect } from "react"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"

import PageWrapper from "../components/PageWrapper"
import Confetti from "../components/Confetti"

const Contact = () => {

   const { rive, RiveComponent } = useRive({
      src: "/pup.riv",
      stateMachines: "Pup",
      autoplay: true
  })

  const animate = useStateMachineInput(rive, "Pup", "hover")

  const [ showConfetti, setShowConfetti ] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
   if (showConfetti) {
      timeoutRef.current = setTimeout(() => {
         setShowConfetti(false)
      }, 10000)
   }
   return () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current)
      }
   }
  }, [showConfetti])

   return (
      <PageWrapper
         animationKey="contact"
         className="bg-slate-600"
      >
         <div className="h-screen mt-24 max-h-96">
            <RiveComponent 
               onClick={() => {
                  setShowConfetti(true)
                  setTimeout(() => {
                     window.open('mailto:givensuman@gmail.com?subject=Hello Given!', "_self");
                  }, 100)
               }}
            />
         </div>
            {showConfetti && <>
               <Confetti />
            </>}
      </PageWrapper>
   )
}

export default Contact