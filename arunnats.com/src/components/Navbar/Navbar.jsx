import React from "react";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 max-h-[70px]">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Arun Natarajan</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal flex justify-center px-1">
					<li className="justify-center">
						<a href="#about">About</a>
					</li>
					<li className="justify-center">
						<a href="#experience">Experience</a>
					</li>
					<li className="justify-center">
						<a href="#projects">Projects</a>
					</li>
					<li className="justify-center">
						<a href="#contact">Contact</a>
					</li>
					<li className="justify-center">
						<a href="">
							<button className="btn ghost btn-outline btn-md">Resume</button>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
