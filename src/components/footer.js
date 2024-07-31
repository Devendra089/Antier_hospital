import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className={"footer"} id={"footer"}>
				<span className={"footer-left"}>
					&copy; 2024 Antier All Rights Reserved
				</span>
				<ul className={"footer-right"}>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://www.linkedin.com/company/antiersolutions/"
							target="_blank"
							aria-label="Linkedin">
							<i className={"fab fa-linkedin foot-icon"}></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://www.facebook.com/antiersolutions"
							target="_blank"
							aria-label="Facebook">
							<i className={"fab fa-facebook-f foot-icon"}></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a
							href="https://www.instagram.com/antiersolutions/"
							target="_blank"
							aria-label="Instagram">
							<i className={"fab fa-instagram foot-icon"}></i>
						</a>
					</li>
				</ul>
			</div>
			<div className={"footer-bottom"}>
				<span className={"footer-bottom-text"}>
					{/* Designed by Antier Solutions */}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
