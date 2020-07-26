import React, {Component} from 'react'
import Slider from '../../components/FancySlider/Slider'
import ListOfCards from '../../components/Cards/ListOfCards'
import './Portfolio.css'

class Portfolio extends Component {
    render(){
        return (
            <div className="bigWrapperPortfolio">
               <Slider />
               <h2 className="m-4">More Projects</h2> 
                <ListOfCards />
                <ListOfCards />
                <ListOfCards />
            </div>
        )}
}

export default Portfolio
