import React from "react";
import TypedAnimation from "../Typed/Typed";

const AboutSection = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center p-3 py-12">
			<div className="w-full">
				<h4 className="text-2xl font-semibold text-left mb-3">
					Hi, my name is
				</h4>
				<h1 className="text-8xl font-bold text-left mb-2"> Arun Natarajan.</h1>
				<h4 className="text-6xl font-bold text-left mb-3">
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
				</p>
			</div>
		</div>
	);
};

export default AboutSection;
