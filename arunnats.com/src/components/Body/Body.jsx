import React from "react";
import Hero from "../Hero/Hero";
import Experience from "../Experience/Experience";
import Stack from "../Stack/Stack";

const BodyCont = () => {
	return (
		<div className="w-[90vw] m-auto bg-base-100 min-h-svh overflow-hidden">
			<div className="w-11/12 m-auto bg-base-100">
				<Hero />
				<Experience />
				<Stack />
				<div className="min-h-[99vh]"></div>
				<div className="text-9xl">aaaaaaaaaaa</div>
			</div>
		</div>
	);
};

export default BodyCont;
