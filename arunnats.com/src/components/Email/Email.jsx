import React from "react";

const EmailCont = () => {
	return (
		<div className="w-[5vw] h-screen bg-base-100 flex flex-col justify-end items-center pr-4">
			<a
				className="text-black transform font-poppins rotate-90 text-xl mb-32"
				href="mailto:arunnats2004@gmail.com"
			>
				arunnats2004@gmail.com
			</a>
			<div className=" w-full flex justify-center">
				<div className=" bottom-0 h-[8vh] w-0.5 bg-gray-800 "></div>
			</div>
		</div>
	);
};

export default EmailCont;
