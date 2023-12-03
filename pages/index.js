import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import favicon from "../public/assets/img/brand/favicon.png";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "./api/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";

const LOGIN_URI = "/auth/login";

export default function Home() {
  useEffect(() => {
    if (document.body) {
      document
        .querySelector("body")
        .classList.add("ltr", "error-page1", "bg-primary");
    }

    if (
      localStorage.getItem("ACCESS_TOKEN") &&
      localStorage.getItem("ACCESS_ACCOUNT") &&
      localStorage.getItem("status")
    ) {
      localStorage.removeItem("ACCESS_TOKEN")
      localStorage.removeItem("ACCESS_ACCOUNT")
      localStorage.removeItem("status")
    }

    return () => {
      document.body.classList.remove("ltr", "error-page1", "bg-primary");
    };
  }, []);

  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  let navigate = useRouter();

  const routeChange = () => {
    let path = `/components/dashboards/dashboard1`;
    navigate.push(path);
  };

  const ReactLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(LOGIN_URI, JSON.stringify(data));

      if (response.data.data.accessToken) {
        toast.success("Connexion réussie ");

        localStorage.setItem("ACCESS_TOKEN", response.data.data.accessToken);

        setIsLoading(false);
        setTimeout(() => {
          routeChange();
        }, 2000);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Fikiri|Dashboard</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={favicon.src} />
      </Head>
      <Seo title={"Login"} />
      <div className="square-box">
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div>
      </div>

      <div className="page">
        <div className="page-single">
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
              >
                <div className="card-sigin">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
                        <Link href={`/components/dashboards/dashboard1/`}>
                          <img
                            src={"./assets/img/brand/favicon.png"}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          <h2>Se connecter</h2>
                          <h6 className="font-weight-semibold mb-4"></h6>
                          <div className="panel panel-primary">
                            <div className="tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <Form action="#">
                                  <Form.Group className="form-group">
                                    <Form.Label>Adresse Mail</Form.Label>{" "}
                                    <Form.Control
                                      className="form-control"
                                      placeholder="Votre adresse email"
                                      type="email"
                                      name="email"
                                      value={email}
                                      onChange={changeHandler}
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group className="form-group">
                                    <Form.Label>Mot de passe</Form.Label>{" "}
                                    <Form.Control
                                      className="form-control"
                                      placeholder="Entrez le mot de passe"
                                      type="password"
                                      name="password"
                                      value={password}
                                      onChange={changeHandler}
                                      required
                                    />
                                  </Form.Group>
                                  <Button
                                    onClick={ReactLogin}
                                    variant=""
                                    className="btn btn-primary btn-block"
                                  >
                                    {isLoading
                                      ? "Connexion en cours..."
                                      : "Se connecter"}
                                  </Button>
                                  <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                    <Link
                                      href="https://www.facebook.com/"
                                      target="_blank"
                                      className="btn btn-icon btn-facebook me-2"
                                      type="button"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </Link>
                                    <Link
                                      href="https://www.twitter.com/"
                                      target="_blank"
                                      className="btn btn-icon me-2"
                                      type="button"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </Link>
                                    <Link
                                      href="https://www.linkedin.com/"
                                      target="_blank"
                                      className="btn btn-icon me-2"
                                      type="button"
                                    >
                                      <span className="btn-inner--icon">
                                        {" "}
                                        <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </Link>
                                    <Link
                                      href="https://www.instagram.com/"
                                      target="_blank"
                                      className="btn  btn-icon me-2"
                                      type="button"
                                    >
                                      <span className="btn-inner--icon">
                                        <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                      </span>
                                    </Link>
                                  </div>
                                </Form>
                              </div>
                            </div>

                            <div className="panel-body tabs-menu-body border-0 p-3">
                              <div className="tab-content"></div>
                            </div>
                          </div>

                          <div className="main-signin-footer text-center mt-3">
                            <p>
                              <Link href="" className="mb-3">
                                Mot de passe oublié ?
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
