import React from "react";

const Footer = () => {
	return (
		<footer className="footer footer-left bg-base-100 text-base-content p-4 my-5">
			<aside>
				<p className="text-sm font-poppins text-black font-semibold">
					Copyright © {new Date().getFullYear()} - All right reserved by Arun
					Natarajan
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
