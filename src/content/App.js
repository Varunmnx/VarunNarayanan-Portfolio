// import logo from './logo.svg';
import "./App.css";
import astro from "../images/readyfor.svg";
import Typewriter from "typewriter-effect";

// import man from "./images/man.png"
let App = () => {
  return (
    <div id="about" className="content_wrapper">
      <div className="content_wrapper">
        <div className="content_about">
          <div className="content_typeeffect">
            <div className="content_typeeffect_F">
              <span><span style={{color:"#ffff"}}>HELLO .</span>  HOW ARE YOU ?</span>
              <div className="typewriter">
                <Typewriter
                  options={{
                    loop: true,
                    autostart: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter

                      .typeString("HI,✌️")
                      .pauseFor(2000)
                      .typeString(" I AM VARUN NARAYANAN")
                      .pauseFor(2000)
                      .deleteChars(15)
                      .typeString("A WEB DEVELOPER ")
                      .pauseFor(1600)
                      .deleteChars(15)
                      .typeString(" SELF LEARNER ")
                      .pauseFor(3000)
                      .deleteChars(15)
                      .deleteAll()
                      .typeString(" HOW CAN I HELP YOU ? ")
                      .pauseFor(3000)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="content_logo">
            <div className="bounceme">
          <lottie-player
          autoplay
          mode="normal"
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_2gfeptkg.json"
        ></lottie-player>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
