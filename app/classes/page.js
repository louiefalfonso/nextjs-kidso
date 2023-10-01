import BrandArea from '@/components/BrandArea';
import ClassArea from '@/components/ClassArea';
import Link from 'next/link';

export default function classes() {
	return (
	<>
		<div className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: "url(img/bg/bdrc-bg.jpg)" }}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-12 col-lg-12">
						<div className="breadcrumb-wrap text-left">
							<div className="breadcrumb-title">
								<h2>Classes</h2>
								<div className="breadcrumb-wrap">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/" >Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Classes</li>
									</ol>
								</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ClassArea/>
		<BrandArea/>
	</>
	)
};
