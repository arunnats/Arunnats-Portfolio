import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import react from "../../assets/logos/icons8-react.png";
import node from "../../assets/logos/icons8-node-js.svg";
import fast from "../../assets/logos/icons8-fastapi.png";
import tailwind from "../../assets/logos/icons8-tailwind-css.svg";
import express from "../../assets/logos/icons8-express-js.svg";
import mongo from "../../assets/logos/icons8-mongodb.png";
import mysql from "../../assets/logos/icons8-mysql.png";

const Frameworks = () => {
	const sections = useRef([]);
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlFrame = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 100%",
				end: "top 80%",
				scrub: true,
				markers: false,
			},
		});

		tlFrame.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tlFrame.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<" // ensures heading animation starts immediately after section animation starts
		);

		itemsRef.current.forEach((item, index) => {
			tlFrame.fromTo(
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

		return () => tlFrame.kill();
	}, []);

	const frameData = [
		{ title: "Express.Js", icon: express },
		{ title: "React.Js", icon: react },
		{ title: "Node.js", icon: node },
		{ title: "FastAPI", icon: fast },
		{ title: "Tailwind CSS", icon: tailwind },
		{ title: "MongoDB", icon: mongo },
		{ title: "MySQL", icon: mysql },
	];

	return (
		<section id="frameworks" ref={sectionRef} className="flex flex-col p-3">
			<h2
				ref={headingRef}
				className="text-3xl font-bold font-poppins text-primary mb-8"
			>
				Frameworks and Databases I like
			</h2>
			<div className="flex flex-row justify-start m-3 max-w-[70%]">
				{frameData.map((item, index) => (
					<div
						key={index}
						ref={(el) => (itemsRef.current[index] = el)}
						className="flex flex-col items-center mx-8"
					>
						<img
							src={item.icon}
							alt={item.title}
							className="w-12 h-12 mx-2 transition-transform transform hover:translate-y-[-5px]"
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

export default Frameworks;
