import styles from "./contactme.module.scss";
import { useRef } from "react";

export default function Contactme() {
  let contactme = useRef();
  return (
    <div className={styles.contactme_Container}>
      <form  id="contact"  action="" className="contactme">
        <h1>
         
          <div  className={styles.get}>
          <span>G</span>
          <span>E</span>
          <span>T</span> 
          </div>
          <div className={styles.in}>
          <span>I</span>
          <span>N</span> 
          </div>
          <div className={styles.touch}>
          <span>T</span>
          <span>O</span>
          <span>U</span>
          <span>C</span>
          <span>H</span>
          </div>
        
        </h1>
        <div className={styles.nameandcontact}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder=" Your Contact Number" />
        </div>
        <input type="text" placeholder=" Your email Address" />
        <textarea
          type="text"
          name=""
          id="message"
          cols="30"
          rows="10"
          placeholder=" Enter your message !"
        ></textarea>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button type="submit">
            {" "}
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
