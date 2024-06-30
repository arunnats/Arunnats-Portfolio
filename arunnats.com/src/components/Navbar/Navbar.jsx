import React from "react";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 max-h-[70px]">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Arun Natarajan</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal flex justify-center px-1">
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a href="#about">About</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a href="#experience">Experience</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a href="#projects">Projects</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a href="#contact">Contact</a>
					</li>
					<li className="justify-center font-bold text-md text-secondary font-space">
						<a href="">
							<button className="btn  btn-outline btn-md font-bold text-md text-secondary font-space">
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
