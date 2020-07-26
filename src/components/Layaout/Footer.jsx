import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2'
import {instagram} from 'react-icons-kit/fa/instagram'
import {github} from 'react-icons-kit/fa/github'
import {ic_email} from 'react-icons-kit/md/ic_email'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__iconMedia">
                <a href="https://twitter.com/ftarantuviez" target="_blank" className="footer__iconCercle t"><Icon icon={twitter} /></a>
                <a href="https://linkedin/in/francisco-tarantuviez-54a2881ab/" target="_blank" className="footer__iconCercle l"><Icon icon={linkedin2} /></a>
                <a href="https://github.com/ftarantuviez" target="_blank" className="footer__iconCercle g"><Icon icon={github} /></a>
                <a href="" target="_blank" className="footer__iconCercle e"><Icon icon={ic_email} /></a>
                <a href="https://instagram.com/ftarantuviez" target="_blank" className="footer__iconCercle i"><Icon icon={instagram} /></a>
            </div>
            <div className="footer__index">
                <ul className="footer__indexList">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__credits">
               <Link to="/#whoami"> © 2020 | Created by <strong>Francisco Tarantuviez (me)</strong> </Link>
            </div>
        </div>
    )
}

export default Footer
