import React, { useState, useRef, useEffect } from "react"
import { useRive } from "@rive-app/react-canvas"

import PageWrapper from "../components/PageWrapper"
import Confetti from "../components/Confetti"
import Waves from "../components/Waves"

const Contact = () => {

   const { RiveComponent } = useRive({
      src: "/pup.riv",
      stateMachines: "Pup",
      autoplay: true
  })

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
         className="bg-slate-600 overflow-y-hidden"
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
         <Waves className="w-full absolute bottom-0 z-0" />
      </PageWrapper>
   )
}

export default Contact