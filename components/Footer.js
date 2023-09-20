import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-bg footer-p">
    <div
      className="footer-top pt-120 pb-80  p-relative"
      style={{
        backgroundImage: "url(img/bg/footer-bg.png)",
        backgroundColor: "#fff",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title mb-15">
                <img src="img/logo/f_logo.png" alt="img" />
              </div>
              <div className="footer-text mb-20">
                <p>
                  In interdum, mauris in sollicitudin consectetur, elit odio
                  tempus mauris, eget convallis metus arcu nec diam. Vestibulum
                  sagittis at lectus et.
                </p>
              </div>
              <div className="footer-social">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <h2>Our Links</h2>
              </div>
              <div className="footer-link">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html"> About Us</a>
                  </li>
                  <li>
                    <a href="classes.html"> Classes</a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact Us</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title">
                <h2>Contact Us</h2>
              </div>
              <div className="f-contact">
                <ul>
                  <li>
                    <i className="icon fal fa-map-marker-check" />
                    <span>
                      1247/Plot No. 39, 15th Phase, <br />
                      Colony, Hyderabad
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-phone" />
                    <span>
                      1800-121-3637
                      <br />
                      +91-7052-101-786
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-envelope" />
                    <span>
                      <a href="mailto:info@example.com">info@example.com</a>
                      <br />
                      <a href="mailto:help@example.com">help@example.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title mb-15">
                <h2>Subscribe Now !</h2>
              </div>
              <div className="footer-link">
                <div className="newslater-area">
                  <form
                    name="ajax-form"
                    id="contact-form4"
                    action="#"
                    method="post"
                    className="contact-form newslater"
                  >
                    <div className="form-group p-relative">
                      <input
                        className="form-control"
                        id="email2"
                        name="email"
                        type="email"
                        placeholder="Email Address..."
                        defaultValue=""
                        required=""
                      />
                      <button type="submit" id="send2">
                        <i className="far fa-chevron-right" />
                      </button>
                    </div>
                    {/* /Form-email */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap text-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            Copyright © 2022 Kidso All rights reserved.
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;