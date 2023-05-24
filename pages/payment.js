import React, { useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Typewriter from "typewriter-effect";
import SwitchButton from "../components/elements/SwitchButton";
import PrivacyButton from "../components/elements/PrivacyButton";
import Router from "next/router";
import axios from "axios";
import useSwr from "swr";
const payment = () => {
  if (typeof window !== "undefined") {
    const [openClass, setOpenClass] = useState("");
    const [error, setError] = useState("");
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const handleOpen = () => {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
    };
    const authMe = () =>
      axios.get("https://seduback.com/api/v1/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

    const { data } = useSwr("/users/me", authMe);
    const handleRemove = () => {
      if (openClass === "sidebar-visible") {
        setOpenClass("");
        document.body.classList.remove("mobile-menu-active");
      }
    };
    const [isChecked, setIsChecked] = useState(false);

    function handleChange() {
      setIsChecked(!isChecked);
    }

    const onClick = () => {
      if (!isChecked) {
        setError("Үйлчилгээний нөхцөл зөвшөөрнө үү?");
      }
      axios
        .post(
          `https://seduback.com/api/v1/users/invoice/${data?.data.data._id}`,
          {
            amount: 20000,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          Router.replace(`/qpay/${res?.data.data}`);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <>
        {openClass && <div className="body-overlay-1" onClick={handleRemove} />}

        <Header
          handleOpen={handleOpen}
          handleRemove={handleRemove}
          openClass={openClass}
        />
        <Sidebar openClass={openClass} />
        <main className="main">
          <div className="banner banner-home3 bg-gray-850">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-xl-1" />
                <div className="col-xl-10 col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 pt-100">
                      <span className="text-sm-bold color-gray-600 wow animate__animated animate__fadeInUp ">
                        Sedu үйлчилгээний{" "}
                        <span className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
                          3 сарын эрх
                        </span>{" "}
                      </span>

                      <h2 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
                        <Typewriter
                          options={{
                            wrapperClassName: "typewrite color-linear",
                            strings: ["Sedu", "Sex education"],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </h2>
                      <div className="row">
                        <div className="col-lg-9">
                          <p className="text-justify color-gray-600 wow animate__animated animate__fadeInUp ">
                            Нэг төлөөд нүүр хуудасны бүх нийтлэл 3 сарын турш
                            үзэх боломжтой
                          </p>
                          <h5 className="text-decoration-line-through color-gray-50 wow animate__animated animate__fadeInUp">
                            60,000 ₮
                          </h5>
                          <h4 className=" color-gray-50 wow animate__animated animate__fadeInUp">
                            20,000 ₮ / 3 сар
                          </h4>
                        </div>
                      </div>
                      <div class="form-check wow animate__animated animate__fadeInUp">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          checked={isChecked}
                          onChange={handleChange}
                          onClick={handleChange}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Үйлчилгээний нөхцөл{" "}
                          <span
                            className="text-primary"
                            onClick={() => Router.replace("privacy-policy")}
                          >
                            зөвшөөрөх
                          </span>
                        </label>
                      </div>
                      {!isChecked && error && (
                        <h5 className="text-danger">{error}</h5>
                      )}
                      <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                        <button
                          className={`btn ${
                            isChecked ? `btn-linear` : `btn-border-linear`
                          } btn-arrow-right`}
                          onClick={onClick}
                        >
                          Худалдан авах
                          <i className="fi-rr-arrow-small-right" />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="banner-img no-bg">
                        <div className="banner-1 shape-1">
                          <img
                            src="/assets/imgs/template/nobglogo.png"
                            alt="Genz"
                          />
                        </div>
                        {/* <div className="banner-2 shape-2">
                              <img
                                src="/assets/imgs/page/about/img15.png"
                                alt="Genz"
                              />
                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};

export default payment;
