import Aside from "../shared/aside/aside";
import React, { useEffect, useRef } from "react";

import Start from "./sections/Start";
import About from "./sections/About";
import Skills from "./sections/skills";
import Curriculum from "./sections/Curriculum";
import Portfolio from "./sections/portfolio";
import Contacts from "./sections/Contacts";
import "./mainPage.style.css";

export default function MainPage() {
  const mainRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollAnimation();
    });
  });

  function scrollAnimation() {
    const items = mainRef.current.querySelectorAll("[data-anime]");
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    items.forEach((e) => {
      if (windowTop > e.offsetTop) {
        e.classList.add("animate");
      } else {
        e.classList.remove("animate");
      }
    });
  }

  return (
    <React.StrictMode>
      <Aside />
      <main id="main" ref={mainRef}>
        <Start />
        <About />
        <Skills />
        <Curriculum />
        <Portfolio />
        <Contacts />
      </main>
    </React.StrictMode>
  );
}
