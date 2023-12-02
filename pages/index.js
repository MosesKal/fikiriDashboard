import Head from "next/head";
import { Inter } from "next/font/google";
import favicon from "../public/assets/img/brand/favicon.png";
import styles from "@/styles/Home.module.scss";
import { Alert, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import { auth } from "../shared/firebase/firebase";
import { useAuthContext } from "./contexts/authContext";

const apiUrl = "https://musanzi-wilfried.me/auth/login";

export default function Home() {
  useEffect(() => {
    if (document.body) {
      document
        .querySelector("body")
        .classList.add("ltr", "error-page1", "bg-primary");
    }

    return () => {
      document.body.classList.remove("ltr", "error-page1", "bg-primary");
    };
  }, []);

  // Firebase

  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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

  const Login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        routeChange();
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const ReactLogin = (e) => {
    e.preventDefault();

    console.log(data);
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    if (data.email == "BerryN@lunnovel.org" && data.password == "admin") {
      routeChange();
    } else {
      setError("The Auction details did not Match");
      setData({
        email: "admin@admin.com",
        password: "admin",
      });
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
                                    <Form.Label>Email</Form.Label>{" "}
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
                                    <Form.Label>Password</Form.Label>{" "}
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
                                    Se connecter
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
                                        {" "}
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
    </>
  );
}
