import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EmailCont = () => {
	const emailRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			emailRef.current,
			{ y: "100%", opacity: 0 },
			{
				y: "0%",
				opacity: 1,
				scrollTrigger: {
					trigger: emailRef.current,
					start: "top 95%", // when the top of the element is at the bottom of the viewport
					end: "top 25%", // when the top of the element is 80% from the top of the viewport
					scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
				},
				duration: 1,
				ease: "power2.out",
			}
		);
	}, []);

	return (
		<div
			ref={emailRef}
			className="w-[5vw] h-screen bg-base-100 flex flex-col justify-end items-center pr-4 sm:pr-2"
		>
			<a
				className="text-black transform font-poppins rotate-90 text-xl mb-32"
				href="mailto:arunnats2004@gmail.com"
			>
				arunnats2004@gmail.com
			</a>
			<div className="w-full flex justify-center">
				<div className="bottom-0 h-[8vh] w-0.5 bg-gray-800"></div>
			</div>
		</div>
	);
};

export default EmailCont;
