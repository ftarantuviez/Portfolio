import React, {useState, useEffect, useRef} from 'react'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

function NavBar() {
    
    const [navClassBackground, setNavClassBackground] = useState('navbar')
    const [toggleLogo, setToggleLogo] = useState('none')
    const [burgerMenuToggle, setBurgerMenuToggle] = useState(false)
    const [clickBurgerMenu, setClickBurgerMenu] = useState(false)

    const toggleTurnOn = pathName => {
        if(window.location.pathname === pathName) return 'fontTurnOn'
        else return ''
    }

    const handleClick = (e) => {
        setClickBurgerMenu(true)
        setBurgerMenuToggle(!burgerMenuToggle)
    }

    const handleLinkClick = e => {
        setBurgerMenuToggle(false)
    }

    useEffect(() =>{
        window.addEventListener('scroll', () => {
            const value = window.scrollY;
            if(window.location.pathname !== "/" && value > 50 && window.innerWidth > 768){
                setNavClassBackground('navbarSolidBackground')
                setToggleLogo('block')
                
                
            } else if(window.location.pathname === '/' && value > 1200 && window.innerWidth > 768){
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
            <div className={`navbar__links ${clickBurgerMenu ? burgerMenuToggle ? 'animationBurgerOn' : 'animationBurgerOff' : ''}`}>
                <ul className="navbar__linksList">
                    <li><Link onClick={handleLinkClick} className={toggleTurnOn('/')} to="/">Home</Link></li>
                    <li><Link onClick={handleLinkClick} className={toggleTurnOn('/about')} to="/about">About me</Link></li>
                    <li><Link onClick={handleLinkClick} className={toggleTurnOn('/portfolio')} to="/portfolio">Portfolio</Link></li>
                    <li><Link onClick={handleLinkClick} className={toggleTurnOn('/contact')} to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar__burger-menu" onClick={handleClick}>
                <div className="burger-menu__stick" id={`${burgerMenuToggle ? `bms-1` : ''}`} />
                <div className="burger-menu__stick" id={`${burgerMenuToggle ? `bms-2` : ''}`} />
                <div className="burger-menu__stick mb-0" id={`${burgerMenuToggle ? `bms-3` : ''}`} />
            </div>
        </div>
    )
}

export default NavBar
