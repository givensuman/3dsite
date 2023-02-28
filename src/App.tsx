import MouseFollow from "./components/MouseFollow"
import About from "./pages/About"
import Home from "./pages/Home"

import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />
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
