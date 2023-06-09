import Head from "next/head";
import useSwr, { mutate } from "swr";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
export default function Qpay() {
  if (typeof window !== "undefined") {
    let Router = useRouter();
    const { id } = Router.query;
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;

    const authMe = () =>
      axios.get("https://seduback.com/api/v1/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

    const { data: user } = useSwr("/users/me", authMe);

    const wallet = () =>
      axios.get(`https://seduback.com/api/v1/wallets/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

    const { data } = useSwr(`/wallets/${id}`, wallet);

    const onRefresh = useCallback((invoince) => {
      axios
        .get(
          `https://seduback.com/api/v1/users/check/challbacks/${invoince}/${user.data.data._id}`
        )
        .then((res) => {
          Router.replace("/confirm");
          mutate("/users/me");
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }, []);
    return (
      <>
        <Head>
          <title>Төлбөр төлөх</title>
        </Head>
        <div className="cover-home1s">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="banner">
                  <div className="row align-items-end">
                    <div className="col-lg-6 pt-100">
                      <h1 className="color-gray-50 mt-20 mb-20 wow animate__animated animate__fadeInUp">
                        Төлбөр төлөх
                      </h1>
                      <div className="box-subscriber mt-40 mb-50 wow animate__animated animate__fadeInUp">
                        <button
                          className="btn btn-linear btn-arrow-right"
                          onClick={() => onRefresh(data?.data.data.invoiceId)}
                        >
                          Төлбөр шалгах
                          <i className="fi-rr-arrow-small-right" />
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                        <img
                          src={`data:image/png;base64,${data?.data.data.qrImage}`}
                          alt="Genz"
                        />
                      </div>
                    </div>
                    <div className="row">
                      {data?.data.data.urls.map((item) => {
                        return (
                          <a
                            className="col-lg-2 wow animate__animated animate__fadeIn mt-50"
                            href={item.link}
                          >
                            <img
                              src={item.logo}
                              alt="Genz"
                              width={50}
                              height={50}
                            />
                            <p className="text-white">{item.name}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
