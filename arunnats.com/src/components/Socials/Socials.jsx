import React from "react";
import leetcode from "../../assets/logos/icons8-leetcode.png";
import linkedin from "../../assets/logos/icons8-linkedin.svg";
import github from "../../assets/logos/icons8-github.svg";

const Socials = () => {
	return (
		<div className="w-[6vw] h-screen bg-white flex flex-col justify-end items-center pl-4">
			<a href="https://www.linkedin.com/in/arunnats/">
				<img src={linkedin} alt="LinkedIn" className="w-8 h-8 m-2" />
			</a>
			<a href="https://github.com/ArunNats">
				<img src={github} alt="GitHub" className="w-8 h-8 m-2" />
			</a>
			<a href="https://leetcode.com/u/arunnats2004/">
				<img src={leetcode} alt="LeetCode" className="w-8 h-8 m-2" />
			</a>

			<div className=" w-full flex justify-center">
				<div className=" bottom-0 h-[11vh] w-0.5 bg-gray-800 "></div>
			</div>
		</div>
	);
};

export default Socials;
