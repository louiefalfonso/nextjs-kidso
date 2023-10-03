import React from 'react'
import Link from 'next/link';
import BrandArea from '@/components/BrandArea';

export default function services() {
  return (
    <>
      <div className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="breadcrumb-wrap text-left">
                <div className="breadcrumb-title">
                  <h2>Services</h2>
                  <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/" >Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services									
                    </li>
                    </ol>
                  </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		  </div>
		  <div className="about-area5 about-p pt-120 pb-90 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 order-2">
              <aside className="sidebar services-sidebar">
              <div className="sidebar-widget categories">
                <div className="widget-content">
                
                <ul className="services-categories">
                  <li>
                  <a href="services-detail.html">All Services</a>
                  </li>
                  <li className="active">
                  <a href="service-detail.html">Nanny/Home Childcarers</a>
                  </li>
                  <li>
                  <a href="services-detail.html">Day Nurseries</a>
                  </li>
                  <li>
                  <a href="services-detail.html">Private Nursery Schools</a>
                  </li>
                  <li>
                  <a href="services-detail.html">Maintained Nursery Schools</a>
                  </li>
                  <li>
                  <a href="services-detail.html">Pre-schools and playgroups</a>
                  </li>
                  <li>
                  <a href="services-detail.html">Independent Schools</a>
                  </li>
                </ul>
                </div>
              </div>
              
              <div className="brochures-box">
                <div className="inner">
                <h4>Download Brochures</h4>
                <div className="text">
                  Pleasure and praising pain was born and I will give you a
                  complete account.
                </div>
                <a className="theme-btn btn-style-one" href="#">
                  <span className="btn-title">
                  <i className="fa fa-file-pdf" /> Info Company
                  </span>
                </a>
                <a className="theme-btn btn-style-one" href="#">
                  <span className="btn-title">
                  <i className="fa fa-file-pdf" /> Brochure Newest
                  </span>
                </a>
                </div>
              </div>
              </aside>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 order-1">
              <div className="service-detail">
              <div className="content-box">
                <div className="mb-30">
                <img src="img/blog/inner_b1.jpg" alt="inner_b1" />
                </div>
                <h2> We give the best Services </h2>
                <p>
                Pleasure and praising pain was born and I will give you a complete
                account of the systems, and expound the actually teachings of the
                great explorer of the truth, the master-builder of human uts
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally Nor who loves or pursues or desires to
                obtain pain of itself.
                </p>
                
                <div className="two-column">
                <div className="row">
                  <div className="image-column col-xl-6 col-lg-12 col-md-12">
                  <figure className="image">
                    <img src="img/features/post-img-1.jpg" alt="" />
                  </figure>
                  </div>
                  <div className="text-column col-xl-6 col-lg-12 col-md-12">
                  <p>
                    Builds and finances utility scale solar and storage projects
                    throughout the United States. We specialize in developing
                    renewable solutions to suit the specific needs of large
                    investor owned utilities.
                  </p>
                  <ul className="list-style-one">
                    <li>Engine oil level should be regularly</li>
                    <li>Tyres have a minimum of 1.6mm of tread</li>
                    <li>Ensure that the electrolyte level is correct</li>
                    <li>Never remove the radiator when the</li>
                  </ul>
                  </div>
                </div>
                </div>
                <h3>Why Choose This Service</h3>
                <p>
                Complete account of the systems and expound the actually teachings
                of the great explorer of the truth, the master-builder of human
                uts happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not know
                how to pursue pleasure rationally encounter consequences that are
                extremely.
                </p>
                <p>
                Complete account of the systems and expound the actually teachings
                of the great explorer of the truth, the master-builder of human
                uts happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not know
                how to pursue pleasure rationally.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
		  </div>
      <BrandArea/>
    </>
  )
}
