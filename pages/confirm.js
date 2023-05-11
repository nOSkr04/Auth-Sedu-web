import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Confirm() {
  return (
    <>
      <Head>
        <title>Төлбөр амжилтай </title>
      </Head>
      <div className="cover-home3 shadow-page-404">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12 ml-auto mr-auto">
              <div className="box-page-404">
                <div className="text-center mb-150 mt-100">
                  <div className="box-404 row">
                    <div className="col-lg-6">
                      <div className="image-404">
                        <img
                          src="assets/imgs/page/login/security.svg"
                          alt="Genz"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="info-404 text-start mt-60">
                        <h2 className="color-linear mb-20">
                          Төлбөр амжилтай төлөгдлөө
                        </h2>
                        <p className="text-xl color-gray-500">
                          Танд үйлчилгээний хугацаа 3 сараар сунгагдлаа
                        </p>
                        <div className="mt-25">
                          <Link
                            className="btn btn-linear hover-up"
                            href="/home"
                          >
                            Нийтлэл үзэх
                          </Link>
                        </div>
                      </div>
                    </div>
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
