import React,{useEffect, useState} from "react";
import { Button, Row, Dropdown, Modal } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar';
import * as Switcherdata from "../../data/switcher/Switcherdata";
import Link from "next/link";
import { useRouter } from "next/router";

//Images
import free from "../../../public/assets/switcher/img/free.png"
import img16 from "../../../public/assets/switcher/img/16.jpg"
import img14 from "../../../public/assets/switcher/img/14.jpg"
import img15 from "../../../public/assets/switcher/img/15.jpg"
import moneybag from "../../../public/assets/switcher/img/money-bag.png"

export default function Switcher() {
  let { basePath } = useRouter()
  const [Basic, setShow1] = useState(false);
	  useEffect(() => {
      Switcherdata.localStorageBackUp();
    });
    function changePrimaryColor() {
      var userColor = document.getElementById("colorID").value;
      localStorage.setItem("nowaPrimaryColor", userColor);
      // to store value as opacity 0.95 we use 95
      localStorage.setItem("nowaprimaryHoverColor", userColor + 95);
      localStorage.setItem("nowaprimaryBorderColor", userColor);
      localStorage.setItem("nowaprimaryTransparent", userColor + 20);

      const dynamicPrimaryLight = document.querySelectorAll(
        "input.color-primary-light"
      );

      Switcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

      document.getElementById("myonoffswitch1").checked = true;
      document.getElementById("myonoffswitch3").checked = true;
      document.getElementById("myonoffswitch6").checked = true;

      // Adding
      document.querySelector("body")?.classList.add("light-theme");

      // Removing
      document.querySelector("body")?.classList.remove("dark-theme");
      document.querySelector("body")?.classList.remove("transparent-theme");
      document.querySelector("body")?.classList.remove("bg-img1");
      document.querySelector("body")?.classList.remove("bg-img2");
      document.querySelector("body")?.classList.remove("bg-img3");
      document.querySelector("body")?.classList.remove("bg-img4");

      localStorage.removeItem("nowadarkPrimaryColor");
      localStorage.removeItem("nowatransparentPrimaryColor");
      localStorage.removeItem("nowatransparentBgColor");
      localStorage.removeItem("nowatransparent-bgImgPrimaryColor");
      localStorage.removeItem("nowaBgImage");

      Switcherdata.name();
    }
    function darkPrimaryColor() {
      var userColor = document.getElementById("darkPrimaryColorID").value;
      localStorage.setItem("nowadarkPrimaryColor", userColor);
      localStorage.setItem("nowaprimaryHoverColor", userColor + 95);
      localStorage.setItem("nowaprimaryBorderColor", userColor);
      localStorage.setItem("nowaprimaryTransparent", userColor + 20);
      const dynamicPrimaryDark = document.querySelectorAll(
        "input.color-primary-dark"
      );

      Switcherdata.dynamicDarkPrimaryColor(dynamicPrimaryDark, userColor);

      document.getElementById("myonoffswitch2").checked = true;
      document.getElementById("myonoffswitch5").checked = true;
      document.getElementById("myonoffswitch8").checked = true;
      // Adding
      document.querySelector("body")?.classList.add("dark-theme");

      // Removing
      document.querySelector("body")?.classList.remove("light-theme");
      document.querySelector("body")?.classList.remove("transparent-theme");
      document.querySelector("body")?.classList.remove("bg-img1");
      document.querySelector("body")?.classList.remove("bg-img2");
      document.querySelector("body")?.classList.remove("bg-img3");
      document.querySelector("body")?.classList.remove("bg-img4");

      localStorage.removeItem("nowaPrimaryColor");
      localStorage.removeItem("nowaprimaryHoverColor");
      localStorage.removeItem("nowaprimaryBorderColor");
      localStorage.removeItem("nowaprimaryTransparent");
      localStorage.removeItem("nowatransparentPrimaryColor");
      localStorage.removeItem("nowatransparentBgColor");
      localStorage.removeItem("nowatransparent-bgImgPrimaryColor");
      localStorage.removeItem("nowaBgImage");

      Switcherdata.name();
    }
    function transparentPrimaryColor() {
      var userColor = document.getElementById(
        "transparentPrimaryColorID"
      ).value;

      localStorage.setItem("nowatransparentPrimaryColor", userColor);
      localStorage.setItem("nowaprimaryHoverColor", userColor + 95);
      localStorage.setItem("nowaprimaryBorderColor", userColor);
      localStorage.setItem("nowaprimaryTransparent", userColor + 20);
      const PrimaryTransparent = document.querySelectorAll(
        "input.color-primary-transparent"
      );

      Switcherdata.dynamicTransparentPrimaryColor(
        PrimaryTransparent,
        userColor
      );

      document.getElementById("myonoffswitchTransparent").checked = true;

      // Adding
      document.querySelector("body")?.classList.add("transparent-theme");

      // Removing
      document.querySelector("body")?.classList.remove("light-theme");
      document.querySelector("body")?.classList.remove("dark-theme");
      document.querySelector("body")?.classList.remove("bg-img1");
      document.querySelector("body")?.classList.remove("bg-img2");
      document.querySelector("body")?.classList.remove("bg-img3");
      document.querySelector("body")?.classList.remove("bg-img4");

      localStorage.removeItem("nowaPrimaryColor");
      localStorage.removeItem("nowaprimaryHoverColor");
      localStorage.removeItem("nowaprimaryBorderColor");
      localStorage.removeItem("nowaprimaryTransparent");
      localStorage.removeItem("nowadarkPrimaryColor");
      localStorage.removeItem("nowatransparent-bgImgPrimaryColor");
      localStorage.removeItem("nowaBgImage");

      Switcherdata.name();
    }
    function BgTransparentBackground() {
      var userColor = document.getElementById("transparentBgColorID").value;

      localStorage.setItem("nowatransparentBgColor", userColor);

      const dynamicBackgroundColor = document.querySelectorAll(
        "input.color-bg-transparent"
      );

      Switcherdata.dynamicBgTransparentBackground(
        dynamicBackgroundColor,
        userColor
      );

      document.getElementById("myonoffswitchTransparent").checked = true;

      // Adding
      document.querySelector("body")?.classList.add("transparent-theme");

      // Removing
      document.querySelector("body")?.classList.remove("light-theme");
      document.querySelector("body")?.classList.remove("dark-theme");
      document.querySelector("body")?.classList.remove("bg-img1");
      document.querySelector("body")?.classList.remove("bg-img2");
      document.querySelector("body")?.classList.remove("bg-img3");
      document.querySelector("body")?.classList.remove("bg-img4");
      document.querySelector("body")?.classList.remove("light-header");
      document.querySelector("body")?.classList.remove("color-header");
      document.querySelector("body")?.classList.remove("dark-header");
      document.querySelector("body")?.classList.remove("gradient-header");
      document.querySelector("body")?.classList.remove("light-menu");
      document.querySelector("body")?.classList.remove("color-menu");
      document.querySelector("body")?.classList.remove("dark-menu");
      document.querySelector("body")?.classList.remove("gradient-menu");
      localStorage.removeItem("nowaPrimaryColor");
      localStorage.removeItem("nowaprimaryHoverColor");
      localStorage.removeItem("nowaprimaryBorderColor");
      localStorage.removeItem("nowaprimaryTransparent");
      localStorage.removeItem("nowadarkPrimaryColor");
      localStorage.removeItem("nowatransparent-bgImgPrimaryColor");
      localStorage.removeItem("nowaBgImage");

      Switcherdata.name();
    }
    function BgImgTransparentPrimaryColor() {
      
      var userColor = document.getElementById(
        "transparentBgImgPrimaryColorID"
      ).value;

      localStorage.setItem("nowatransparent-bgImgPrimaryColor", userColor);

      const dynamicPrimaryImgTransparent = document.querySelectorAll(
        "input.color-primary-transparent"
      );

      Switcherdata.dynamicBgImgTransparentPrimaryColor(
        dynamicPrimaryImgTransparent,
        userColor
      );
// console.log(dynamicPrimaryImgTransparent);
      document.getElementById("myonoffswitchTransparent").checked = true;

      // Adding
      document.querySelector("body")?.classList.add("transparent-theme");

      // Removing
      document.querySelector("body")?.classList.remove("light-theme");
      document.querySelector("body")?.classList.remove("dark-theme");
      document.querySelector("body")?.classList.remove("light-header");
      document.querySelector("body")?.classList.remove("color-header");
      document.querySelector("body")?.classList.remove("dark-header");
      document.querySelector("body")?.classList.remove("gradient-header");
      document.querySelector("body")?.classList.remove("light-menu");
      document.querySelector("body")?.classList.remove("color-menu");
      document.querySelector("body")?.classList.remove("dark-menu");
      document.querySelector("body")?.classList.remove("gradient-menu");
      localStorage.removeItem("nowaPrimaryColor");
      localStorage.removeItem("nowaprimaryHoverColor");
      localStorage.removeItem("nowaprimaryBorderColor");
      localStorage.removeItem("nowaprimaryTransparent");
      localStorage.removeItem("nowadarkPrimaryColor");
      localStorage.removeItem("nowatransparentPrimaryColor");
      localStorage.removeItem("nowatransparentBgColor");

      document.querySelector("html").style.removeProperty("--transparent-body");

      if (
        document.querySelector("body")?.classList.contains("bg-img1") ===
          false &&
        document.querySelector("body")?.classList.contains("bg-img2") ===
          false &&
        document.querySelector("body")?.classList.contains("bg-img3") ===
          false &&
        document.querySelector("body")?.classList.contains("bg-img4") === false
      ) {
        document.querySelector("body")?.classList.add("bg-img1");
        localStorage.setItem("nowaBgImage", "bg-img1");
      }
      Switcherdata.name();
      
    }
  return (
    <div>
      <div className="switcher-wrapper">
        <div className="demo_changer">
          <div className="form_holder sidebar-right1">
            <PerfectScrollbar className="sidebarright2">
              <Row>
                <div className="predefined_styles">
                  <div className="swichermainleft text-center">
                    <div className="p-3 d-grid gap-2">
                      <a
                       target="blank"
                        href="https://nextjs.spruko.com/nowa/"
                        className="btn ripple btn-primary mt-0"
                      >
                        View Demo
                      </a>
                      <a
                       target="blank"
                        className="btn ripple btn-info"
                        onClick={() => setShow1(!Basic)}
                      >
                        Buy Now
                      </a>

                      {/* <!-- buynow modal --> */}
                    <Modal className='buynow buynow-btn' size='lg' show={Basic}>
                        <Modal.Body className='p-0 overflow-hidden'>
                          <div className="modal-content-demo cover-image py-5" style={{ backgroundImage: `url(${img16.src})` }}>
                              <h3 className=" text-center mb-4 text-white licenses-colour" style={{ zIndex: 1 }}>Licenses</h3>
                            <div className="row justify-content-center py-4 px-0 mx-3  Licenses-img">
                              <button aria-label="Close" onClick={() => setShow1(!Basic)} className="btn-close" data-bs-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card  border-0 regular-license">
                                  <div className="card-body imag-list cover-image" style={{ backgroundImage: `url(${img14.src})` }}>
                                    <div className="text-white">
                                      <img src={free.src} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Regular</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You <span className="text-success font-weight-semibold">{`can't`} charge </span> from your <br /><span className="op-8">End Product  End Users</span> </p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/Vy1YaO">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span></div></Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/ORjnjN">
                                              <div><p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span></div></Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-10 col-md-8 col-xl-5 col-lg-5">
                                <div className="card border-0 ">
                                  <div className='imag-list card-body cover-image' style={{ backgroundImage: `url(${img15.src})` }}>
                                    <div className="text-white">
                                      <img src={moneybag.src} alt="" className="w-55 free-img" />
                                      <div className="text-center">
                                        <div className="tx-26"><span className="font-weight-medium ">Extended</span> Licenses</div>
                                        <p className="fw-semi-bold mb-sm-2 mb-0">You  <span className="text-warning font-weight-semibold">can charge</span> from your  <br /><span className="op-8">End Product  End Users</span></p>
                                        <Dropdown>
                                          <Dropdown.Toggle className='btn w-lg mt-1' variant="info" id="dropdown-basic">Buy Now</Dropdown.Toggle>
                                          <Dropdown.Menu className='py-0' style={{ marginTop: '0px' }}>
                                            <Dropdown.Item className='border-bottom px-3' target="_blank" href="https://1.envato.market/n1mEkA">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">6 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                            <Dropdown.Item className='px-3' target="_blank" href="https://1.envato.market/3PGjGB">
                                              <div>
                                                <p className="tx-14 mb-0 lh-xs font-bold">Buy Now</p><span className="tx-12 op-7 ">12 months support</span>
                                              </div>
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="license-view" style={{ zIndex: 1 }}>
                                <a href="https://spruko.com/licenses" target="_blank" className="modal-title text-center mb-3 tx-14 text-white" rel="noreferrer">View license details</a>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                      {/* <!-- End buynow modal --> */}
                      
                      <a
                       target="blank"
                        href="https://themeforest.net/user/spruko/portfolio"
                        className="btn ripple btn-danger"
                      >
                        Our Portfolio
                      </a>
                    </div>
                  </div>
                  <div className="swichermainleft text-center">
                    <h4>LTR AND RTL VERSIONS</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">LTR</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              id="myonoffswitch54"
                              onClick={() => Switcherdata.RtltoLtr()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch54"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">RTL</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch25"
                              id="myonoffswitch55"
                              onClick={() => Switcherdata.LtrtoRtl()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch55"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Navigation Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Vertical Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch34"
                              onClick={() => Switcherdata.VerticalMenu()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch34"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Click Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch35"
                              onClick={Switcherdata.horizontal}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch35"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Horizantal Hover Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch15"
                              id="myonoffswitch111"
                              onClick={() => Switcherdata.HorizontalHoverMenu()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch111"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Light Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="myonoffswitch1"
                              onClick={() => Switcherdata.LightTheme()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch1"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Primary</span>
                          <div className="">
                            <input
                              className="wd-25 ht-25 input-color-picker color-primary-light"
                              defaultValue="#38cab3"
                              id="colorID"
                              onInput={(e) => changePrimaryColor(e)}
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id7="transparentcolor"
                              name="lightPrimary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Dark Theme Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              id="myonoffswitch2"
                              onClick={() => Switcherdata.dark()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch2"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Primary</span>
                          <div className="">
                            <input
                              className="wd-25 ht-25 input-dark-color-picker color-primary-dark"
                              defaultValue="#38cab3"
                              id="darkPrimaryColorID"
                              onInput={(e) => darkPrimaryColor(e)}
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id8="transparentcolor"
                              name="darkPrimary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex mt-2 mb-3">
                          <span className="me-auto">Transparent Theme</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch1"
                              onClick={() => Switcherdata.transparent()}
                              id="myonoffswitchTransparent"
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitchTransparent"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Transparent Primary</span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                              defaultValue="#38cab3"
                              id="transparentPrimaryColorID"
                              onInput={() => transparentPrimaryColor()}
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id4="primary"
                              data-id9="transparentcolor"
                              name="tranparentPrimary"
                            />
                          </div>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">
                            Transparent Background
                          </span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-bg-transparent"
                              defaultValue="#38cab3"
                              id="transparentBgColorID"
                              onInput={(e) => BgTransparentBackground(e)}
                              type="color"
                              data-id5="body"
                              data-id6="theme"
                              data-id9="transparentcolor"
                              name="transparentBackground"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Transparent Bg-Image Style</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">BG-Image Primary</span>
                          <div className="">
                            <input
                              className="wd-30 ht-30 input-transparent-color-picker color-primary-transparent"
                              defaultValue="#38cab3"
                              id="transparentBgImgPrimaryColorID"
                              onInput={() => BgImgTransparentPrimaryColor()}
                              type="color"
                              data-id="bg-color"
                              data-id1="bg-hover"
                              data-id2="bg-border"
                              data-id3="primary"
                              data-id4="primary"
                              data-id9="transparentcolor"
                              name="tranparentPrimary"
                            />
                          </div>
                        </div>
                        <div className="switch-toggle">
                          <Link
                            className="bg-img1"
                            onClick={() => Switcherdata.bgimage1()}
                            href="#!"
                          >
                            <img
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/img/media/bg-img1.jpg`}
                              id="bgimage1"
                              alt="switch-img"
                            />
                          </Link>
                          <Link
                            className="bg-img2"
                            onClick={() => Switcherdata.bgimage2()}
                            href="#!"
                          >
                            <img
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/img/media/bg-img2.jpg`}
                              id="bgimage2"
                              alt="switch-img"
                            />
                          </Link>
                          <Link
                            className="bg-img3"
                            onClick={() => Switcherdata.bgimage3()}
                            href="#!"
                          >
                            <img
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/img/media/bg-img3.jpg`}
                              id="bgimage3"
                              alt="switch-img"
                            />
                          </Link>
                          <Link
                            className="bg-img4"
                            onClick={() => Switcherdata.bgimage4()}
                            href="#!"
                          >
                            <img
                              src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/img/media/bg-img4.jpg`}
                              id="bgimage4"
                              alt="switch-img"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft leftmenu-styles">
                    <h4>Leftmenu Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch3"
                              onClick={() => Switcherdata.LightMenu()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch3"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch4"
                              onClick={() => Switcherdata.ColorMenu()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch4"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch5"
                              onClick={() => Switcherdata.DarkMenu()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch5"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Menu</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch2"
                              id="myonoffswitch25"
                              onClick={() => Switcherdata.GradientMenu()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch25"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft header-styles">
                    <h4>Header Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Light Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch6"
                              onClick={() => Switcherdata.Lightheader()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch6"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Color Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch7"
                              onClick={() => Switcherdata.Colorheader()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch7"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Dark Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch8"
                              onClick={() => Switcherdata.Darkheader()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch8"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Gradient Header</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch3"
                              id="myonoffswitch26"
                              onClick={() => Switcherdata.gradientheader()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch26"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Width Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Full Width</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="myonoffswitch9"
                              onClick={() => Switcherdata.FullWidth()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch9"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Boxed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch4"
                              id="myonoffswitch10"
                              onClick={() => Switcherdata.Boxed()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch10"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Layout Positions</h4>
                    <div className="skin-body">
                      <div className="switch_section">
                        <div className="switch-toggle d-flex">
                          <span className="me-auto">Fixed</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="myonoffswitch11"
                              onClick={() => Switcherdata.Fixed()}
                              className="onoffswitch2-checkbox"
                              defaultChecked="checked"
                            />
                            <label
                              htmlFor="myonoffswitch11"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                        <div className="switch-toggle d-flex mt-2">
                          <span className="me-auto">Scrollable</span>
                          <p className="onoffswitch2 my-0">
                            <input
                              type="radio"
                              name="onoffswitch5"
                              id="myonoffswitch12"
                              onClick={() => Switcherdata.Scrollable()}
                              className="onoffswitch2-checkbox"
                            />
                            <label
                              htmlFor="myonoffswitch12"
                              className="onoffswitch2-label"
                            ></label>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swichermainleft">
                    <h4>Reset All Styles</h4>
                    <div className="skin-body">
                      <div className="switch_section my-4">
                        <Button
                          variant=""
                          className="btn btn-danger btn-block"
                          onClick={() => {
                            localStorage.clear();
                            document.querySelector("html").style = "";
                            Switcherdata.name();
                            Switcherdata.resetData();
                          }}
                          type="button"
                        >
                          Reset All
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}
Switcher.propTypes = {};

Switcher.defaultProps = {};
