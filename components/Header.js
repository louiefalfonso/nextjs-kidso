import React from 'react';

const Header = () => {
  return (
    <header className="header-area header-three">
    <div id="header-sticky" className="menu-area">
      <div className="container">
        <div className="second-menu">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="main-menu text-right text-xl-right">
                <nav id="mobile-menu">
                  <ul>
                    <li className="has-sub">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="has-sub">
                      <a href="classes.html">Classes</a>
                      <ul>
                        <li>
                          <a href="classes.html">Classes</a>
                        </li>
                        <li>
                          <a href="class-single.html">Class Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="teachers.html">Teachers</a>
                        </li>
                        <li>
                          <a href="teacher-single.html">Teacher Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <a href="blog.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-30 mb-30 text-right text-xl-right">
              <div className="login">
                <ul>
                  <li>
                    <div className="header-btn second-header-btn">
                      <a href="contact.html" className="btn">
                        Get Started
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile-menu" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;