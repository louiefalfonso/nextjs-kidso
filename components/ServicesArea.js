import React from 'react';
import Link from 'next/link';

const ServicesArea = () => {
  return (
    <div id="services" className="services-area services-bg pt-120 pb-90 p-relative">
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
                      <Link href="/services">Read More</Link>
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
                      <Link href="/services">Read More</Link>
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
                      <Link href="/services">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default ServicesArea;