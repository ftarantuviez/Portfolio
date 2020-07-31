import React, {useState} from "react";

import "./styles.css";

import reactIcon from '../../images/reactIcon.png'
import htmlCss from '../../images/htmlCss.png'
import tJs from '../../images/tJs.png'

export const SkillsBar = () => {
  let [clickOn, setClickOn] = useState(false)
  let [topOn, setTopOn] = useState('top')
  let [bottomOn, setBottomOn] = useState('bottom')
  let [buttonText, setButtonText] = useState('See all')
  
  const handleClick = () =>{
    
    setClickOn(!clickOn)
     if (clickOn) {
      setBottomOn('activeBottom')
      setTopOn('activeTop')
      setButtonText('See less')
    } else{
      setBottomOn('bottom')
      setTopOn('top')
      setButtonText('See all')
    }
  } 
  return (
    <>
    <div id="wrapper">
      <div id="content">
        <ul id="bar">
          <li id="react">
            <div className={topOn}>
            </div>
            <div className={bottomOn}>
              <div className="infobox">
                <h3>React</h3>
                <p>86,6%</p>
              </div>
            </div>
          </li>
          <li id="htmlCss">
            <div className={topOn}>
            </div>
            <div className={bottomOn}>
              <div className="infobox">
                <h3>
                  Html &<br /> Css
                </h3>
                <p id="htmlP">92.8%</p>
              </div>
            </div>
          </li>
          <li id="javascript">
            <div className={topOn}>
            </div>
            <div className={bottomOn}>
              <div className="infobox">
                <h3>JavaScript</h3>
                <p>84.0%</p>
              </div>
            </div>
          </li>
          <li id="swift">
            <div className={topOn}>
            </div>
            <div className={bottomOn}>
              <div className="infobox">
                <h3>Swift</h3>
                <p>44.2%</p>
              </div>
            </div>
          </li>
          <li id="adobexd">
            <div className={topOn}>
            </div>
            <div className={bottomOn}>
              <div className="infobox">
                <h3>Adobe XD</h3>
                <p>66.3%</p>
              </div>
            </div>
          </li> 
        </ul>
      </div>
    </div>
    <div className="fluid-container d-flex justify-content-center align-items-center p-3" style={{background: '#141414'}}>
      <button onClick={handleClick} className="btn btn-primary buttonSkills">{buttonText}</button> 
    </div>
    </>
  );
};
