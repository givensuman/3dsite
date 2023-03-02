import React from "react"
import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import type { StateMachineInput } from "@rive-app/react-canvas"

import PageWrapper from "../components/PageWrapper"
import ProjectCard from "../components/ProjectCard"

import johnmulapi_screenshot from "../assets/johnmulapi.png"
import girlfriendeats_screenshot from "../assets/girlfriendeats.png"
import colorblindtheme_screenshot from "../assets/colorblindtheme.png"
import clsx from "clsx"

const projects = [
  {
    name: "johnmulapi",
    description: "An API for John Mulaney quotes",
    screenshot: johnmulapi_screenshot,
    href: "johnmulapi.com",
    git: "https://github.com/givensuman/johnmulapi"
  },
  {
    name: "girlfriendeats",
    description: "An app for helping my girlfriend pick a place to eat",
    screenshot: girlfriendeats_screenshot,
    href: "girlfriendeats.given.rocks",
    git: "https://github.com/givensuman/girlfriendeats"
  },
  {
    name: "colorblind-theme",
    description: "Color-blind friendly syntax highlighting for VSCode",
    screenshot: colorblindtheme_screenshot,
    href: "",
    git: "https://github.com/givensuman/colorblind-theme"
  },
]

const Projects = () => {

  const { rive, RiveComponent } = useRive({
    src: "/guy.riv",
    stateMachines: "Guy",
    autoplay: true
  })

  let animateBreak = useStateMachineInput(rive, "Guy", "break") as StateMachineInput

  const toggle = () => {
    animateBreak.value = !animateBreak?.value
  }

  return (
    <PageWrapper 
      animationKey="projects"
      className="overflow-hidden bg-[#C34854] flex flex-col items-center"
    >
      <div 
        className="h-96 w-96 absolute bottom-0 right-0"
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh"
        }}
      >
          <RiveComponent />
      </div>
      <div className="mt-12">
        <ProjectCard 
          {...projects[0]}
        />
      </div>
    </PageWrapper>
  )
}

export default Projects
