import Head from 'next/head'
import { Inter } from 'next/font/google'
import favicon from "../public/assets/img/brand/favicon.png"
import styles from '@/styles/Home.module.scss'
import { Alert, Button, Col, Form, Row, Tab, Tabs } from 'react-bootstrap';
import Link from "next/link";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Seo from '@/shared/layout-components/seo/seo'
import { auth } from "../shared/firebase/firebase"

export default function Home() {

  useEffect(() => {
    if (document.body) {
      document.querySelector("body").classList.add("ltr", "error-page1", "bg-primary")
    }

    return () => {
      document.body.classList.remove("ltr", "error-page1", "bg-primary")
    }
  }, [])


  // Firebase
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useRouter();
  const routeChange = () => {
    let path = `/components/dashboards/dashboard1`;
    navigate.push(path);
  }

  const Login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { console.log(user); routeChange() }).catch(err => { console.log(err); setError(err.message) })
  }

  const ReactLogin = (e) => {
    console.log(data);
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890") {
      routeChange()
    }
    else {
      setError("The Auction details did not Match")
      setData({
        "email": "adminnextjs@gmail.com",
        "password": "1234567890",
      })
    }
  }

  const [key, setKey] = useState('firebase');

  return (
    <>
      <Head>
        <title>Nowa</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={favicon.src} />
        {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link> */}
      </Head>
      <Seo title={"Login"} />
      <div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>

      <div className="page">
        <div
          className="page-single"

        >



          <Tabs className='justify-content-center'
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="firebase" title="FireBase">
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
                              <h2>Welcome back!</h2>
                              <h6 className="font-weight-semibold mb-4">
                                Please Firebase sign in to continue.
                              </h6>
                              <div className="panel panel-primary">
                                <div className="tab-menu-heading mb-2 border-bottom-0">
                                  <div className="tabs-menu1">
                                    {err && <Alert variant="danger">{err}</Alert>}
                                    <Form action="#" >
                                      <Form.Group className="form-group">
                                        <Form.Label>Email</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your email"
                                          type="text"
                                          name='email'
                                          value={email}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Form.Group className="form-group">
                                        <Form.Label>Password</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your password"
                                          type="password"
                                          name='password'
                                          value={password}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Button onClick={Login}
                                        variant=""
                                        className="btn btn-primary btn-block"
                                      >
                                        Sign In
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
                                    Forgot password?
                                  </Link>
                                </p>
                                <p>
                                  {`Don't`} have an account?{" "}
                                  <Link href={`/signup`}>Create an Account</Link>
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
            </Tab>
            <Tab eventKey="nextjs" title="Nextjs">
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
                              <h2>Welcome back!</h2>
                              <h6 className="font-weight-semibold mb-4">
                                Please Nextjs sign in to continue.
                              </h6>
                              <div className="panel panel-primary">
                                <div className="tab-menu-heading mb-2 border-bottom-0">
                                  <div className="tabs-menu1">
                                    <Form action="#" >
                                      <Form.Group className="form-group">
                                        <Form.Label>Email</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your email"
                                          type="text"
                                          name='email'
                                          value={email}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Form.Group className="form-group">
                                        <Form.Label>Password</Form.Label>{" "}
                                        <Form.Control
                                          className="form-control"
                                          placeholder="Enter your password"
                                          type="password"
                                          name='password'
                                          value={password}
                                          onChange={changeHandler}
                                          required
                                        />
                                      </Form.Group>
                                      <Button onClick={ReactLogin}
                                        variant=""
                                        className="btn btn-primary btn-block"
                                      >
                                        Sign In
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
                                    Forgot password?
                                  </Link>
                                </p>
                                <p>
                                  {`Don't`} have an account?{" "}
                                  <Link href={`/components/pages/authentication/sign-up/`}>Create an Account</Link>
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}
