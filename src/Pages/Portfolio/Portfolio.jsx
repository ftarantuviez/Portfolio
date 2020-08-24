import React, {Component} from 'react'
import Slider from '../../components/FancySlider/Slider'
import ListOfCards from '../../components/Cards/ListOfCards'
import './Portfolio.css'
import Loading from '../../components/Loading/Loading'
import db from '../../firebase'

import {questionCircle} from 'react-icons-kit/fa/questionCircle'
import Icon from 'react-icons-kit'
import Tooltip from '@material-ui/core/Tooltip';

class Portfolio extends Component {

    state = {
        loading: true,
        error: false,
        contentProjects: []
    }

    componentDidMount = () => {
        db
            .collection('/projects')
            .onSnapshot(snapshot => {
                const dataProjects = snapshot.docs.map(doc => doc.data())
                this.setState({ contentProjects: [
                    dataProjects.filter(project => project.level === 'HARD'),
                    dataProjects.filter(project => project.level === 'MEDIUM'),
                    dataProjects.filter(project => project.level === 'EASY'),
                ], loading: false })
            })
    }

    

    render(){
        if(this.state.loading) return <Loading />
        else return (
            <div className="bigWrapperPortfolio">
               <Slider />
               <h2 className="m-4">More Projects</h2> 
                <ListOfCards titleLevelProjects="Complex projects" projectsInfo={this.state.contentProjects[0]} />
                <ListOfCards titleLevelProjects="Medium projects" projectsInfo={this.state.contentProjects[1]} />
                <ListOfCards titleLevelProjects="Simple projects" projectsInfo={this.state.contentProjects[2]} />
            </div>
        )}
}

export default Portfolio
