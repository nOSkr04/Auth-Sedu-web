import Link from "next/link";
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
              <Link className="d-flex" href="/">
                <img
                  className="logo-night"
                  alt="GenZ"
                  src="assets/imgs/template/logo.svg"
                />
                <img
                  className="d-none logo-day"
                  alt="GenZ"
                  src="assets/imgs/template/logo-day.svg"
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
                      <Link href="/">Home</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account border-gray-800">
                <div className="mobile-header-top bg-gray-900">
                  <div className="user-account">
                    <Link href="/">
                      <img src="assets/imgs/template/ava.jpg" alt="GenZ" />
                    </Link>
                    <div className="content">
                      <h6 className="user-name color-white">
                        Hello<span className="color-white"> Steven !</span>
                      </h6>
                      <p className="font-xs text-muted">
                        You have 3 new messages
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mobile-menu">
                  <li>
                    <Link href="/">Sign out</Link>
                  </li>
                </ul>
              </div>
              <div className="site-copyright color-gray-400 mt-10">
                Copyright 2022 © Sedu.mn.
                <br />
                Үйлчилгээний нөхцөл
                <Link href="http://alithemes.com" target="_blank">
                  &nbsp; үзэх
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
