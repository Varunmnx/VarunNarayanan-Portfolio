import up from "../images/suppup1.svg";
import down from "../images/suppdown1.svg";
import avatar from "../images/Varunav.svg";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub, FaCoffee } from "react-icons/fa";
import styles from "./support.module.scss"
import { IconContext } from "react-icons";

export default function Support() {
  return (
    <div>
      <img alt="hakeiimage"  src={up} style={{ width: "100%" }} />
      <div id="support" className={styles.supportcontainer}>
        
        <img  alt="avatar" src={avatar} />
        <div
        className={styles.iconcontainer}
        >
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              style: { height: "50px", width: "50px",margin:"20px 20px 20px 20px " },
              className:"iconstyle"
            }}
          >
            <FiTwitter />
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              style: { height: "50px", width: "50px" ,margin:"20px 20px 20px 20px "},
              className:"iconstyle"

            }}
          >
           <a href="https://www.linkedin.com/in/varun-narayanan-74b653193/"> <FaLinkedin /></a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              style: { height: "50px", width: "50px",margin:"20px 20px 20px 20px " },
              className:"iconstyle"

            }}
          >
           <a href="https://www.instagram.com/varun_mnx/"> <FaInstagram /> </a>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              style: { height: "50px", width: "50px",margin:"20px 20px 20px 20px " },
              className:"iconstyle"

            }}
          >
           <a href="https://github.com/Varunmnx"> <FaGithub /></a> 
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              color: "#1DA1F2",
              style: { height: "50px", width: "50px" ,margin:"20px 20px 20px 20px "},
              className:"iconstyle"
            }}
          >
            <FaCoffee />
          </IconContext.Provider>
        </div>
      </div>
      <img alt="hakeiimage" src={down} style={{ width: "100%" }} />
    </div>
  );
}
