import React from 'react';
import './about.css';
import ME from '../../assets/aboutme.png';

const About = () => {

  function opentab(event, tabname){
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for(var tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  return (
    <div id="about">
    <div className="container">
        <div className="row">
            <div className="about-col-1">
                <img src={ME} alt="logo"/>
            </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About <span>Me</span></h1>
                        <p className="text">
                            I specialize in Python <i className="fa-brands fa-python"></i> language and technologies such as Flask and Django. 
                            <br></br>My passion for programming allows me to constantly expand my qualifications and experience,<br/> 
                            as well as provide innovative solutions. 
                            <br></br>I am committed to creating high-quality, user-friendly applications <br/>that 
                            also deliver solutions for automating business processes. 
                            <br></br>I am ready to work in a dynamic environment and continuously develop my skills.
                        </p>
                        <div className="tab-titles">
                            <p className="tab-links active-link" onClick={(event) => opentab(event, 'Languages')}>Languages</p>
                            <p className="tab-links" onClick={(event) => opentab(event, 'Technologies')}>Technologies</p>
                            <p className="tab-links" onClick={(event) => opentab(event, 'Aplications')}>Applications</p>
                        </div>
                        <div className="tab-contents active-tab" id="Languages">
                            <ul>
                                <li><span>Python</span><br/></li>
                                <li><span>Javascript</span><br/></li>
                                <li><span>C++</span><br/></li>
                                <li><span></span><br/></li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="Technologies">
                            <ul>
                                <li><span>Flask</span><br/></li>
                                <li><span>Django</span><br/></li>
                                <li><span>HTML</span><br/></li>
                                <li><span>CSS</span><br/></li>
                            </ul>
                        </div>
                        <div className="tab-contents" id="Aplications">
                            <ul>
                                <li><span>Git</span><br/></li>
                                <li><span>Linux</span><br/></li>
                                <li><span>Github</span><br/></li>
                                <li><span>SQLite</span><br/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About