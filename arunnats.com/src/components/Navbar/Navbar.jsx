import React from "react";
import useScrollDirection from "../../hooks/useScrollDirection";

const Navbar = () => {
	const scrollDirection = useScrollDirection();

	return (
		<div
			className={`navbar bg-base-100 fixed top-0 w-full transition-transform duration-300 z-50 ${
				scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			<div className="flex-1">
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Link</a>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="bg-base-100 rounded-t-none p-2">
								<li>
									<a>Link 1</a>
								</li>
								<li>
									<a>Link 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
