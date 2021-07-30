import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home.js'
import Nav from './components/common/Nav'
import Register from './components/auth/Register'
import Login from './components/auth/Login.js'
import HanqoutIndex from './components/hanqouts/HanqoutIndex.js'
import HanqoutShow from './components/hanqouts/HanqoutShow.js'
import HanqoutNew from './components/hanqouts/HanqoutNew.js'
import HanqoutEdit from './components/hanqouts/HanqoutEdit.js'
import UserProfile from './components/hanqouts/UserProfile.js'


const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/hanqout/:id/edit/">
          <HanqoutEdit />
        </Route>
        <Route path="/hanqout/:id/new/">
          <HanqoutNew />
        </Route>
        <Route path="/hanqout/:id/">
          <HanqoutShow />
        </Route>
        <Route path="/hanqout/">
          <HanqoutIndex />
        </Route>
        <Route path="/profile/">
          <UserProfile />
        </Route>
        <Route path="/login/">
          <Login />
        </Route>
        <Route path="/register/">
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
