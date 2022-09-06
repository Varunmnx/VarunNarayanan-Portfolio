// import logo from './logo.svg';
import "./App.css";
import astro from "./images/astro.png";
import Typewriter from "typewriter-effect";

// import man from "./images/man.png"
let App = () => {
  return (
    <div className="content_wrapper">
      <div
        style={{
          height: "200vh",
          width: "100%",
          background: "white",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "400%", width: "60%", height: "500px" }}>
          <span>HI,</span> <br />
          <Typewriter
            options={{
              loop: true,
              autostart: true,
            }}
            onInit={(typewriter) => {
              typewriter

                .typeString("Hi,✌️")
                .pauseFor(2000)
                .deleteAll()
                .typeString("I am varun Narayanan")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Life ?  ...")
                .pauseFor(1600)
                .typeString("Web it is ")
                .typeString("🐗")
                .pauseFor(3000)
                .deleteChars(11)
                .typeString("👍")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
        <div  style ={{width: "40%", height: "500px"}} >
        <img
          style={{ paddingTop: "300px" }}
          className="bounceme"
          src={astro}
          alt="mylogo"
        />
        </div>
      </div>
    </div>
  );
};

export default App;
