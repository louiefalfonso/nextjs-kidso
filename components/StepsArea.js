import React from 'react'

export default function StepsArea() {
  return (
    <div className="steps-area fix p-relative" style={{ backgroundColor: "#12265a" }}>
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
    </div>
  )
}
