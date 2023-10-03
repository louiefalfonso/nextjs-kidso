import React from 'react'
import Link from 'next/link';

export default function BlogArea() {
  return (
    <div id="blog" className="blog-area p-relative fix pt-120 pb-120">
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
                    <Link href="/blogpost" ><img src="img/blog/inner_b1.jpg" alt="img" /></Link>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link href="/blogpost" >
                        Nam at velit vel enim placerat fringilla.
                      </Link>
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
                    <Link href="/blogpost" ><img src="img/blog/inner_b2.jpeg" alt="img" /></Link>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link href="/blogpost" >
                        Tem at velit vel enim placerat fringilla.
                      </Link>
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
                    <Link href="/blogpost" >
                      <img src="img/blog/inner_b3.jpeg" alt="img" />
                    </Link>
                  </div>
                  <div className="blog-content2">
                    <h4>
                      <Link href="/blogpost" >
                        Sam at velit vel enim placerat fringilla.
                      </Link>
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
    </div>
  )
}
