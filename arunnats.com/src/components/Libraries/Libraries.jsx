import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scikit from "../../assets/logos/icons8-scikit.png";
import seaborn from "../../assets/logos/icons8-seaborn.png";
import numpy from "../../assets/logos/icons8-numpy.svg";
import pandas from "../../assets/logos/icons8-pandas.svg";
import aws from "../../assets/logos/icons8-amazon-aws.png";
import docker from "../../assets/logos/icons8-docker.png";
import git from "../../assets/logos/icons8-git.png";

const Libraries = () => {
	const sections = useRef([]);
	const sectionRef = useRef(null);
	const headingRef = useRef(null);
	const itemsRef = useRef([]);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tlLib = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 100%",
				end: "top 80%",
				scrub: true,
				markers: false,
			},
		});

		tlLib.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tlLib.fromTo(
			headingRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<" // ensures heading animation starts immediately after section animation starts
		);

		itemsRef.current.forEach((item, index) => {
			tlLib.fromTo(
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

		return () => tlLib.kill();
	}, []);

	const libData = [
		{ title: "Scikit-Learn", icon: scikit },
		{ title: "Seaborn", icon: seaborn },
		{ title: "NumPy", icon: numpy },
		{ title: "Pandas", icon: pandas },
		{ title: "Git", icon: git },
		{ title: "AWS", icon: aws },
		{ title: "Docker", icon: docker },
	];

	return (
		<section id="libraries" ref={sectionRef} className="flex flex-col p-3">
			<h2
				ref={headingRef}
				className="text-3xl font-bold font-poppins text-primary mb-8"
			>
				Libraries & Services I use
			</h2>
			<div className="flex flex-row justify-start m-3 max-w-[70%]">
				{libData.map((item, index) => (
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

export default Libraries;
