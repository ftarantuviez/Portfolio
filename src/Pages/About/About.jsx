import React, {useState} from 'react'
import './About.css'
import man from '../../images/man.png'

import {CardHobbie} from '../../components/CardHobbie/CardHobbie'

import {books} from 'react-icons-kit/icomoon/books'
import {ic_computer} from 'react-icons-kit/md/ic_computer'
import {iosFootball} from 'react-icons-kit/ionicons/iosFootball'
import {iosFlask} from 'react-icons-kit/ionicons/iosFlask'
import {law} from 'react-icons-kit/oct/law'
import {u1F4C8 as trendBusiness} from 'react-icons-kit/noto_emoji_regular/u1F4C8'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function About() {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

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
                        <li> <strong onClick={handleOpen}>Books</strong> (click in "Books" to see which one) </li>
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
                    <button onClick={handleClick}>CV | RESUME</button>
                    <ul className={`${listClassName ? 'buttonActiveCV' : ''}`}>
                        <li><a href="#">Curriculum Vitae</a></li>
                        <li><a href="#">Resume</a></li>
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
            {CardHobbie("Read", books, "Scientific disclosure, business management and science fiction are the genres I enjoy reading the most.", "Recommend me book", "Here you can share with me your favorites books!")}
            {CardHobbie("Code", ic_computer, "Create technologies is without a doubt one of my favorites hobbies", "Code together", "Maybe we can code together. Do you have any idea? 🤔")}
            {CardHobbie("Sports", iosFootball, "Healthy body, healthy mind. Kick boxing, crossfit, football are some of the last sports that I have practiced", "Favorite sport?", "Sports are once of the most healthy hobbie! Do you play any sport?")}
            {CardHobbie("Science", iosFlask, "Numbers which describe who we are, where we come from and even where we go. Science is fascinanting.", "Science news?", "Science is advancing all the time. Any surprising news?")}
            {CardHobbie("Law", law, "The great power of justice. The limbo between the ethical and the dishonest. Law won a place in my tastes long ago.", "Do you like law?", "Different constitutions, different laws. What do you think about the justice of your country?")}
            {CardHobbie("Business", trendBusiness, "Financial statements, cash flow, numbers applied to money. Undoubtedly analyzing a company from its \"organs\" is incredible.", "Do you invest?", "It's not about having lots of money. It's knowing how to manage it.")}
        </div>


        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        {body}
      </Modal>
    </>
    )
}

export default About
