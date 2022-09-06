import classes from "./header.module.scss"
import {BiMenuAltRight} from "react-icons/bi"
import im from "./logofor.png"


export default function Header(){
    return(
        <div className={classes.gfg}>
            <div className={classes.gfg__icon_wrapper}>             
                 <img src={im} alt="header_logo" className={classes.gfg__icon}/>
            </div>

              <div className={classes.gfg__navigators}>
                <li>About</li>
                <li>Projects</li>
                <li>contact</li>
                <li>support</li>
                <div className={classes.gfg__ham}>
                <BiMenuAltRight size="3rem" />
                </div>
            </div>

        </div>
    )
}