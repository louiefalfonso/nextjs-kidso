import React from 'react'

export default function CounterArea() {
  return (
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
  )
}
