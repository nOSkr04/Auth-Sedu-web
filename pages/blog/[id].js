import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import useSwr from "swr";
import axios from "axios";
import Head from "next/head";
import { isAfter, parseISO } from "date-fns";
import { useEffect } from "react";
import { getFromStorage } from "../../components/token";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://seduserver.com/api/v1/articles/${context.query.id}`
  );

  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

const BlogDetails = ({ data }) => {
  let Router = useRouter();
  const currentTime = new Date();
  const getUser = () => {
    axios
      .get("https://seduserver.com/api/v1/users/me", {
        headers: { Authorization: getFromStorage("token") },
      })
      .then((res) => {
        const genData = res.data.data;
        const targetTime = parseISO(genData.deadline);
        const isLessThanTargetTime = isAfter(currentTime, targetTime);
        if (isLessThanTargetTime) {
          Router.replace("/payment");
        }
      })
      .catch((err) => {
        Router.replace("/");
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Head>
        <title>{data.data.name}</title>
        <meta
          property="og:url"
          content={`https://www.sedu.mn${Router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.data.name} />
        <meta
          property="og:image"
          content={`https://seduserver.com/upload/${data.data.photo}`}
        />
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                <div className="pt-30 border-bottom border-gray-800 pb-20">
                  <div className="box-breadcrumbs">
                    <ul className="breadcrumb">
                      <li>
                        <Link className="home" href="/home">
                          Нүүр
                        </Link>
                      </li>
                      <li>
                        <span>{data.data.name}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row mt-50 align-items-end">
                  <div className="col-lg-8 m-auto text-center">
                    <h2 className="color-linear">{data.data.name}</h2>
                  </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-around mt-50">
                  <div className="image-detail mb-30">
                    <img
                      className="bdrd16"
                      src={`https://seduserver.com/upload/${data.data.photo}`}
                      alt="Genz"
                    />
                  </div>
                </div>
                <div className="row mt-30">
                  <div className="col-lg-8 m-auto">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.data.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogDetails;
