import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './GlobalStyles.css'

import { Layaout } from './components/Layaout/Layaout';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'


class App extends Component{

    render()
    {
        return(
            <>
               <Router>
                <Switch>
                   <Layaout>
                       <Route exact path="/"> <Home /> </Route>
                       <Route exact path="/contact"> <Contact /> </Route>
                       <Route exact path="/portfolio"> <Portfolio /> </Route>
                       <Route exact path="/about"> <About /> </Route>
                   </Layaout>
                </Switch>
               </Router>
            </>
        )
    }
}


export default App;