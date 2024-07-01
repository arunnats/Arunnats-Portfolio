import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import resume from "../../assets/resume/Arun-Natarajan-Resume.pdf";
import { Link } from "react-scroll";

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
			<div className="flex-1" ref={logoRef}>
				<a className="btn btn-ghost font-poppins text-2xl">Arun Natarajan</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal flex justify-center px-1">
					<li className="justify-center font-bold text-md text-secondary font-space">
						<Link
							to="experience"
							spy={true}
							smooth={true}
							offset={-70} // Adjust offset as needed to accommodate fixed navbar height
							duration={500}
						>
							Experience
						</Link>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<Link
							to="skills"
							spy={true}
							smooth={true}
							offset={-70} // Adjust offset as needed
							duration={580}
						>
							Skills
						</Link>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-70} // Adjust offset as needed
							duration={680}
						>
							Projects
						</Link>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-70} // Adjust offset as needed
							duration={950}
						>
							Contact
						</Link>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a
							ref={(el) => (menuItemsRef.current[4] = el)}
							href={resume}
							target="_blank"
						>
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
