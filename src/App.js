import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Main from './components/Main'
import Arena from './components/Arena'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={ Main } />
        <Route exact path='/fight' component={ Arena } />
      </Router>
    </div>
  )
}

export default App
