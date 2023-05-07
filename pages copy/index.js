import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
// import TrendingTopic from "../components/slider/TrendingTopic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Нүүр</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="banner banner-home2">
                  <div className="text-center">
                    <h6 className="color-gray-600">Sedu - д тавтай морил</h6>
                    <h1 className="color-white">
                      Монголын<span className="color-linear">анхны </span>
                      бэлгийн боловсролын
                      <br className="d-none d-lg-block" />
                      <span className="color-linear">программ</span>
                    </h1>
                  </div>
                  {/* <div className="text-center mt-50">
                    <ul className="list-tags-col-5 mb-50 text-center">
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag1.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Travel
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag2.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              {" "}
                              Culture
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag3.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Lifestyle
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag4.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Fashion
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag5.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Food
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.0s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag7.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Animal
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag8.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Minimal
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag9.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Interior
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="card-image">
                            <Link href="/blog-archive">
                              <img
                                src="assets/imgs/page/homepage1/tag10.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link
                              className="color-gray-500"
                              href="/blog-archive"
                            >
                              Plant
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                </div>
                <div className="row mt-70">
                  <div
                    className="col-lg-6 wow animate__animated animate__fadeIn"
                    data-wow-delay={0}
                  >
                    <div className="card-blog-1 hover-up">
                      <div className="card-image mb-20">
                        <Link className="post-type" href="/blog-archive" />
                        <Link href="/single-center">
                          <img
                            src="assets/imgs/page/homepage2/news3.png"
                            alt="Genz"
                          />
                        </Link>
                      </div>
                      <div className="card-info">
                        <div className="row">
                          <div className="col-7">
                            <Link
                              className="color-gray-700 text-sm"
                              href="/blog-archive"
                            >
                              #Travel
                            </Link>
                          </div>
                          <div className="col-5 text-end">
                            <span className="color-gray-700 text-sm timeread">
                              3 mins read
                            </span>
                          </div>
                        </div>
                        <Link href="/single-center">
                          <h4 className="color-white mt-20">
                            Are You Ready To Go Home After The Sunset View?
                          </h4>
                        </Link>
                        <div className="row align-items-center mt-25">
                          <div className="col-7">
                            <div className="box-author">
                              <img
                                src="assets/imgs/page/homepage1/author.jpg"
                                alt="Genz"
                              />
                              <div className="author-info">
                                <h6 className="color-gray-700">Joseph</h6>
                                <span className="color-gray-700 text-sm">
                                  25 April 2022
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-5 text-end">
                            <Link
                              className="readmore color-gray-500 text-sm"
                              href="/single-center"
                            >
                              <span>Дэлгэрэнгүй үзэх</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    className="btn btn-linear btn-load-more wow animate__animated animate__zoomIn"
                    href="#"
                  >
                    Үзэх
                    <i className="fi-rr-arrow-small-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
