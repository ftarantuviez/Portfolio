import React, {Component} from 'react'

import './Home.css'

import Logo from '../../components/Logo'
import WhoAmI from '../../components/whoamiSection/WhoAmI'
import {SkillsBar} from '../../components/SkillsBar/SkillsBar'
import { Link } from 'react-router-dom'
class Home extends Component{
    constructor(props){
        super(props) 
        this.scrollFunction = this.scrollFunction.bind(this)
        this.state = {
            scrollEffect: '',
            displayToggle: ''
        };
    }

    scrollFunction = () =>{
        const value = window.scrollY;
        this.setState({scrollEffect: value})
        if(value > 1300) this.setState({displayToggle: 'none'})
        else this.setState({displayToggle: 'block'})
    }

    componentDidMount = () =>{
        window.addEventListener('scroll', this.scrollFunction, true)
    }

    componentWillUnmount = () =>{
        window.removeEventListener('scroll', this.scrollFunction, true)
    }
    render(){


    return(
        <>
            <section style={{clipPath:`circle(${this.state.scrollEffect}px at center)`, display: `${this.state.displayToggle}`}} className="image-effect"></section>
           <div className="wrapperMain">
                <div className="container-effect">
                    <Logo widthsvg="200px" heightsvg="200px" />
                    <div className="text__container">
                    <div className="neon-wrapper">
                        <span className="txt">
                        Francisco <br /> Tarantuviez{" "}
                        </span>
                        <span className="gradient" />
                        <span className="dodge" />
                    </div>
                    <p className="frontend-engineer">Frontend Engineer </p>
                    </div>
                </div>
                <div className="stick gold" id="g-1"></div>
            </div>
            
            <WhoAmI />

            <div className="fluid-container skills-title-container">
                <h2>My skills</h2>
                <span><p>See others +</p></span>
            </div>
            
            <SkillsBar />

            <div className="booksProjects-container">
                <Link to="/portfolio">
                
                    <div className="booksProjects-book">
                        <div className="book-cover"></div>
                      <h2>Projects <span>Book</span> </h2>
                        <div className="book-credits">Written By <span><i>Francisco Tarantuviez</i></span></div>
                    </div>
                
                </Link>
            </div>
        </>
    )}
}

export default Home;
