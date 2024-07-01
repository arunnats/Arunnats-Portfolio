import React, { useEffect, useRef } from "react";
import picture from "../../assets/images/pfp.svg";
import leetcode from "../../assets/logos/icons8-leetcode.png";
import linkedin from "../../assets/logos/icons8-linkedin.svg";
import github from "../../assets/logos/icons8-github.svg";
import TypedAnimation from "../Typed/Typed";
import { gsap } from "gsap";

const AboutSection = () => {
	const hiRef = useRef(null);
	const picRef = useRef(null);
	const nameRef = useRef(null);
	const typedTextRef = useRef(null);
	const descriptionRef = useRef(null);
	const logosRef = useRef([]);

	useEffect(() => {
		gsap.fromTo(
			hiRef.current,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
		);
		gsap.fromTo(
			nameRef.current,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4 }
		);
		gsap.fromTo(
			picRef.current,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.4 }
		);
		gsap.fromTo(
			typedTextRef.current,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 }
		);
		gsap.fromTo(
			descriptionRef.current,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
		);
		gsap.fromTo(
			logosRef.current,
			{ y: 50, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.out",
				delay: 0.9,
				stagger: 0.1,
			}
		);
	}, []);

	return (
		<div className="flex flex-col md:flex-row items-center p-3 py-6">
			<div className="w-4/6 2xl:w-2/3 mt-10">
				<h4
					ref={hiRef}
					className="2xl:text-3xl text-1xl font-semibold text-primary-content font-poppins text-left mb-2"
				>
					Hi, my name is
				</h4>
				<h1
					ref={nameRef}
					className="2xl:text-8xl text-7xl font-poppins font-bold text-left mb-2"
				>
					{" "}
					Arun Natarajan.
				</h1>
				<h4
					ref={typedTextRef}
					className="2xl:text-7xl text-5xl font-bold text-primary-content font-poppins text-left mb-3"
				>
					<TypedAnimation />
				</h4>
				<p
					ref={descriptionRef}
					className="2xl:text-3xl md:text-lg text-primary font-roboto text-justify mb-5"
				>
					I am a year three student at{" "}
					<a
						href="https://nitc.ac.in/"
						className="text-accent font-bold font-roboto"
						target="_blank"
						rel="noopener noreferrer"
					>
						NIT Calicut
					</a>
					, doing Computer Science and Engineering. I build websites, train AI
					models and do data science. I'm also a writer, designer and amateur
					powerlifter! Learn more about me at:
				</p>
				<ul className="flex flex-row">
					<li>
						<a href="https://www.linkedin.com/in/arunnats/">
							<img
								ref={(el) => (logosRef.current[0] = el)}
								src={linkedin}
								alt="LinkedIn"
								className="w-12 h-12 m-3"
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/ArunNats">
							<img
								ref={(el) => (logosRef.current[1] = el)}
								src={github}
								alt="GitHub"
								className="w-12 h-12 m-3"
							/>
						</a>
					</li>
					<li>
						<a href="https://leetcode.com/u/arunnats2004/">
							<img
								ref={(el) => (logosRef.current[2] = el)}
								src={leetcode}
								alt="LeetCode"
								className="w-12 h-12 m-3"
							/>
						</a>
					</li>
					<li className="m-3 my-auto">
						<button
							ref={(el) => (logosRef.current[3] = el)}
							className="btn btn-ghost btn-outline text-primary font-poppins"
						>
							{" "}
							Resume
						</button>
					</li>
				</ul>
			</div>
			<div className="w-2/6 2xl:w-1/3">
				<img
					ref={picRef}
					src={picture}
					alt="Profile"
					className="w-[90%] m-auto h-auto p-7"
				/>
			</div>
		</div>
	);
};

export default AboutSection;
