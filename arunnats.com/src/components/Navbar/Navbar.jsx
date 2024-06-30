import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
	const logoRef = useRef(null);
	const menuItemsRef = useRef([]);

	useEffect(() => {
		gsap.fromTo(
			logoRef.current,
			{ y: -30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out" }
		);

		gsap.fromTo(
			menuItemsRef.current,
			{ y: -30, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.1 }
		);
	}, []);

	return (
		<div className="navbar bg-base-100 max-h-[70px]">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Arun Natarajan</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal flex justify-center px-1">
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a ref={(el) => (menuItemsRef.current[0] = el)} href="#about">
							About
						</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a ref={(el) => (menuItemsRef.current[1] = el)} href="#experience">
							Experience
						</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a ref={(el) => (menuItemsRef.current[2] = el)} href="#projects">
							Projects
						</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a ref={(el) => (menuItemsRef.current[3] = el)} href="#contact">
							Contact
						</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a ref={(el) => (menuItemsRef.current[4] = el)} href="">
							<button className="btn btn-outline btn-md font-bold text-md text-secondary font-space">
								Resume
							</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
