import React from 'react'

export default function VideoArea() {
  return (
    <div id="vedio" className="vedio-area pt-120 pb-90 fix">
        <div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title center-align text-center mb-15">
					<h5>Watch Us</h5>
					<h2>Start Growing With Community</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12">
					<div
						className="video-img wow fadeInRight animated"
						data-animation="fadeInDown animated"
						data-delay=".2s"
						style={{
							backgroundImage: "url(img/bg/vedio-img.png)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center"
						}}
						>
						<a
							href="https://www.youtube.com/watch?v=gyGsPlt06bo"
							className="video-i popup-video"
						>
							<i className="far fa-play" />
						</a>
					</div>
				</div>
			</div>
  		</div>
    </div>
  )
}
