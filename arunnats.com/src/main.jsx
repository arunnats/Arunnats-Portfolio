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
			<Socials />
			<BodyCont />
			<EmailCont />
		</div>
	</React.StrictMode>
);
