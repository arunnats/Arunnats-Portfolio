import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import BodyCont from "./components/Body/Body";
import Socials from "./components/Socials/Socials";
import EmailCont from "./components/Email/Email";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Navbar />
		<div className="flex flex-row">
			<div className="fixed top-0 left-0 h-full">
				<Socials />
			</div>
			<div className="flex-1 ">
				<BodyCont />
			</div>
			<div className="fixed top-0 right-0 h-full">
				<EmailCont />
			</div>
		</div>
	</React.StrictMode>
);
