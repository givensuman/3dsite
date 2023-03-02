import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact />,
  }
])

function App() {
  return (
    <>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </>
  )
}

export default App
