import React, { useEffect } from "react";
import Typed from "typed.js";

const TypedAnimation = () => {
	useEffect(() => {
		const options = {
			strings: [
				"web developer",
				"programmer",
				"writer",
				"FOSS enthusiast",
				"fast learner",
				"creator",
				"data scientist",
			],
			typeSpeed: 55,
			backSpeed: 30,
			loop: true,
		};

		const typed = new Typed("#typed-output", options);

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<h1 className="typed-text">
			I am a <span id="typed-output"></span>.
		</h1>
	);
};

export default TypedAnimation;
