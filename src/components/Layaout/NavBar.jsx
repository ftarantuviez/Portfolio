import React, {useState, useEffect} from 'react'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

function NavBar() {
    
    const [navClassBackground, setNavClassBackground] = useState('navbar')
    const [toggleLogo, setToggleLogo] = useState('none')

    const toggleTurnOn = pathName => {
        if(window.location.pathname === pathName) return 'fontTurnOn'
        else return ''
    }

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            if(window.location.pathname !== "/" && value > 50){
                setNavClassBackground('navbarSolidBackground')
                setToggleLogo('block')
    
                
            } else if(window.location.pathname === '/' && value > 1200){
                setNavClassBackground('navbarSolidBackground')
                setToggleLogo('block')
            } else{
                setNavClassBackground('')
                setToggleLogo('none')
            }

        })
    }, [])


    return (
        <div className={`navbar ${navClassBackground}`}>
            <Link to="/" className="navbar__logo">
                    <Logo style={{display: `${toggleLogo}`}} widthsvg={45} heightsvg={45} />
                    <span><h1>FT</h1></span>
            </Link>
            <div className="navbar__links">
                <ul className="navbar__linksList">
                    <li><Link className={toggleTurnOn('/')} to="/">Home</Link></li>
                    <li><Link className={toggleTurnOn('/about')} to="/about">About me</Link></li>
                    <li><Link className={toggleTurnOn('/portfolio')} to="/portfolio">Portfolio</Link></li>
                    <li><Link className={toggleTurnOn('/contact')} to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
