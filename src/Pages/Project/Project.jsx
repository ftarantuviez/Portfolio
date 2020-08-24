import React, {useState, useEffect} from 'react'
import './Project.css'
import db from '../../firebase'

import Loading from '../../components/Loading/Loading'
import Swal from 'sweetalert2'
import { Icon } from 'react-icons-kit'
import {github} from 'react-icons-kit/fa/github'

function Project({projectId}) {
    
    const [rangeValue, setRangeValue] = useState('0')
    const [loading, setLoading] = useState(true)
    const [projectInfo, setProjectInfo] = useState({})

    const handleChange = (e) => {
        setRangeValue(e.target.value)
    }

    useEffect(() => {
        setLoading(true)
        db
            .collection('/projects')
            .doc(projectId)
            .get()
            .then(doc => {
                const docData = doc.data()
                setProjectInfo(docData)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
                setLoading(false)
                Swal.fire({
                    title: "We're sorry. Something went wrong, please try again.",
                    icon: 'error'
                })
            })
    }, [])

    if(loading) return <Loading />;
    else return (
        <>
        {
            projectInfo.level === "EASY"
            ? <>
                <div className="fluid-container video__container">
                    <h2 className="title-project mb-4">{projectInfo.title}</h2>
                    <iframe className="project__video" src={projectInfo.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    {
                        projectInfo.github && <a href={projectInfo.github} className="mb-3" target="_blank"><Icon  size="32" icon={github} /></a>
                    }
                </div>
            </>
            : <> 
            <div className="fluid-container project__container">
                <h2 className="mt-4 title-project">{projectInfo.title}</h2>
                <img className="notebookImage" src={projectInfo.imagesDevices[Number(rangeValue)]} alt={projectInfo.title} />
                <input type="range" onChange={handleChange} min="0" max="2" value={rangeValue} id="slider" />
            </div>
            <section className="project__container2 fluid-container">
                <div className="row project-row" id="row1">
                    <div className={`project__container-imgBox ${projectInfo.level === 'HARD' ? 'col-12 col-md-6' : 'col-12'}`}>
                        <img src={projectInfo.imagesDevices[1]} alt=""/>
                    </div>
                    <div className={`project__container-content ${projectInfo.level === 'HARD' ? 'col-12 col-md-6' : 'd-none'} `}>
                        <h2>{projectInfo.firstTitle}</h2>
                        <p dangerouslySetInnerHTML={{__html: projectInfo.firstDescription}} />
                    </div>

                </div>
            </section>

            <section className="project__container2">
                <div className="row project-row" id="row2">
                    <div className={`project__container-content ${projectInfo.level === 'HARD' ? 'col-12 col-md-6' : 'd-none'}`}>
                        <h2>{projectInfo.secondTitle}</h2>
                        <p dangerouslySetInnerHTML={{__html: projectInfo.secondDescription}} />
                    </div>
                    <div className={`project__container-imgBox ${projectInfo.level === 'HARD' ? 'col-12 col-md-6' : 'col-12'}`}>
                        <img src={projectInfo.imagesDevices[2]} alt=""/>
                    </div>
                </div>
            </section>
            <div className="fluid-container video__container">
                {projectInfo.github && <a href={projectInfo.github} className="mb-3" style={{color: 'white'}} target="_blank"><Icon  size="32"  icon={github} /></a>}
                <iframe className="project__video" src={projectInfo.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </>
            
        }
        </>
    )
}

export default Project








