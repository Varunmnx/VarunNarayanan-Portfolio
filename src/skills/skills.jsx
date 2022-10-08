import style from "./skills.module.scss";
import React from "react";
import { useState } from "react";
import { useRef, useEffect } from "react";
import blog from "../images/VarunDjango.png";
import breakingbad from "../images/VarunBreak.png";
import StompMe from "../images/VarunStompMe.png";
import Contact from "../images/VarunContact.png";
import FastApi from "../images/FastApiPro.png";
import SnakeGame from "../images/snakeGame.png";
import hakeiup from "../images/hakeiup.svg";
import hakeidown from "../images/hakeidown.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Skills() {
  let [cur, upcur] = useState(true);
  const rock = useRef();
  useEffect(() => {
    console.log("I am useEffect ", rock.current);
    let observer = new IntersectionObserver((entries) => {
      let visibility = entries[0];
      console.log(visibility.isIntersecting); //true or false
      upcur(visibility.isIntersecting);
    });
    if (rock.current) observer.observe(rock.current);
  }, []);
  return (
    <div>
      <img src={hakeiup} style={{ width: "100%" }} />
      <div id="projects" className={style.projectName}>
        {" "}
        <h1>
          {  cur? 
          <lottie-player
            autoplay
            mode="Bounce"
          
            src="https://assets10.lottiefiles.com/packages/lf20_pkanqwys.json"
            style={{ width: "100%",position:"absolute",left:"0",top:"0"}}
          > </lottie-player> : ""}
          
          PROJECTS{" "}
        </h1>{" "}

        <lottie-player
          autoplay
          mode="normal"
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_C0QBH09bFB.json"
          style={{ width: "320px" }}
        ></lottie-player>
      </div>
      <div>
        <div className={style.mainSkills}></div>
        <div
          ref={rock}
          className={`${style.rocket} ${cur ? style.animated : ""}`}
        >
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills"  className={style.skillsImage} src={blog} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                {" "}
                <a href="https://github.com/Varunmnx/blogging">
                  <span> Django Blog App </span>
                </a>{" "}
                <p>Made using Python, Django, Html, Css, JS</p>
              </div>
            </div>
          </div>
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills" className={style.skillsImage} src={breakingbad} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                <a href="https://replit.com/@Varunmnx/BreakingBad#src/App.jsx">
                  <span>Breaking Bad App</span>
                </a>{" "}
                <p>Made using React.js, Semantic UI, Custom Css ,Axios </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills" className={style.skillsImage} src={StompMe} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                <a href="https://github.com/Varunmnx/STOMPME/tree/master/studybud1/base">
                  <span>Stomp Me ( ChatRoom ) </span>{" "}
                </a>
                <p>Made using Python, Django, Html ,Css , JS </p>
              </div>
            </div>
          </div>
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills" className={style.skillsImage} src={Contact} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                <a href="https://replit.com/@Varunmnx/ContactForm#src/App.jsx">
                  <span>Contacts App</span>
                </a>
                <p>Made using React.js, Semantic UI, Custom Css</p>
              </div>
            </div>
          </div>
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills" className={style.skillsImage} src={FastApi} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                <a
                  href="https://github.com/Varunmnx/FastApis/blob/master/app/main.py"
                  alt="god why im even mentioning this ?"
                >
                  {" "}
                  <span> Social Media API (Mini)</span>{" "}
                </a>
                <p>Made using postgreSql, FastApi</p>
              </div>
            </div>
          </div>
          <div
            className={`${style.skillsContainer} ${
              cur ? style.skilladdon : ""
            }`}
          >
            <div className={style.insideSkill}>
              <img alt="skills" className={style.skillsImage} src={SnakeGame} />
              <div
                className={`${style.aboutskills} ${
                  cur ? style.aboutactive : ""
                }`}
              >
                <a href="https://github.com/Varunmnx/JavascriptSnake/tree/master/SnakeGame">
                  <span>Snake Game</span>
                </a>
                <p>Made using Html, Css, Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt="skills" src={hakeidown} style={{ width: "100%" }} />
    </div>
  );
}
