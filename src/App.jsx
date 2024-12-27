import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Success from './components/Success';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>

      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/success">
          <Success/>
        </Route>
      </Switch>

    </>
  )
}

export default App
