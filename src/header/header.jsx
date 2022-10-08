import classes from "./header.module.scss";
import { FiMenu, FiX } from "react-icons/fi";
import im from "../images/logofor.png";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  const [nav, turnnav] = useState(true);
  return (
    <div className={classes.gfg}>
      <div className={classes.gfg__icon_wrapper}>
        <a href="https://github.com/Varunmnx">
          {" "}
          <img src={im} alt="header_logo" className={classes.gfg__icon} />
        </a>
        {nav ? (
          <FiMenu
            onClick={() => turnnav((nav) => !nav)}
            className={classes.gfg__ham}
            size="3rem"
          />
        ) : (
          <FiX
            onClick={() => turnnav((nav) => !nav)}
            className={classes.gfg__ham}
            size="3rem"
          />
        )}
      </div>

      <div
        className={
          nav ? classes.gfg__navigators : classes.gfg__navigators__clicked
        }
      >
        <li>
          <Link smooth to="/#about" id="links">About </Link>
        </li>
        <li>
          <Link smooth to="/#projects" id="links">Projects </Link>
        </li>
        <li>
          <Link smooth to="/#contact" id="links">
            Contact{" "}
          </Link>
        </li>
        <li>
        
        <Link smooth to="/#support" id="links">Support</Link> 
        </li>
      </div>
    </div>
  );
}
