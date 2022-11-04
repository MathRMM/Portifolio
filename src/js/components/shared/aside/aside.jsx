import { useEffect, useRef, StrictMode } from "react";

import myPhoto from '../../../../images/myphoto.jpeg'
import "./aside.style.css";

export default function Aside() {
  const navList = useRef(null);
  const menuMobile = useRef(null);
  const header = useRef(null)

  useEffect(() => {
    handleClickNavMenuItems();
  });

  function handleClickNavMenuItems() {
    const navItems = navList.current.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const navItem = navList.current.querySelector(".nav-link.active");
        if (navItem !== null) {
          navItem.classList.remove("active");
          if(e.target.tagName === 'A'){
            return e.target.classList.add("active")
          }
          e.target.parentElement.classList.add("active");
        }
      });
    });
  }

  function handleClickNavMenuMobile() {
    if (menuMobile.current.classList.contains("bi-list")) {
      menuMobile.current.classList.replace("bi-list", "bi-x");
        header.current.classList.add('active')
    } else {
      menuMobile.current.classList.replace("bi-x", "bi-list");
      header.current.classList.remove('active')
    }
  }

  return (
    <StrictMode>
      <i
        id="nav-btn"
        className="bi bi-list"
        onClick={handleClickNavMenuMobile}
        ref={menuMobile}
      ></i>
      <aside id="header" className="" ref={header}>
        <section className="profile">
          <img src={myPhoto} alt="" />
          <h1>Matheus Melo</h1>
          <div className="social-links mt-4 text-center">
            <a target="_blank" href="https://github.com/MathRMM">
              <i className="bi bi-github"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/matheus-r-7a35ba9b/"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </section>
        <nav id="navbar" className="nav-menu">
          <ul className="nav flex-column" ref={navList}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#start">
                <i className="bi bi-house" aria-hidden="true"></i> Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">
                <i className="bi bi-person" aria-hidden="true"></i> Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#skills">
                <i className="bi bi-list-check" aria-hidden="true"></i>{" "}
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#curriculum">
                <i className="bi bi-file-earmark" aria-hidden="true"></i>{" "}
                currículo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#portfolio">
                <i className="bi bi-collection" aria-hidden="true"></i>{" "}
                Portifólio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contacts">
                <i className="bi bi-envelope" aria-hidden="true"></i> Contato
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </StrictMode>
  );
}
