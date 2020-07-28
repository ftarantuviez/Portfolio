import React, {useState} from 'react'
import './Contact.css'
import { Icon } from 'react-icons-kit'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2'
import {instagram} from 'react-icons-kit/fa/instagram'
import {github} from 'react-icons-kit/fa/github'
import {whatsapp} from 'react-icons-kit/icomoon/whatsapp'

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [finalValue, setFinalValue] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const handleClick = (e) => {
        e.preventDefault();

        setFinalValue({
            name,
            email,
            message
        })

        console.log(finalValue)
    }

    return (
        <>
        <div className="fluid-container contact-container">
            <h2>Get in touch</h2>
            <form>
                <input className="inputContact for" type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Your name..." />
                <input className="inputContact for" type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Your email..." />
                <textarea className="textAreaContact for" placeholder="Your message" onChange={e => setMessage(e.target.value)} value={message} />
                <button className="buttonContact" type="submit" onClick={handleClick}>Send</button>
            </form>
            <h3>Or we can talk by...</h3>
        </div>
        <div className="fluid-container contact-container contact-container2 justify-content-center">
            <ul className="socialMediaList">
                <li><a target="_blank" href="https://github.com/ftarantuviez"><Icon size={32} icon={github} className="fa fa-github" aria-hidden="true" /></a></li>
                <li><a target="_blank" href="https://twitter.com/ftarantuviez"><Icon size={32} icon={twitter} className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a target="_blank" href="https://wa.me/5492615949911/?text=Hello, I found you on your website, franciscot.dev, I wanted ..."><Icon size={32} icon={whatsapp} className="fa fa-google-plus" aria-hidden="true" /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/francisco-tarantuviez-54a2881ab/"><Icon size={32} icon={linkedin2} className="fa fa-linkedin" aria-hidden="true" /></a></li>
                <li><a target="_blank" href="https://instagram.com/ftarantuviez"><Icon size={32} icon={instagram} className="fa fa-instagram" aria-hidden="true" /></a></li>
            </ul>                                                                                                                                                                           
        </div>
        </>
    )
}

export default Contact
