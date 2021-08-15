import React from "react"
import Navbar from "./Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Dashboard from "../Routers/Dashboard"
import About from "../Routers/About"
import Home from "../Routers/Home"
export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
