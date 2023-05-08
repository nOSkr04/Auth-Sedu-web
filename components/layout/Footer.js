import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-start">
                <p className="text-base color-white wow animate__animated animate__fadeIn">
                  © Үйлчилгээний нөхцөл
                  <Link
                    className="copyright"
                    href="http://alithemes.com"
                    target="_blank"
                  >
                    {" "}
                    үзэх
                  </Link>
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end">
                <div className="box-socials">
                  <div
                    className="d-inline-block wow animate__animated animate__fadeIn"
                    data-wow-delay=".4s"
                  >
                    <Link
                      className="icon-socials icon-insta color-gray-500"
                      href="https://www.instagram.com/seducationapp"
                    >
                      Instagram
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
