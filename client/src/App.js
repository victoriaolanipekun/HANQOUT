import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Nav from './components/common/Nav'
import HanqoutIndex from './components/hanqouts/HanqoutIndex.js'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/hanqouts">
          <HanqoutIndex />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


export default App
