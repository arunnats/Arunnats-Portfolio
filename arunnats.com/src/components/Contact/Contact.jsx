import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Languages = () => {
	return (
		<section id="contact" className="flex flex-col p-3">
			<h2 className="text-3xl font-bold font-poppins text-primary mb-2">
				Reach me at
			</h2>
			<div className="flex flex-row justify-start m-3 max-w-[70%] ">
				<h1>Mail me at</h1>
				<a href="">
					<h1>arunnats2004@gmail.com</h1>
				</a>
			</div>
		</section>
	);
};

export default Languages;
