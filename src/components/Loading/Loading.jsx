import React from 'react'
import "./Loading.css"

function Loading() {
    return (
        <div className="fluid-container loader-container">
            <div className="loader">
                <div className="face face1">
                    <div className="circleLoader"></div>
                </div>
                <div className="face face2">
                    <div className="circleLoader"></div>
                </div>
            </div>
        </div>
    )
}

export default Loading
