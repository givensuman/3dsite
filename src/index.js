import React from 'react'
import ReactDOM from 'react-dom'
import { 
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './styles/index.css'

import App from './App'
import Square from './views/Square'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/2d' element={<Square />} />
      <Route path='/*' element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)
