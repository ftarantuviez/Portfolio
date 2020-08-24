import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Slider.css'


function Slider() {

    const [loaded, setLoaded] = useState(false)

    const handleLoad = (e) => {
        e.target.src = e.target.name
        setLoaded(true)
    }

    const URL_preloader = 'https://i.pinimg.com/originals/e3/f6/2f/e3f62f9caff119965b4f54aae69f9eb3.gif'

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={URL_preloader} onLoad={handleLoad} name="https://i.ibb.co/CJJmcRP/covidtracker-4b8be-web-app-min.png" className="d-block w-100 carouselInner-image" alt="Covid Tracker | React App" />
                {loaded && (
                    <>
                <div className="background-darker"></div>
                <div className="carousel-caption d-md-block">
                    <h1>COVID-19 TRACKER</h1>
                    <h6>Maps, graphs, and real data. Follow the statistics of the Covid!</h6>
                    <div className="buttons-container m-3">
                        <a href="https://covidtracker-4b8be.web.app/" className="btn btn-secondary slider-button mr-2" target="_blank" rel="noopener noreferrer">Web</a>
                        <Link className="btn btn-primary slider-button" to="/project/covid-tracker">Description</Link>
                    </div>
                </div>
                </>)}
            </div>
            <div className="carousel-item">
            <img src={URL_preloader} onLoad={handleLoad} name="https://i.ibb.co/K9t0chq/voice-controlled-news-web-app-min.png" className="d-block w-100 carouselInner-image" alt="Voice Controlled | React App" />
                {
                    loaded &&<>
                        <div className="background-darker"></div>
                        <div className="carousel-caption  d-md-block">
                        <img className="captionImage-instagram" src="https://alan.app/voice/images/previews/preview.jpg" alt="Voice controller image"/>
                            <h6>Speak with Artificial Intelligence. Ask to Alan about the latest news.</h6>
                            <div className="buttons-container m-3">
                                <a href="https://voice-controlled-news.web.app/" className="btn btn-secondary slider-button mr-2" target="_blank" rel="noopener noreferrer">Web</a>
                                <Link className="btn btn-primary slider-button" to="/project/voice-controlled">Description</Link>
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className="carousel-item">
            <img src={URL_preloader} onLoad={handleLoad} name="https://i.ibb.co/GdrDmJ2/netflix-clone-93b61-web-app-1-min.png" className="d-block w-100 carouselInner-image" alt="Netflix Clone | React App" />
            {loaded && <>
            <div className="background-darker"></div>
            <div className="carousel-caption d-md-block">
            <img className="captionImage" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""/>
                <h6>Netflix clone. Originality? 0. Precision? 100%</h6>
                <div className="buttons-container m-3">
                    <a href="https://netflix-clone-93b61.web.app/" className="btn btn-secondary slider-button mr-2" target="_blank" rel="noopener noreferrer">Web</a>
                    <Link className="btn btn-primary slider-button" to="/project/netflix-clone">Description</Link>
                </div>
            </div>
            </>
            }
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
