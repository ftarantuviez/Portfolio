import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './GlobalStyles.css'

import { Layaout } from './components/Layaout/Layaout';
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'
import Project from './Pages/Project/Project'
import Error from './Pages/Error/Error'

class App extends Component{

    render()
    {
        const urlParams = new URLSearchParams(window.location.search)
        const projectId = urlParams.get('project')
        return(
            <>
        
               <Router>
                    <Layaout>
                        <Switch>
                            <Route exact path="/"> <Home /> </Route>
                            <Route exact path="/contact"> <Contact /> </Route>
                            <Route exact path="/portfolio"> <Portfolio /> </Route>
                            <Route exact path="/about"> <About /> </Route>
                            <Route exact path="/project/:id"> <Project /> </Route>
                            <Route component={Error} />
                        </Switch>
                    </Layaout>
               </Router>
            </>
        )
    }
}


export default App;