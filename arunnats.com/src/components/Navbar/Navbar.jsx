import React from "react";

const Navbar = () => {
	return (
		<div className="navbar bg-white ">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">Arun Natarajan</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Experience</a>
					</li>
					<li>
						<a>Projects</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
					<li>
						{" "}
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
