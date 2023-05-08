import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import useSwr from "swr";
import axios from "axios";
import { format, isAfter, parseISO } from "date-fns";
import Typewriter from "typewriter-effect";
import Header from "../components/layout/Header";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
export default function Home() {
  if (typeof window !== "undefined") {
    const [openClass, setOpenClass] = useState("");

    const handleOpen = () => {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
    };

    const handleRemove = () => {
      if (openClass === "sidebar-visible") {
        setOpenClass("");
        document.body.classList.remove("mobile-menu-active");
      }
    };
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const currentTime = new Date();
    const fetcher = (url) =>
      axios.get("https://seduserver.com/api/v1/articles", {
        headers: { Authorization: `Bearer ${token}` },
      });
    const authMe = (url) =>
      axios.get("https://seduserver.com/api/v1/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

    const { data } = useSwr("/articles", fetcher);
    const { data: user } = useSwr("/users/me", authMe);
    const targetTime = parseISO(
      user?.data.data.deadline ? user?.data.data.deadline : ""
    );
    const isLessThanTargetTime = isAfter(currentTime, targetTime);
    return (
      <>
        <Head>
          <title>Нүүр</title>
        </Head>
        {isLessThanTargetTime ? (
          <>
            {openClass && (
              <div className="body-overlay-1" onClick={handleRemove} />
            )}

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
                                Нэг төлөөд нүүр хуудасны бүх нийтлэл 3 сарын
                                турш үзэх боломжтой
                              </p>
                              <h5 className="text-decoration-line-through color-gray-50 wow animate__animated animate__fadeInUp">
                                60,000 ₮
                              </h5>
                              <h4 className=" color-gray-50 wow animate__animated animate__fadeInUp">
                                20,000 ₮ / 3 сар
                              </h4>
                            </div>
                          </div>
                          <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                            <button
                              className="btn btn-linear btn-arrow-right"
                              data-toggle="modal"
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
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
        ) : (
          <Layout>
            <div className="cover-home1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-1" />
                  <div className="col-xl-10 col-lg-12">
                    <div className="banner banner-home2">
                      <div className="text-center">
                        <h6 className="color-gray-600">
                          Sedu - д тавтай морил
                        </h6>
                        <h1 className="color-white">
                          Монголын<span className="color-linear"> анхны </span>
                          бэлгийн боловсрол олгох
                          <span className="color-linear"> вэб</span>
                        </h1>
                      </div>
                    </div>
                    <div className="row mt-70">
                      {data?.data?.data.map((item) => {
                        return (
                          <div
                            className="col-lg-6 wow animate__animated animate__fadeIn"
                            data-wow-delay={0}
                          >
                            <div className="card-blog-1 hover-up">
                              <div className="card-image mb-20">
                                <Link href={`/blog/${item.id}`}>
                                  <img
                                    src={`https://seduserver.com/upload/${item.photo}`}
                                    alt="Genz"
                                  />
                                </Link>
                              </div>
                              <div className="card-info">
                                <div className="row">
                                  <div className="col-7">
                                    <a className="color-gray-700 text-sm"></a>
                                  </div>
                                  <div className="col-5 text-end">
                                    <span className="color-gray-700 text-sm timeread">
                                      {format(
                                        new Date(item.createdAt),
                                        "yyyy-MM-dd"
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <Link href={`/blog/${item.id}`}>
                                  <h4 className="color-white mt-20">
                                    {item.name}
                                  </h4>
                                </Link>
                                <div className="row align-items-center mt-25">
                                  <div className="col-7">
                                    <div className="box-author">
                                      {/* <img
                                      src="assets/imgs/page/homepage1/author.jpg"
                                      alt="Genz"
                                    />
                                    <div className="author-info">
                                      <h6 className="color-gray-700">Joseph</h6>
                                      <span className="color-gray-700 text-sm">
                                        25 April 2022
                                      </span>
                                    </div> */}
                                    </div>
                                  </div>
                                  <div className="col-5 text-end">
                                    <Link
                                      href={`/blog/${item.id}`}
                                      className="readmore color-gray-500 text-sm"
                                    >
                                      <span>Дэлгэрэнгүй үзэх</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* <div className="text-center">
                    <Link
                      className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                      href="#"
                    >
                      Үзэх
                      <i className="fi-rr-arrow-small-right" />
                    </Link>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
}
