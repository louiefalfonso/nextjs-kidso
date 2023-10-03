import React from 'react'
import Link from 'next/link';
import ContactArea from '@/components/ContactArea';

export default function contact() {
  return (
    <>
      <div className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-12 col-lg-12">
						<div className="breadcrumb-wrap text-left">
							<div className="breadcrumb-title">
								<h2>Contact Us</h2>
								<div className="breadcrumb-wrap">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/" >Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
									</ol>
								</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		  </div>
      <div id="contact" className="contact-area after-none contact-bg pt-90 pb-30" style={{ background: "#12275e" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-info">
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-map" />
                  </div>
                  <h5>Office Address</h5>
                  <p>
                    3 Perkins Square, London<br/> SE1 9HU
                  </p>
                </div>
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-clock" />
                  </div>
                  <h5>Working Hours</h5>
                  <p>
                    Monday to Friday 09:00 to 18:30
                    Saturday 15:30
                  </p>
                </div>
                <div
                  className="single-cta pb-30 mb-30 wow fadeInUp animated"
                  data-animation="fadeInDown animated"
                  data-delay=".2s"
                >
                  <div className="f-cta-icon">
                    <i className="far fa-envelope-open" />
                  </div>
                  <h5>Message Us</h5>
                  <p>
                    {" "}
                    <a href="#">support@example.com</a>
                    <br />
                    <a href="#">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map fix" style={{ background: "#f5f5f5" }}>
        <div className="container-flud">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3717545372792!2d-0.09376989999999999!3d51.506395399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760357d8109e77%3A0xa50b0b9280e8ac8a!2sLittle%20Angels%20Nursery!5e0!3m2!1sen!2suk!4v1696366343663!5m2!1sen!2suk"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <ContactArea/>
    </>
  )
}
