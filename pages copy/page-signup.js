import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";

export default function Home() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <>
      <Head>
        <title>Sedu - Бүртгэл</title>
      </Head>
      <div className="cover-home3">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="text-center mt-50 pb-50">
                <h2 className="color-linear d-inline-block">Бүртгүүлэх</h2>
              </div>
              <div className="box-form-login pb-50">
                <div className="form-login bg-gray-850 border-gray-800 text-start">
                  <form action="#">
                    <div className="form-group">
                      <input
                        className="form-control bg-gray-850 border-gray-800"
                        type="text"
                        placeholder="Full name"
                      />
                    </div>
                    <div className="form-group position-relative">
                      <input
                        className="form-control bg-gray-850 border-gray-800 password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Password"
                      />
                      <span
                        className="viewpass"
                        onClick={togglePasswordVisiblity}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <input
                        className="form-control bg-gray-850 border-gray-800 password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Confirm password"
                      />
                      <span
                        className="viewpass"
                        onClick={togglePasswordVisiblity}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-linear color-gray-850 hover-up"
                        type="submit"
                      >
                        Бүртгэл үүсгэх
                      </button>
                    </div>
                    <div className="form-group mb-0">
                      <span>Хэрэв танд бүртгэл байгаа бол</span>
                      <Link className="color-linear" href="/">
                        {" "}
                        Нэвтрэх
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
