import React from 'react'
import Link from 'next/link';
import BrandArea from '@/components/BrandArea';

export default function blogpost() {
  return (
    <>
        <div className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12">
                    <div className="breadcrumb-wrap text-left">
                        <div className="breadcrumb-title">
                        <h2>Blog Post</h2>
                        <div className="breadcrumb-wrap">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                            <Link href="/" >Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                            Blog Post									
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
		<div className="inner-blog b-details-p pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details-wrap">
                        <div className="details__content pb-30">
                            <h2>
                            With our vastly improved notifications system, users have more
                            control.
                            </h2>
                            <div className="meta-info">
                            <ul>
                                <li>
                                <i className="fal fa-eye" /> 100 Views
                                </li>
                                <li>
                                <i className="fal fa-comments" /> 35 Comments
                                </li>
                                <li>
                                <i className="fal fa-calendar-alt" /> 24th March 2019
                                </li>
                            </ul>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo amet set for your cool happiness for
                            lyour loyal city.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deser unt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusant ium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            asperna tur aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                            quisq.
                            </p>
                            <blockquote>
                            <footer>By Rosalina Pong</footer>
                            <h3>
                                Viral dreamcatcher keytar typewriter, aest hetic offal umami.
                                Aesthetic polaroid pug pitchfork post-ironic.
                            </h3>
                            </blockquote>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deser unt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusant.
                            </p>
                            <div className="details__content-img">
                            <img src="img/blog/b_details01.jpg" alt="" />
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deser unt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusan tium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi archi tecto beatae vitae
                            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            asperna tur aut odit aut fugit, sed quia consequuntur magni
                            dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non num quam eius modi tempora incidunt
                            ut labore et dolore magnam aliquam quaerat voluptatem. Lorem ipsum
                            dolor sit amet,consectetur adipisicing elit, sed do eiusmod
                            incididunt.
                            </p>
                            <figure>
                            <img src="img/blog/b_details02.jpeg" alt="" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut
                                enim ad minim veniam, quis nostrud exercitation ulla mco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupida tat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo.
                            </p>
                            </figure>
                            <div className="row">
                            <div className="col-xl-12 col-md-12">
                                <div className="post__tag">
                                <h5>Releted Tags</h5>
                                <ul>
                                    <li>
                                    <a href="#">organic</a>
                                    </li>
                                    <li>
                                    <a href="#">Foods</a>
                                    </li>
                                    <li>
                                    <a href="#">tasty</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <aside className="sidebar-widget">
                            <section
                                id="custom_html-5"
                                className="widget_text widget widget_custom_html"
                            >
                                <h2 className="widget-title">Follow Us</h2>
                                <div className="textwidget custom-html-widget">
                                <div className="widget-social">
                                    <a href="#">
                                    <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                    <i className="fab fa-pinterest-p" />
                                    </a>
                                    <a href="#">
                                    <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                    <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                    <i className="fab fa-wordpress" />
                                    </a>
                                </div>
                                </div>
                            </section>
                            <section id="categories-1" className="widget widget_categories">
                                <h2 className="widget-title">Categories</h2>
                                <ul>
                                <li className="cat-item cat-item-16">
                                    <a href="#">Branding</a> (4)
                                </li>
                                <li className="cat-item cat-item-23">
                                    <a href="#">Corporat</a> (3)
                                </li>
                                <li className="cat-item cat-item-18">
                                    <a href="#">Design</a> (3)
                                </li>
                                <li className="cat-item cat-item-22">
                                    <a href="#">Gallery</a> (3)
                                </li>
                                </ul>
                            </section>
                            <section id="tag_cloud-1" className="widget widget_tag_cloud">
                                <h2 className="widget-title">Tag</h2>
                                <div className="tagcloud">
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-28 tag-link-position-1"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="app (1 item)"
                                >
                                    app
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-17 tag-link-position-2"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="Branding (1 item)"
                                >
                                    Branding
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-20 tag-link-position-3"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="corporat (1 item)"
                                >
                                    corporat
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-24 tag-link-position-4"
                                    style={{ fontSize: "16.4pt" }}
                                    aria-label="Design (2 items)"
                                >
                                    Design
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-25 tag-link-position-5"
                                    style={{ fontSize: "22pt" }}
                                    aria-label="gallery (3 items)"
                                >
                                    gallery
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-26 tag-link-position-6"
                                    style={{ fontSize: "8pt" }}
                                    aria-label="video (1 item)"
                                >
                                    video
                                </a>
                                <a
                                    href="#"
                                    className="tag-cloud-link tag-link-29 tag-link-position-7"
                                    style={{ fontSize: "16.4pt" }}
                                    aria-label="web design (2 items)"
                                >
                                    web design
                                </a>
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
      <BrandArea/>
    </>
  )
}
