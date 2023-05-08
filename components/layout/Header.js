import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

import SwitchButton from "../elements/SwitchButton";

const Header = ({ handleOpen, handleRemove, openClass }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-logo">
              <Link className="d-flex" href="/home">
                <img
                  className="logo-night"
                  alt="GenZ"
                  src="/assets/imgs/template/nobglogo.png"
                />
                <img
                  className="d-none logo-day"
                  alt="GenZ"
                  src="/assets/imgs/template/nobglogo.png"
                />
              </Link>
            </div>
            <div className="header-nav">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li>
                    <Link className="active" href="/home">
                      Нүүр
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="header-right text-end">
              <SwitchButton />

              <Link
                className="btn btn-linear d-none d-sm-inline-block hover-up hover-shadow"
                href="/"
                onClick={() => localStorage.removeItem("token")}
              >
                Гарах
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
