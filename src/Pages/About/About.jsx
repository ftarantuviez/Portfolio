import React, {useState} from 'react'
import './About.css'
import man from '../../images/man.png'
import Icon from 'react-icons-kit'
import {books} from 'react-icons-kit/icomoon/books'
import {ic_computer} from 'react-icons-kit/md/ic_computer'
import {iosFootball} from 'react-icons-kit/ionicons/iosFootball'
import {iosFlask} from 'react-icons-kit/ionicons/iosFlask'
import {law} from 'react-icons-kit/oct/law'
import {u1F4C8 as trendBusiness} from 'react-icons-kit/noto_emoji_regular/u1F4C8'

function About() {

    const cardHobbie = (dataTextHobbie, iconHobbie, descriptionHobbie, buttonHobbie) => {
        return(
            <div className="card-hobbie">
                <div className="imgBx-hobbie" data-text={dataTextHobbie} >
                    <Icon icon={iconHobbie} size={130} />
                </div>
                <div className="content-cardHobbie">
                    <div>
                        <h3>{dataTextHobbie}</h3>
                        <p>{descriptionHobbie}</p>
                        <a href="#" className="readMore-about">{buttonHobbie}</a>
                    </div>
                </div>
            </div>
        )
    }

    const [listClassName, setListClassName] = useState(false)

    const handleClick = () => {
        setListClassName(!listClassName)
    }

    return (
        <>
        <div className="about__container about__container2">
        <h2>More about me</h2>
            <div className="about__container-text col-12 col-md-7">
                <div className="answer">
                    <h4>Where I learned code?</h4>
                    <p>
                        Three are the principals fonts of my knowledge in my career:
                    </p>
                    <ul className="knowledgeList">
                        <li><a target="_blank" href="https://www.platzi.com">Platzi </a>, famous platform of online learning</li>
                        <li>Books (click in "Books" to see which one) </li>
                        <li>Official documentation of the technologies themselves </li>
                    </ul>
                </div>
                <div className="answer">
                    <h4>Why I learned code?</h4>
                    <p>The answer to this question have origin in my passion for maths, technology, and science at all. Programming is a great way to combine it.</p>
                </div>
            </div>
            <div className="about__container-photo col-12 col-md-5">
                <img src={man} alt=""/>
            </div>

            <div className="stickAbout" id="s-1"></div>
            <div className="ballAbout" id="ba-1"></div>
            <div className="stickAbout" id="s-2"></div>
        </div>
        <div className="about__container about__container1">
            <div className="about__container-dropdown col-12 col-md-5">
                <div>
                    <button onClick={handleClick}>Click here</button>
                    <ul className={`${listClassName ? 'buttonActiveCV' : ''}`}>
                        <li><a href="#">Curriculum Vitae</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">And here?</a></li>
                        <li><a href="#">Heree</a></li>
                    </ul>

                </div>
            </div>
            <div className="about__container-text col-12 col-md-7">
                <div className="answer">
                    <h4>I enjoy...</h4>
                    <p>
                        Read as first answer, code as second and as third but not the last: do sports. However, hobbie's list is under this section. You can see it!
                    </p>
                </div>
                <div className="answer">
                    <h4>If we talk about dreams...</h4>
                    <p>I prefer call them as goals. Dreams only lives in the mind, instead, goals, are in the mind, in daily actions, and most important: in your agenda.</p>
                </div>
            </div>

            <div className="stickAbout" id="s-3"></div>
            <div className="ballAbout" id="ba-2"></div>
            <div className="stickAbout" id="s-4"></div>

            <div className="stickAbout" id="s-5"></div>
            <div className="ballAbout" id="ba-3"></div>
            <div className="stickAbout" id="s-6"></div>
        </div>

        <div className="about__container about__container4">
            <h2>Hobbies</h2>
            {cardHobbie("Read", books, "Scientific disclosure, business management and science fiction are the genres I enjoy reading the most.", "Recommend me book")}
            {cardHobbie("Code", ic_computer, "Create technologies is without a doubt one of my favorites hobbies", "Code together")}
            {cardHobbie("Sports", iosFootball, "Healthy body, healthy mind. Kick boxing, crossfit, football are some of the last sports that I have practiced", "Favorite sport?")}
            {cardHobbie("Science", iosFlask, "Numbers which describe who we are, where we come from and even where we go. Science is fascinanting.", "Science news?")}
            {cardHobbie("Law", law, "The great power of justice. The limbo between the ethical and the dishonest. Law won a place in my tastes long ago.", "Do you like law?")}
            {cardHobbie("Business", trendBusiness, "Financial statements, cash flow, numbers applied to money. Undoubtedly analyzing a company from its \"organs\" is incredible.", "Do you invest?")}
        </div>
        </>
    )
}

export default About
