import React from "react";
import Hero from "../Hero/Hero";

const BodyCont = () => {
	return (
		<div className="w-[90vw] m-auto bg-base-100 min-h-svh overflow-hidden">
			<div className="w-11/12 m-auto bg-base-100">
				<Hero />
				<div className="min-h-[99vh]"></div>
				<div className="text-9xl">aaaaaaaaaaa</div>
			</div>
		</div>
	);
};

export default BodyCont;
