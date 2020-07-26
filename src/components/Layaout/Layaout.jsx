import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Layaout.css'

export const Layaout = (props) => {
    return(
        <>
            <NavBar />
                {props.children}
            <Footer />
        </>
    )
}

