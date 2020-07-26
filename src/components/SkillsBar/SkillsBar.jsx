import React, {useState} from "react";

import "./styles.css";

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
    <div id="wrapper">
      <div id="content">
        <ul id="bar">
          <li id="react">
            <div className={topOn}>
              <img src="" alt="React" />
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
              <img src="" alt="Html" />
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
              <img src="" alt="JavaScript" />
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
              <img src="" alt="Swift" />
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
              <img src="" alt="Adobe XD" />
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

      <button onClick={handleClick} className="mt-3 btn btn-primary">{buttonText}</button> 
    </div>
  );
};
