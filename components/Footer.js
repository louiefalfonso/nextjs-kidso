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
                <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></Link>
                <Link href="https://twitter.com/"><i className="fab fa-twitter" /></Link>
                <Link href="https://www.instagram.com/"><i className="fab fa-instagram" /></Link>
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
                  <li><Link href="/" >Home</Link></li>
                  <li><Link href="/aboutus" >About Us</Link></li>
                  <li><Link href="/classes" >Classes</Link></li>
                  <li><Link href="/teachers" >Teachers</Link></li> 
                  <li><Link href="/services" >Services</Link></li> 
                  <li><Link href="/contact" >Contact Us</Link></li> 
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
                      1247/Plot No. 39, 15th Phase, Colony, Hyderabad
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-phone" />
                    <span>
                      1800-121-3637<br />+91-7052-101-786
                    </span>
                  </li>
                  <li>
                    <i className="icon fal fa-envelope" />
                    <span>
                      <a href="#">info@kidsocare.com</a>
                      <br />
                      <a href="#">help@kidsocare.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="footer-widget mb-30">
              <div className="f-widget-title mb-15">
                <h2>Subscribe Now!</h2>
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
            Copyright © 2023 Kidso - Modern Kindergarten Baby Care All rights reserved.
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;