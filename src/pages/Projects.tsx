import React, { Suspense, useState } from "react"
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, useGLTF, ContactShadows, OrbitControls } from '@react-three/drei'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import { motion } from "framer-motion"
import { Slide } from "react-awesome-reveal"
import { HiGlobeAlt, HiCodeBracket,  } from "react-icons/hi2"

import PageWrapper from "../components/PageWrapper"
import ProjectCard from "../components/ProjectCard"
import Laptop from "../components/Laptop"

import github_screenshot from "../assets/github.png"
import johnmulapi_screenshot from "../assets/johnmulapi.png"
import girlfriendeats_screenshot from "../assets/girlfriendeats.png"
import colorblindtheme_screenshot from "../assets/colorblindtheme.png"

import useWindowDimensions from '../hooks/useWindowDimensions';
import clsx from "clsx"

const Header: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => {
  return (
    <h3 className="text-4xl flex justify-center mb-4 font-semibold">
      {props.children}
    </h3>
  )
}

const projects = [
  {
    name: "Projects",
    description: [
      <p>You can find all my personal code repositories on GitHub. Feel free to reach out or leave a star if you check it out!</p>
    ],
    screenshot: github_screenshot,
    href: "https://github.com/givensuman",
    theme: "bg-gray-300",
  },
  {
    name: "johnmulapi",
    description: [
      <Header>An API for John Mulaney quotes.</Header>,
      <p>This project was one of my first, and was created on after finding <a href="https://kanye.rest" className="text-blue-600">kanye.rest</a>.</p>,
      <p>Initially it was built with an Express.js back-end with some custom middleware, and a vanilla HTML front-end page. It's been rebuilt a couple times since, and now uses the incredible power of Next.js to handle its back-end API, and ChakraUI to build its front-end.</p>
    ],
    screenshot: johnmulapi_screenshot,
    href: "https://johnmulapi.com",
    git: "https://github.com/givensuman/johnmulapi",
    theme: "bg-blue-300",
  },
  {
    name: "girlfriendeats",
    description: [
      <Header>An app for helping my girlfriend pick a place to eat</Header>
    ],
    screenshot: girlfriendeats_screenshot,
    href: "https://girlfriendeats.given.rocks",
    git: "https://github.com/givensuman/girlfriendeats",
    theme: "bg-[#DCD0FF]",
  },
  {
    name: "colorblind-theme",
    description: [<Header>Color-blind friendly syntax highlighting for VSCode</Header>],
    screenshot: colorblindtheme_screenshot,
    href: "https://colorblind-theme.netlify.app",
    git: "https://github.com/givensuman/colorblind-theme",
    theme: "bg-emerald-300",
  },
]

const Projects = () => {

  const dimensions = useWindowDimensions()

  const scale = Math.min(0.75, dimensions.width / 900)

  const [ index, setIndex ] = useState(2) 

  const incrementIndex = () => {
    setIndex(state => {
      if (state === projects.length - 1) {
        return 0
      } 
      return state + 1
    })
  }

  const decrementIndex = () => {
    setIndex(state => {
      if (state === 0) {
        return projects.length - 1
      }
      return state - 1
    })
  }

  return (
    <PageWrapper 
      animationKey="projects"
      className={clsx(
        "overflow-hidden flex flex-col items-center",
        projects[index].theme
      )}
    >
      <motion.div
        key={projects[index].name + "title"}
        className="absolute top-36 sm:top-32 md:top-24 xl:top-12"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
      >
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-200 font-bold"
          style={{
            textShadow: `
              2px 2px #1f2937,
              -2px 2px #1f2937,
              -2px -2px #1f2937,
              2px -2px #1f2937
            `
          }}
        >
          {projects[index].name}
        </h1>
      </motion.div>
      <Canvas 
        className="relative bottom-4 sm:bottom-0"
        camera={{ position: [-5, 0, -15], fov: 55 }}
        style={{
          height: dimensions.height,
          width: dimensions.width
        }}
      >
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
            <Laptop scale={[scale, scale, scale]}>
              <div 
                className="overflow-hidden rounded-sm"
                style={{
                  width: "335px",
                  height: "215px"
                }}
              >
                <a href={projects[index].href}>
                <motion.img
                  key={projects[index].name + "image"}
                  className="w-full h-full object-cover"
                  src={projects[index].screenshot}
                  alt={projects[index].name}
                  initial={{ x : 200 }}
                  animate={{ x : 0 }}
                />
                </a>
                <button 
                  className="absolute -left-14  bottom-20 text-3xl text-gray-800"
                  onClick={decrementIndex}
                >
                  <HiChevronLeft />
                </button>
                <button 
                  className="absolute -right-14 bottom-20 text-3xl text-gray-800"
                  onClick={incrementIndex}
                >
                  <HiChevronRight / >
                </button>
              </div>
            </Laptop>
          </group>
        </Suspense>
        <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>
      <div className="relative h-96 mx-auto max-w-2xl w-full">
      <div className="absolute text-gray-800 -top-96 sm:-top-64 md:-top-48 text-2xl flex flex-col px-6">
        {projects[index].description.map(item => (
          <Slide 
            duration={300}
            direction="right"
          >
            {item}
          </Slide>
        ))}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <Slide 
            duration={300}
            direction="left"
          >
            <button className="bg-gray-300 border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400/75 transition-colors flex items-center">
              <HiGlobeAlt className="mr-2" />
              Link
            </button>
          </Slide>
          <Slide
            duration={300}
            direction="right"
          >
            <button className="bg-gray-300 border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400/75 transition-colors flex items-center">
              <HiCodeBracket className="mr-2" />
              Code
            </button>
          </Slide>
        </div>
      </div>
      </div>
    </PageWrapper>
  )
}

export default Projects
