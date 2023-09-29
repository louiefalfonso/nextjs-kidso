import Script from "next/script"
import SliderArea from '@/components/SliderArea'
import BrandArea from '@/components/BrandArea'
import ServicesArea from '@/components/ServicesArea'
import AboutArea from '@/components/AboutArea'
import CounterArea from "@/components/CounterArea"
import ClassArea from "@/components/ClassArea"
import StepsArea from "@/components/StepsArea"
import TeamArea from "@/components/TeamArea"

export default function Home() {
  return (
  <>
    <main>
    <SliderArea/>
    <BrandArea/>
    <ServicesArea/>  
    <AboutArea/>
    <CounterArea/>    
    <ClassArea/>
    <StepsArea/>
    <TeamArea/>
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

    <Script type="text/javascript" id="hs-script-loader" async defer src="js/vendor/modernizr-3.5.0.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/vendor/jquery-3.6.0.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/popper.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/bootstrap.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/slick.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/paroller.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/wow.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/parallax.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.waypoints.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.counterup.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.scrollUp.min.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.meanmenu.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/jquery.magnific-popup.min.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/parallax-scroll.js"/> 
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/element-in-view.js"/> 
    <Script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js"/>
    <Script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.js"/>
    <Script type="text/javascript" id="hs-script-loader" async defer src="js/main.js"/>  
  </>
  )
}
