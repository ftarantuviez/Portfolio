import React, {useState, useEffect} from 'react';

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
import Project from './Pages/Project/Project'
import Error from './Pages/Error/Error'

function App (){
    
    const projects = [{id: 'SpseHYhvMJ52HpsAokmg', pathName: 'voice-controlled'},{id: '51t0U32AFyClIzE3xMeR', pathName:"books-website"},{id: '2KXQStDKqysU8Pzox9U8', pathName:"weather-app"},{id: '6UoUcPETHsHJrTR2vvaa', pathName: 'instagram-clone'},{id: 'covid-tracker', pathName: 'covid-tracker'},{id: 'iznb5U6se79Ar0BSbldH', pathName:"messenger-clone"},{id: 'FgcYmpALscqhNEeessnf', pathName:"netflix-clone"},{id: 'rSPWDVF2hUJ4ftyTlJy3', pathName:"sort-of-youtube"},{id: 'HvXP5vK8icfGmN7BVqvE', pathName:"business-blog"},{id: '5nA2S47zY3MeSEn3ObTI', pathName:"blogger-website"},{id: 'gm3JBG60J78gRjThtBw4', pathName:"petgram"},{id: 'PvgpVJKC8YyZEi7ufOYx', pathName:"portfolio-website-1"},{id: 'JIkQkPGgcuNXH8xFTlrE', pathName:"portfolio-website-2"},{id: 'PpTaxaOp3c7SK6a6stmB', pathName:"expenses-tracker"},{id: 'B6fbtsGMNbISOLpSG4Zv', pathName:"tasks-app"},{id: 'YgIYz2bM9fYGinqBEu7K', pathName:"boring-video"},{id: 'ODzDlVEhwBsMJDKM8pn5', pathName:"count-down"},{id: 'GEneQu21saBZ23IzVD1g', pathName:"simon-says"},{id: 'HSmlxdCusxCIJT8EKBce', pathName:"music-app"},{id: 'o1HTCm41TxkMWOtkbWF4', pathName: "tiktok-clone"} ]

    return(
        <>
            <Router>
                <Layaout>
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route exact path="/contact"> <Contact /> </Route>
                        <Route exact path="/portfolio"> <Portfolio /> </Route>
                        <Route exact path="/about"> <About /> </Route>
                        {
                            projects.map(project => (
                                <Route exact key={project.id} path={`/project/${project.pathName}`}> <Project projectId={project.id} /> </Route>
                            ))
                        }
                        <Route component={Error} />
                    </Switch>
                </Layaout>
            </Router>
        </>
    )
    
}


export default App;
