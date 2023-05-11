import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const Sidebar = ({ openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar bg-gray-900 ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo border-gray-800">
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
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav className="mt-15">
                  <ul className="mobile-menu font-heading">
                    <li
                      className={"has-children active"}
                      onClick={() => handleToggle(1)}
                    >
                      <Link href="/home">Нүүр</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className=" mb-0 align-center mt-30">
                <a
                  href="https://apps.apple.com/us/app/sedu/id6446701380"
                  target="_blank"
                >
                  <span className="text-white">
                    Хэрэв танд IOS үйлдлын системтэй утас, таблет байгаа бол
                    татах
                  </span>
                  <img alt="GenZ" src="/assets/appstore.png" />
                </a>
              </div>
              <div className="mobile-account border-gray-800">
                <ul className="mobile-menu">
                  <li>
                    <Link
                      href="/"
                      onClick={() => localStorage.removeItem("token")}
                    >
                      Гарах
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="site-copyright color-gray-400 mt-10">
                Copyright 2022 © Sedu.mn.
                <br />
                Үйлчилгээний нөхцөл
                <span onClick={() => Router.replace("privacy-policy")}>
                  &nbsp; үзэх
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
