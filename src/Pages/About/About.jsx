import React from 'react'
import './About.css'
import me from '../../images/me.jpg'
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

    return (
        <>
        <div className="about__container about__container2">
        <h2>More about me</h2>
            <div className="about__container-text col-7">
                <div className="answer">
                    <h4>Where I learned code?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                </div>
                <div className="answer">
                    <h4>Where I learned code?</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                </div>
            </div>
            <div className="about__container-photo col-5">
                <img src={me} alt=""/>
            </div>

            <div className="stickAbout" id="s-1"></div>
            <div className="ballAbout" id="ba-1"></div>
            <div className="stickAbout" id="s-2"></div>
        </div>
        <div className="about__container about__container1">
            <div className="about__container-photo col-5">
                    
                </div>
                <div className="about__container-text col-7">
                    <div className="answer">
                        <h4>Where I learned code?</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                    </div>
                    <div className="answer">
                        <h4>Where I learned code?</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque, quisquam at vero reprehenderit dolorum! Sapiente pariatur autem corporis? Aliquam incidunt nobis sunt quod, impedit dolores cupiditate unde dicta necessitatibus?</p>
                    </div>
                </div>

            <div className="stickAbout" id="s-3"></div>
            <div className="ballAbout" id="ba-2"></div>
            <div className="stickAbout" id="s-4"></div>

            <div className="stickAbout" id="s-5"></div>
            <div className="ballAbout" id="ba-3"></div>
            <div className="stickAbout" id="s-6"></div>


            <div className="ballAbout" id="ba-4"></div>
            <div className="ballAbout" id="ba-5"></div>
            <div className="ballAbout" id="ba-6"></div>
            <div className="ballAbout" id="ba-7"></div>
        </div>
        <div className="about__container about__container3">
            <div className="about__video-container">
                <div className="about__video-container-gray">
                    
                </div>
            </div>
        </div> 

        <div className="about__container about__container4">
            <h2>Hobbies</h2>
            {cardHobbie("Read", books, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Recommend book")}
            {cardHobbie("Code", ic_computer, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Code together")}
            {cardHobbie("Sports", iosFootball, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Favorite sport?")}
            {cardHobbie("Science", iosFlask, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Science news?")}
            {cardHobbie("Law", law, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Do you like law?")}
            {cardHobbie("Business", trendBusiness, "Here is an little description about the hobbie wich Im talking right now so here is reading", "Do you invest?")}
        </div>
        </>
    )
}

export default About
