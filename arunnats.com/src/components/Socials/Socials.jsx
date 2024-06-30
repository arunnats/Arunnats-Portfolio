import React, { useEffect, useRef } from "react";
import leetcode from "../../assets/logos/icons8-leetcode.png";
import linkedin from "../../assets/logos/icons8-linkedin.svg";
import github from "../../assets/logos/icons8-github.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Socials = () => {
	const socialsRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			socialsRef.current,
			{ y: "100%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				scrollTrigger: {
					trigger: socialsRef.current,
					start: "top 95%", // when the top of the element is at the bottom of the viewport
					end: "top 30%", // when the top of the element is 80% from the top of the viewport
					scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				},
				duration: 1,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<div
			ref={socialsRef}
			className="w-[5vw] h-screen bg-base-100 flex flex-col justify-end items-center pl-4"
		>
			<a href="https://www.linkedin.com/in/arunnats/">
				<img src={linkedin} alt="LinkedIn" className="w-8 h-8 m-2" />
			</a>
			<a href="https://github.com/ArunNats">
				<img src={github} alt="GitHub" className="w-8 h-8 m-2" />
			</a>
			<a href="https://leetcode.com/u/arunnats2004/">
				<img src={leetcode} alt="LeetCode" className="w-8 h-8 m-2" />
			</a>
			<div className="w-full flex justify-center">
				<div className="bottom-0 h-[11vh] w-0.5 bg-gray-800"></div>
			</div>
		</div>
	);
};

export default Socials;
