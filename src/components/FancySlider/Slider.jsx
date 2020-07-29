import React from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'
import netflix from '../../images/netflix.png'
import localhost_8080_ from '../../images/localhost_8080_.png'

function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={netflix} className="d-block w-100 carouselInner-image" alt="..." />
                <div className="background-darker"></div>
                <div className="carousel-caption d-md-block">
                    <img className="captionImage" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""/>
                    <h6>Netflix clone. Originality? 0. Precision? 100%</h6>
                    <div className="buttons-container m-3">
                        <a href="https://netflix-clone-93b61.web.app/" className="btn btn-primary slider-button mr-2" target="_blank" rel="noopener noreferrer">Description</a>
                        <Link className="btn btn-secondary slider-button" to="/">Web</Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <img src={netflix} className="d-block w-100 carouselInner-image" alt="..." />
            <div className="background-darker"></div>
            <div className="carousel-caption  d-md-block">
            <img className="captionImage" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""/>
                <h6>Netflix clone. Originality? 0. Precision? 100%</h6>
                <div className="buttons-container m-3">
                    <a href="https://netflix-clone-93b61.web.app/" className="btn btn-primary slider-button mr-2" target="_blank" rel="noopener noreferrer">Description</a>
                    <Link className="btn btn-secondary slider-button" to="/">Web</Link>
                </div>
            </div>
            </div>
            <div className="carousel-item">
            <img src={netflix} className="d-block w-100 carouselInner-image" alt="..." />
            <div className="background-darker"></div>
            <div className="carousel-caption d-md-block">
            <img className="captionImage" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""/>
                <h6>Netflix clone. Originality? 0. Precision? 100%</h6>
                <div className="buttons-container m-3">
                    <a href="https://netflix-clone-93b61.web.app/" className="btn btn-primary slider-button mr-2" target="_blank" rel="noopener noreferrer">Description</a>
                    <Link className="btn btn-secondary slider-button" to="/">Web</Link>
                </div>
            </div>
            </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon control-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon control-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider
