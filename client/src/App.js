import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Nav from './components/common/Nav'
import HanqoutIndex from './components/hanqouts/HanqoutIndex.js'
import HanqoutShow from './components/hanqouts/HanqoutShow.js'
import Register from './components/auth/Register'
import Login from './components/auth/Login.js'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/hanqout/:id/">
          <HanqoutShow />
        </Route>
        <Route path="/hanqout/">
          <HanqoutIndex />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
