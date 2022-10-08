import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./content/App";
import reportWebVitals from "./reportWebVitals";
import Header from "./header/header";
import Footer from "./footer/footer";
import Skills from "./skills/skills";
import { HashRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <HashRouter>
    <Header />
    <App />
    <Skills />
    <Footer />
  </HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
