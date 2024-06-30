import React from "react";
import TypedAnimation from "../Typed/Typed";

const AboutSection = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center py-10">
			<div className="w-full">
				<h4 className="text-3xl font-semibold text-center md:text-left mb-5">
					Hi, my name is Arun Natarajan.
				</h4>
				<h4 className="text-3xl font-semibold text-center md:text-left mb-5">
					<TypedAnimation />
				</h4>
				<p className="text-lg text-justify mb-5">
					I am a third-year student at{" "}
					<a
						href="https://nitc.ac.in/"
						className="text-blue-500 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						NIT Calicut
					</a>
					, pursuing Computer Science and Engineering. My passion extends to web
					development, programming, along with the domains of AI/ML and embedded
					systems. I am a writer, designer, editor, and weightlifter, blending
					together a holistic approach to both technology and well-being.
					<TypedAnimation />
				</p>
				<div className="flex justify-center md:justify-start">
					<a
						href="./public/resume/Arun-Natarajan-Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-outline-custom-color mr-4"
					>
						Resume
					</a>
					<a
						href="https://github.com/ArunNats"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./public/images/svgs/github.svg"
							alt="GitHub"
							className="h-10 mr-4"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/arun-natarajan-567539211/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./public/images/svgs/linkedin.svg"
							alt="LinkedIn"
							className="h-10 mr-4"
						/>
					</a>
					<a
						href="https://leetcode.com/u/arunnats2004/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./public/images/svgs/lc.png"
							alt="LeetCode"
							className="h-10"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
