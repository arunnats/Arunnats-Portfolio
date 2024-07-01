import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import c from "../../assets/logos/icons8-c.svg";
import cpp from "../../assets/logos/icons8-cpp.svg";
import python from "../../assets/logos/icons8-python.svg";
import js from "../../assets/logos/icons8-javascript.svg";
import bash from "../../assets/logos/icons8-batch.png";

const Languages = () => {
	const sections = useRef([]);
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlLang = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 100%",
				end: "top 80%",
				scrub: true,
				markers: false,
			},
		});

		tlLang.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tlLang.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<" // ensures heading animation starts immediately after section animation starts
		);

		itemsRef.current.forEach((item, index) => {
			tlLang.fromTo(
				item,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: "power2.out",
					delay: index * 0.1,
				},
				"<" // ensures items animate after heading animation starts
			);
		});

		return () => tlLang.kill();
	}, []);

	const langData = [
		{ title: "C", icon: c },
		{ title: "C++", icon: cpp },
		{ title: "Python", icon: python },
		{ title: "JavaScript", icon: js },
		{ title: "Shell Script", icon: bash },
	];

	return (
		<section id="languages" ref={sectionRef} className="flex flex-col p-3">
			<h2
				ref={headingRef}
				className="text-3xl font-bold font-poppins text-primary mb-8"
			>
				Languages I speak
			</h2>
			<div className="flex flex-row justify-start m-3 max-w-[70%] ">
				{langData.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemsRef.current[index] = el)}
						className="flex flex-col items-center mx-8 "
					>
						<img
							src={item.icon}
							alt={item.title}
							className="w-12 h-12 mx-2 transition-transform -transform hover:translatey-[-5px]"
						/>
						<h3 className="text-lg font-semibold mt-2 text-secondary">
							{item.title}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
};

export default Languages;
