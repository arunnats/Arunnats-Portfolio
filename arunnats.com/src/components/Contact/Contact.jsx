import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Languages = () => {
	const sectionRef = useRef(null);
	const mailRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 85%",
				end: "top 65%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			mailRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
		);
	}, []);

	return (
		<section
			ref={sectionRef}
			id="contact"
			className="flex flex-col p-3 bg-base-100 min-h-[40vh]"
		>
			<h2 className="text-3xl font-bold font-poppins text-primary mb-1">
				Reach me at
			</h2>
			<div className="flex flex-row items-center m-3 max-w-[70%]">
				<h1 className=" text-secondary text-xl font-poppins mt-2">
					Send me an email at
				</h1>
				<a
					ref={mailRef}
					href="mailto:arunnats2004@gmail.com"
					className="ml-2 text-3xl font-space font-bold text-primary hover:underline "
				>
					arunnats2004@gmail.com
				</a>
			</div>
			<h1 className="m-3 max-w-[80%]  text-secondary text-xl font-poppins mt-1">
				and lets discuss how we can take over the world with sentient robot
				cats.
			</h1>
		</section>
	);
};

export default Languages;
