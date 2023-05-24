import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Router from "next/router";
import { isAfter, parseISO } from "date-fns";
import Banner from "../components/slider/Banner";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    getValues,
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const currentTime = new Date();
  const onSubmit = (data) => {
    axios
      .post(`https://seduback.com/api/v1/users/register`, data)
      .then((res) => {
        const targetTime = parseISO(
          res.data.user.deadline ? res.data.user.deadline : ""
        );
        if (isAfter(currentTime, targetTime)) {
          Router.replace("/payment");
        } else {
          Router.replace("/home");
        }
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        if (err.response) {
          setError("serverError", {
            type: err?.response.status || "",
          });
        }
      });
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
                        className={`form-control bg-gray-850 ${
                          errors.name ? "border-danger" : "border-gray-800"
                        }`}
                        type="text"
                        placeholder="Нэвтрэх нэр"
                        {...register("name", {
                          required: true,
                        })}
                      />
                      {errors?.name && (
                        <>
                          {errors.name.type === "required" ? (
                            <p className="text-danger">
                              Нэвтрэх нэр заавал оруулна уу
                            </p>
                          ) : (
                            <p className="text-danger">
                              Хамгийн доод талдаа 4 тэмдэгтээс тогтоно
                            </p>
                          )}
                        </>
                      )}
                    </div>
                    <div className="form-group position-relative">
                      <input
                        className={`form-control bg-gray-850 ${
                          errors.password ? "border-danger" : "border-gray-800"
                        }`}
                        type={passwordShown ? "text" : "password"}
                        placeholder="Нууц үг"
                        {...register("password", {
                          required: true,
                        })}
                      />
                      {errors?.password && (
                        <>
                          {errors.password.type === "required" ? (
                            <p className="text-danger">
                              Нууц үг заавал оруулна уу
                            </p>
                          ) : (
                            <p className="text-danger">
                              Хамгийн доод талдаа 4 тэмдэгтээс тогтоно
                            </p>
                          )}
                        </>
                      )}
                      <span
                        className="viewpass"
                        onClick={togglePasswordVisiblity}
                      />
                    </div>
                    {errors?.serverError && (
                      <p className="text-danger mb-20">
                        Бүртгэлтэй хэрэглэгч байна
                      </p>
                    )}
                    <div className="form-group position-relative">
                      <input
                        className={`form-control bg-gray-850 ${
                          errors.cpassword ? "border-danger" : "border-gray-800"
                        }`}
                        type={passwordShown ? "text" : "password"}
                        placeholder="Нууц үг баталгаажуулах"
                        {...register("cpassword", {
                          validate: (value) => {
                            const { password } = getValues();
                            return password === value || "Нууц үг тохирсонгүй";
                          },
                        })}
                      />
                      {errors?.cpassword && (
                        <>
                          <p className="text-danger">
                            Нууц үг хоорондоо таарахгүй байна
                          </p>
                        </>
                      )}
                      <span
                        className="viewpass"
                        onClick={togglePasswordVisiblity}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn btn-linear color-gray-850 hover-up"
                        type="submit"
                        onClick={() => clearErrors("serverError")}
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
                  <div className=" mb-0 align-center mt-10">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-50 ml-20 mr-20 ">
        <Banner />
      </div>
    </>
  );
}
