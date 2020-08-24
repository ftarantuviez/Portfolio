import React, {useState} from 'react'
import './About.css'
import meAboutt from '../../images/meAboutt.png'


import {CardHobbie} from '../../components/CardHobbie/CardHobbie'

import {books} from 'react-icons-kit/icomoon/books'
import {ic_computer} from 'react-icons-kit/md/ic_computer'
import {iosFootball} from 'react-icons-kit/ionicons/iosFootball'
import {iosFlask} from 'react-icons-kit/ionicons/iosFlask'
import {law} from 'react-icons-kit/oct/law'
import {u1F4C8 as trendBusiness} from 'react-icons-kit/noto_emoji_regular/u1F4C8'



function About() {

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
                        <li> <strong data-toggle="modal" data-target="#exampleModal">Books</strong> (click in "Books" to see which one) </li>
                        <li>Official documentation of the technologies themselves </li>
                    </ul>
                </div>
                <div className="answer">
                    <h4>Why I learned code?</h4>
                    <p>The answer to this question have origin in my passion for maths, technology, and science at all. Programming is a great way to combine it.</p>
                </div>
            </div>
            <div className="about__container-photo col-12 col-md-5">
                <img src={meAboutt} alt=""/>
            </div>

            <div className="stickAbout" id="s-1"></div>
            <div className="ballAbout" id="ba-1"></div>
            <div className="stickAbout" id="s-2"></div>
        </div>
        <div className="about__container about__container1">
            <div className="about__container-dropdown col-12 col-md-5">
                <iframe src="https://docs.google.com/viewer?srcid=1kI5gFUg8uVPrDQ1DU36VUQdnGsvz7mJk&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="auto" height="400px"></iframe>
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
            {CardHobbie("Read", books, "Scientific disclosure, business management and science fiction are the genres I enjoy reading the most.", "Recommend me book", "Here you can share with me your favorites books!")}
            {CardHobbie("Code", ic_computer, "Create technologies is without a doubt one of my favorites hobbies", "Code together", "Maybe we can code together. Do you have any idea? 🤔")}
            {CardHobbie("Sports", iosFootball, "Healthy body, healthy mind. Kick boxing, crossfit, football are some of the last sports that I have practiced", "Favorite sport?", "Sports are once of the most healthy hobbie! Do you play any sport?")}
            {CardHobbie("Science", iosFlask, "Numbers which describe who we are, where we come from and even where we go. Science is fascinanting.", "Science news?", "Science is advancing all the time. Any surprising news?")}
            {CardHobbie("Law", law, "The great power of justice. The limbo between the ethical and the dishonest. Law won a place in my tastes long ago.", "Do you like law?", "Different constitutions, different laws. What do you think about the justice of your country?")}
            {CardHobbie("Business", trendBusiness, "Financial statements, cash flow, numbers applied to money. Undoubtedly analyzing a company from its \"organs\" is incredible.", "Do you invest?", "It's not about having lots of money. It's knowing how to manage it.")}
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">BOOKS | COURSES</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <h5 className="mb-3">Courses</h5>
            <ul className="mb-4">
                <li><a target="_blank" href="https://platzi.com/clases/frontend-developer/">Frontend developer course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/fundamentos-javascript/">Fundamentals of JavaScript</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/asincronismo-js/">Asynchronism with JavaScript</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/javascript-profesional/">Professional JavaScript course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/html5-css3/">Online web development course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/html-css/">HTML and CSS course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/css-grid-layout/">CSS Grid Layout course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/responsive-design/">Responsive Design course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/git-github/">Git and GitHub course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/sass/">Sass course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/bootstrap/">Bootstrap course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/animaciones-web/">Animations for Web course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/javascript-navegador/">JavaScript Engine (V8) and the browser</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/react/">React course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/webpack/">Webpack course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/npm/">Package and dependency managment NPM</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/react-router/">React Router course</a></li>
                <li><a target="_blank" href="https://platzi.com/clases/react-avanzado/">Advanced React Course</a></li>
            </ul>
            <h5 className="mb-3">Books and documentation</h5>
            <ul>
                <li><a href="https://eloquentjavascript.net/" target="_blank">Eloquent Javascript (Vanilla JS book)</a></li>
                <li><a href="https://books.goalkicker.com/ReactJSBook/" target="_blank">React, notes for proffesionals</a></li>
                <li><a href="http://www.fdi.ucm.es/profesor/luis/fp/FP.pdf" target="_blank">Algorithms and programming basics</a></li>
                <li><a href="https://reactjs.org/" target="_blank">React official documentation</a></li>
            </ul>
    </div>
    <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
    </div>
    </div>
  </div>
</div>

    </>
    ) 
}

export default About
