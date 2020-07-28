import React, {useState, useEffect} from 'react'
import './Project.css'
import note from '../../images/note.png'
import note2 from '../../images/note2.png'

function Project({match}) {
    
    const [rangeValue, setRangeValue] = useState('0')
    const [loading, setLoading] = useState(false) 
    const images = [note, note2, note];

    const handleChange = (e) => {
        setRangeValue(e.target.value)
    }

    const handleLoad = (e) => {
        console.log(e.target)
    }

    if(loading) return 'loading';
    else return (
        <>
            <div className="fluid-container project__container">
                
                <img onLoad={handleLoad} src={images[Number(rangeValue)]} alt=""/>
                <input type="range" onChange={handleChange} min="0" max="2" value={rangeValue} id="slider" />
            </div>

        </>
    )
}

export default Project








