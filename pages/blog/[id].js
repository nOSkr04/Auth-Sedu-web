import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import useSwr from "swr";
import axios from "axios";
import Head from "next/head";
const BlogDetails = () => {
  if (typeof window !== "undefined") {
    let Router = useRouter();
    const { id } = Router.query;
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    const fetcher = () =>
      axios.get(`http://143.198.90.131/api/v1/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

    const { data } = useSwr(`/articles/${id}`, fetcher);
    if (!data) {
      return null;
    }
    return (
      <>
        <Head>
          <title>Нийтлэл дэлгэрэнгүй</title>
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
                          <span>{data.data.data.name}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="row mt-50 align-items-end">
                    <div className="col-lg-8 m-auto text-center">
                      <h2 className="color-linear">{data.data.data.name}</h2>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-around mt-50">
                    <div className="image-detail mb-30">
                      <img
                        className="bdrd16"
                        src={`http://143.198.90.131/upload/${data.data.data.photo}`}
                        alt="Genz"
                      />
                    </div>
                  </div>
                  <div className="row mt-30">
                    <div className="col-lg-8 m-auto">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.data.data.description,
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
  }
};

export default BlogDetails;
