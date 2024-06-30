import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import BodyCont from "./components/Body/Body";
import Socials from "./components/Socials/Socials";
import EmailCont from "./components/Email/Email";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<div className="w-[96vw] m-auto relative z-50 mt-2 bg-base-10 rounded-full">
			<Navbar />
		</div>
		<div className="flex flex-row">
			<div className="fixed top-0 left-0 h-full z-0">
				<Socials />
			</div>
			<div className="flex-1 ">
				<BodyCont />
			</div>
			<div className="fixed top-0 right-0 h-full z-0">
				<EmailCont />
			</div>
		</div>
	</React.StrictMode>
);
