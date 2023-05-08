import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useHooks from "../context/useHooks";
import Router from "next/router";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [setToken] = useHooks();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const onSubmit = (data) => {
    axios
      .post(`http://143.198.90.131/api/v1/users/login`, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        Router.replace("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Sedu - Нэвтрэх</title>
      </Head>
      <div className="cover-home3">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <div className="text-center mt-50 pb-50">
                <h2 className="color-linear d-inline-block">Тавтай морил</h2>
              </div>
              <img
                className="logo-night mb-50"
                alt="GenZ"
                src="/assets/imgs/template/nobglogo.png"
              />
              <div className="box-form-login pb-50">
                <div className="form-login bg-gray-850 border-gray-800 text-start">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input
                        className="form-control bg-gray-850 border-gray-800"
                        type="text"
                        placeholder="Нэвтрэх нэр"
                        {...register("name", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="form-group position-relative">
                      <input
                        className="form-control bg-gray-850 border-gray-800 password"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Нууц үг"
                        {...register("password", {
                          required: true,
                        })}
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
                        Нэвтрэх
                      </button>
                    </div>
                    <div className="form-group mb-0">
                      <span>Хэрэв танд бүртгэл байхгүй бол?</span>
                      <Link className="color-linear" href="/page-signup">
                        {" "}
                        Бүртгүүлэх
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
