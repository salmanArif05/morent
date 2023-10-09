import React from "react";
import "./style.css";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-4">
							<div className="foot-logo">MORENT</div>
							<p className="foot-para">Our vision is to provide convenience and help increase your sales business.</p>
						</div>
						<div className="col-lg-6 offset-lg-2 mt-4 mt-lg-0">
							<div className="row">
								<div className="col-lg-4 col-6">
									<div className="foot-link-heading">About</div>
									<ul className="foot-links">
										<li>
											<a href="#">How it works</a>
										</li>
										<li>
											<a href="#">Featured</a>
										</li>
										<li>
											<a href="#">Partnership</a>
										</li>
										<li>
											<a href="#">Business Relation</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-6">
									<div className="foot-link-heading">Community</div>
									<ul className="foot-links">
										<li>
											<a href="#">Events</a>
										</li>
										<li>
											<a href="#">Blog</a>
										</li>
										<li>
											<a href="#">Podcast</a>
										</li>
										<li>
											<a href="#">Invite a friend</a>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-6 mt-4 mt-lg-0">
									<div className="foot-link-heading">Socials</div>
									<ul className="foot-links">
										<li>
											<a href="#">Discord</a>
										</li>
										<li>
											<a href="#">Instagram</a>
										</li>
										<li>
											<a href="#">Twitter</a>
										</li>
										<li>
											<a href="#">Facebook</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-5" />
					<div className="sub-foot d-flex flex-column flex-lg-row align-items-lg-center justify-content-between">
						<div className="fs-16 fw-600 order-2 order-lg-1 mt-4 mt-lg-0">©2023 MORENT. All rights reserved</div>
						<div className="d-flex gap-5 order-1 order-lg-2 justify-content-between">
							<a href="#" className="d-inline-block fs-16 fw-600">
								Privacy & Policy
							</a>
							<a href="#" className="d-inline-block fs-16 fw-600">
								Terms & Condition
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
