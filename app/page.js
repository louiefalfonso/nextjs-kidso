import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
      <main>
        
        <div
          className="modal fade bs-example-modal-lg search-bg popup1"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content search-popup">
              <div className="text-center">
                <a
                  href="#"
                  className="close2"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  × close
                </a>
              </div>
              <div className="row search-outer">
                <div className="col-md-11">
                  <input type="text" placeholder="Search for products..." />
                </div>
                <div className="col-md-1 text-right">
                  <a href="#">
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section id="parallax" className="slider-area slider-four fix p-relative">
          <div className="slider-shape ss-one layer" data-depth="0.10">
            <img src="img/bg/slider_shape01.png" alt="shape" />
          </div>
          <div className="slider-shape ss-two layer" data-depth="0.30">
            <img src="img/bg/slider_shape02.png" alt="shape" />
          </div>
          <div className="slider-shape ss-three layer" data-depth="0.40">
            <img src="img/bg/slider_shape03.png" alt="shape" />
          </div>
          <div className="slider-active">
            <div
              className="single-slider slider-bg d-flex align-items-center"
              style={{ background: "url(img/slider/slider_img_bg.png) no-repeat" }}
            >
              <div
                className="img-main"
                data-animation="fadeInLeft"
                data-delay=".2s"
              >
                {" "}
                <img src="img/slider/main.png" alt="slider-overlay" />
              </div>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="slider-content s-slider-content pt-100">
                      <h5 data-animation="fadeInUp" data-delay=".4s">
                        Welcome To Childcare Service
                      </h5>
                      <h2 data-animation="fadeInUp" data-delay=".4s">
                        Get Lifecare For Your kids
                      </h2>
                      <p data-animation="fadeInUp" data-delay=".6s">
                        Quisque eget tortor posuere, aliquet arcu ut, molestie nunc.
                        Integer malesuada laoreet erat, ut hendrerit magna finibus
                        ut.
                      </p>
                      <div className="slider-btn mt-30">
                        <a
                          href="about.html"
                          className="btn mr-15"
                          data-animation="fadeInUp"
                          data-delay=".4s"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="brand-area pt-60 pb-60" style={{ background: "#fe4b7b" }}>
          <div className="container-fluid">
            <div className="row brand-active">
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo1.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo2.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo3.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo4.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo5.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo6.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-2">
                <div className="single-brand">
                  <img src="img/brand/b-logo3.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section
          id="services"
          className="services-area services-bg pt-120 pb-90 p-relative"
        >
          <div className="animations-01">
            <img src="img/bg/an-img-01.png" alt="an-img-01" />
          </div>
          <div className="animations-02">
            <img src="img/bg/an-img-02.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-10">
                <div className="section-title text-center mb-35">
                  <h5>Our Services</h5>
                  <h2>What We Provide</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services  text-center">
                  <img src="img/bg/sr-img01.png" alt="feature" />
                  <div className="services-hover">
                    <div className="services-icon">
                      <img src="img/icon/f-icon1.png" />
                    </div>
                    <div className="second-services-content">
                      <h5>Daycare Service</h5>
                      <p>
                        Get Your Best Care eu lacinia magna. Nullam vehicula
                        accumsan neque, eget congue tellus cursus quis.
                      </p>
                      <a href="services-detail.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services text-center">
                  <img src="img/bg/sr-img02.png" alt="feature" />
                  <div className="services-hover">
                    <div className="services-icon">
                      <img src="img/icon/f-icon2.png" />
                    </div>
                    <div className="second-services-content">
                      <h5>Summer Camp</h5>
                      <p>
                        Get Your Best Care eu lacinia magna. Nullam vehicula
                        accumsan neque, eget congue tellus cursus quis.
                      </p>
                      <a href="services-detail.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30">
                <div className="s-single-services text-center">
                  <img src="img/bg/sr-img03.png" alt="feature" />
                  <div className="services-hover">
                    <div className="services-icon">
                      <img src="img/icon/f-icon3.png" />
                    </div>
                    <div className="second-services-content">
                      <h5>Online Classes</h5>
                      <p>
                        Get Your Best Care eu lacinia magna. Nullam vehicula
                        accumsan neque, eget congue tellus cursus quis.
                      </p>
                      <a href="services-detail.html">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services-area-end */}
        {/* about-area */}
        <section
          className="about-area about-p pt-120 pb-195 p-relative"
          style={{ background: "#f7f9ff" }}
        >
          <div className="animations-03">
            <img src="img/bg/an-img-03.png" alt="an-img-01" />
          </div>
          <div className="animations-04">
            <img src="img/bg/an-img-04.png" alt="contact-bg-an-01" />
          </div>
          <div className="animations-05">
            <img src="img/bg/an-img-05.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="s-about-img p-relative  wow fadeInLeft  animated"
                  data-animation="fadeInLeft"
                  data-delay=".4s"
                >
                  <img src="img/features/about_img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="about-content s-about-content  wow fadeInRight  animated pl-30"
                  data-animation="fadeInRight"
                  data-delay=".4s"
                >
                  <div className="about-title second-title pb-25">
                    <h5>About Us</h5>
                    <h2>Get Special Care For Your Kids</h2>
                  </div>
                  <p>
                    Nunc mattis justo eget ex bibendum eleifend. Sed finibus neque
                    nec dui vehicula sollicitudin. Nam at velit vel enim placerat
                    fringilla at sit amet justo. Nullam nec risus placerat, sagittis
                    odio eget, volutpat ante.
                  </p>
                  <p>
                    Vivamus convallis sed felis sed tincidunt. Sed nec arcu vel
                    lectus molestie efficitur. Praesent viverra ipsum sagittis
                    tellus facilisis malesuada. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus.{" "}
                  </p>
                  <div className="slider-btn mt-15">
                    <a href="about.html" className="btn">
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="counter-area p-relative">
          <div className="container">
            <div className="row counter-bg p-relative">
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="counter p-relative">
                    <span className="count">385</span>
                    <p>Kids Are Happy</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="counter p-relative">
                    <span className="count">509</span>
                    <p>Happy To Service </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="counter p-relative">
                    <span className="count">798</span>
                    <p>Cup Of Coffee</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12">
                <div
                  className="single-counter wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="counter p-relative">
                    <span className="count">936</span>
                    <p>Our Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="class-area pt-120 pb-120 p-relative">
          <div className="animations-06">
            <img src="img/bg/an-img-06.png" alt="an-img-01" />
          </div>
          <div className="animations-07">
            <img src="img/bg/an-img-07.png" alt="contact-bg-an-01" />
          </div>
          <div className="animations-08">
            <img src="img/bg/an-img-08.png" alt="contact-bg-an-01" />
          </div>
          <div className="animations-09">
            <img src="img/bg/an-img-09.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="section-title text-center mb-10">
                  <h5>On Going Classes</h5>
                  <h2>Get The Best Classes With Us</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-1.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Languge Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-2.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Drawing Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-3.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Mathematics Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-4.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Sports Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-5.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Knowlage Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="class-item mb-30">
                  <div className="class-img">
                    <div className="class-img-outer">
                      <img src="img/class/class-6.jpg" alt="class image" />
                    </div>
                  </div>
                  <div className="class-content">
                    <h4 className="title">
                      <a href="class-single.html">Science Class</a>
                    </h4>
                    <p>
                      Curabitur dignissim at leo sit amet facilisis. Etiam molestie
                      volutpat turpis.
                    </p>
                    <ul className="schedule">
                      <li>
                        <span>Age:</span>
                        <span className="class-size">5-10 Years</span>
                      </li>
                      <li>
                        <span>Time:</span>
                        <span className="class-size class-size-2">8-10am</span>
                      </li>
                      <li>
                        <span className="class-price">$50</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* class area start */}
        {/* steps-area */}
        <section
          className="steps-area fix p-relative"
          style={{ backgroundColor: "#12265a" }}
        >
          <div className="animations-10">
            <img src="img/bg/an-img-10.png" alt="an-img-01" />
          </div>
          <div className="animations-11">
            <img src="img/bg/an-img-11.png" alt="an-img-01" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="section-title mb-35">
                  <h5>How It Work</h5>
                  <h2>See Our Steps To Success</h2>
                </div>
                <ul>
                  <li>
                    <div className="step-box">
                      <div className="dnumber">
                        <div className="date-box">01</div>
                      </div>
                      <div className="text">
                        <h3>Expert Instructor</h3>
                        <p>
                          Nam et ante vehicula, blandit nunc at, mattis lacus. Donec
                          non rutrum justo. Morbi egestas aliquam sem et consequat.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="step-box">
                      <div className="dnumber">
                        <div className="date-box">02</div>
                      </div>
                      <div className="text">
                        <h3>Know Everything</h3>
                        <p>
                          Nam et ante vehicula, blandit nunc at, mattis lacus. Donec
                          non rutrum justo. Morbi egestas aliquam sem et consequat.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="step-box">
                      <div className="dnumber">
                        <div className="date-box">03</div>
                      </div>
                      <div className="text">
                        <h3>Well Child</h3>
                        <p>
                          Nam et ante vehicula, blandit nunc at, mattis lacus. Donec
                          non rutrum justo. Morbi egestas aliquam sem et consequat.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="step-img">
                  <img src="img/bg/steps-img.png" alt="class image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* steps-area-end */}
        {/* team-area */}
        <section className="team-area2 fix p-relative pt-120 pb-90">
          <div className="animations-01">
            <img src="img/bg/slider_shape01.png" alt="an-img-01" />
          </div>
          <div className="animations-02">
            <img src="img/bg/an-img-01.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-relative">
                <div className="section-title center-align mb-50 text-center">
                  <h5>Our Team</h5>
                  <h2>Our Expert Team</h2>
                </div>
              </div>
            </div>
            <div className="row team-active">
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team01.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">Bableo Dablo</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team02.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">Dawon Crisen</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team03.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">David Suarez</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team04.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">Gerard Peano</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team01.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">Ostin Green</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="single-team mb-30">
                  <div className="team-thumb">
                    <div className="brd">
                      <img src="img/team/team02.png" alt="img" />
                    </div>
                    <div className="dropdown">
                      <a
                        className="xbtn"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="far fa-share-alt" />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <div className="team-social mt-15">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              {" "}
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h4>
                      <a href="teacher-single.html">Norman Colins</a>
                    </h4>
                    <p>Kids Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area-end */}
        {/* testimonial-area */}
        <section
          className="testimonial-area pt-120 pb-150 fix p-relative"
          style={{ backgroundColor: "#f7f9ff" }}
        >
          <div className="animations-01">
            <img src="img/bg/an-img-06.png" alt="an-img-01" />
          </div>
          <div className="animations-02">
            <img src="img/bg/an-img-04.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img src="img/bg/testmonail-img.png" alt="img" />
              </div>
              <div className="col-lg-6">
                <div className="section-title center-align mb-35">
                  <h5>Testimonial</h5>
                  <h2>What Our Clients Says</h2>
                </div>
                <div className="testimonial-active">
                  <div className="single-testimonial">
                    <p>
                      “Quisque eget tortor posuere, aliquet arcu ut, molestie nunc.
                      Integer malesuada laoreet erat, ut hendrerit magna finibus ut.
                      Duis vitae enim bibendum, gravida sapien vitae, egestas velit.
                      Sed euismod tristique orci. Phasellus placerat, metus
                      fermentum tincidunt condimentum, felis dolor dapibus metus”.
                    </p>
                    <div className="testi-author">
                      <div className="ta-info">
                        <h6>Walkar James</h6>
                        <span>Kid Parent</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <p>
                      “Quisque eget tortor posuere, aliquet arcu ut, molestie nunc.
                      Integer malesuada laoreet erat, ut hendrerit magna finibus ut.
                      Duis vitae enim bibendum, gravida sapien vitae, egestas velit.
                      Sed euismod tristique orci. Phasellus placerat, metus
                      fermentum tincidunt condimentum, felis dolor dapibus metus”.
                    </p>
                    <div className="testi-author">
                      <div className="ta-info">
                        <h6>Walkar James</h6>
                        <span>Kid Parent</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <p>
                      “Quisque eget tortor posuere, aliquet arcu ut, molestie nunc.
                      Integer malesuada laoreet erat, ut hendrerit magna finibus ut.
                      Duis vitae enim bibendum, gravida sapien vitae, egestas velit.
                      Sed euismod tristique orci. Phasellus placerat, metus
                      fermentum tincidunt condimentum, felis dolor dapibus metus”.
                    </p>
                    <div className="testi-author">
                      <div className="ta-info">
                        <h6>Walkar James</h6>
                        <span>Kid Parent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-area-end */}
        {/* blog-area */}
        <section id="blog" className="blog-area p-relative fix pt-120 pb-120">
          <div className="animations-01">
            <img src="img/bg/an-img-08.png" alt="an-img-01" />
          </div>
          <div className="animations-02">
            <img src="img/bg/an-img-02.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="section-title center-align mb-10 text-center">
                  <h5>Our Blog</h5>
                  <h2>Latest Blog &amp; News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-post2 mb-30">
                  <div className="blog-thumb2">
                    <a href="blog-details.html">
                      <img src="img/blog/inner_b1.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <a href="blog-details.html">
                        Nam at velit vel enim placerat fringilla.
                      </a>
                    </h4>
                    <p>
                      Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                      dignissim ligula, nec tristique orci.
                    </p>
                    <div className="b-meta">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-calendar-alt" /> 24th March
                                2021
                              </li>
                              <li>
                                <i className="fal fa-user" /> By Jhone Doe
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-post2 mb-30">
                  <div className="blog-thumb2">
                    <a href="blog-details.html">
                      <img src="img/blog/inner_b2.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <a href="blog-details.html">
                        Tem at velit vel enim placerat fringilla.
                      </a>
                    </h4>
                    <p>
                      Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                      dignissim ligula, nec tristique orci.
                    </p>
                    <div className="b-meta">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-calendar-alt" /> 24th March
                                2021
                              </li>
                              <li>
                                <i className="fal fa-user" /> By Jhone Doe
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-post2 mb-30">
                  <div className="blog-thumb2">
                    <a href="blog-details.html">
                      <img src="img/blog/inner_b3.jpg" alt="img" />
                    </a>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <a href="blog-details.html">
                        Sam at velit vel enim placerat fringilla.
                      </a>
                    </h4>
                    <p>
                      Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                      dignissim ligula, nec tristique orci.
                    </p>
                    <div className="b-meta">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="meta-info">
                            <ul>
                              <li>
                                <i className="fal fa-calendar-alt" /> 24th March
                                2021
                              </li>
                              <li>
                                <i className="fal fa-user" /> By Jhone Doe
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-area-end */}
        {/* contact-area */}
        <section
          id="contact"
          className="contact-area after-none contact-bg pt-120 pb-120 p-relative fix"
          style={{ background: "#f8f9fe" }}
        >
          <div className="animations-12">
            <img src="img/bg/slider_shape03.png" alt="an-img-01" />
          </div>
          <div className="animations-13">
            <img src="img/bg/an-img-12.png" alt="contact-bg-an-01" />
          </div>
          <div className="animations-14">
            <img src="img/bg/slider_shape02.png" alt="contact-bg-an-01" />
          </div>
          <div className="animations-15">
            <img src="img/bg/an-img-13.png" alt="contact-bg-an-01" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-1">
                <img src="img/bg/contact-img.png" alt="img" />
              </div>
              <div className="col-lg-6 order-2">
                <div className="contact-bg02 wow fadeInLeft  animated">
                  <div className="section-title center-align">
                    <h5>Contact Us</h5>
                    <h2>Join Our Best Fun Classes</h2>
                  </div>
                  <form
                    action="mail.php"
                    method="post"
                    className="contact-form mt-35"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-30">
                          <input
                            type="text"
                            id="firstn"
                            name="firstn"
                            placeholder="Full Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-30">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Eamil Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-30">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone No."
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-message mb-30">
                          <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={10}
                            placeholder="Write comments"
                            defaultValue={""}
                          />
                        </div>
                        <div className="slider-btn">
                          <button
                            className="btn ss-btn active"
                            data-animation="fadeInRight"
                            data-delay=".8s"
                          >
                            Submint Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact-area-end */}
      </main>
    <Footer/>
  </>
  )
}
