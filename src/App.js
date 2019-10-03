import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import Main from './components/Main'
import Arena from './components/Arena'
import Staging from './components/Staging'

import './css/app.css'
import './css/grid.css'

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Router>
          <Route exact path='/' component={ Main } />
          <Route exact path='/fight' component={ Arena } />
          <Route exact path='/staging' component={ Staging } /> 
        </Router>
      </div>
    </Provider>
  )
}

export default App