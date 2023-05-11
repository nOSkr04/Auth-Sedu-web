import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import useSwr from "swr";
import axios from "axios";
import { isAfter, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import Router from "next/router";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default function Home() {
  if (typeof window !== "undefined") {
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

    const { data, isLoading } = useSwr("/articles", fetcher);
    const { data: user } = useSwr("/users/me", authMe);

    const targetTime = parseISO(
      user?.data.data.deadline ? user?.data.data.deadline : ""
    );
    const isLessThanTargetTime = isAfter(currentTime, targetTime);
    useEffect(() => {
      if (isLessThanTargetTime) {
        Router.replace("/payment");
      }
    }, [isLoading]);

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
                                  {/* <span className="color-gray-700 text-sm timeread">
                                    {format(
                                      new Date(item.createdAt),
                                      "yyyy-MM-dd"
                                    )}
                                  </span> */}
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
      </>
    );
  }
}
