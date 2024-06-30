import React, { useState, useEffect, useRef } from "react";

const Experience = () => {
	const [activeTabId, setActiveTabId] = useState(0);
	const [tabFocus, setTabFocus] = useState(null);
	const tabs = useRef([]);

	const focusTab = () => {
		if (tabs.current[tabFocus]) {
			tabs.current[tabFocus].focus();
		} else {
			if (tabFocus >= tabs.current.length) {
				setTabFocus(0);
			}
			if (tabFocus < 0) {
				setTabFocus(tabs.current.length - 1);
			}
		}
	};

	useEffect(() => focusTab(), [tabFocus]);

	const onKeyPressed = (e) => {
		if (e.keyCode === 38 || e.keyCode === 40) {
			e.preventDefault();
			if (e.keyCode === 40) {
				setTabFocus(tabFocus + 1);
			} else if (e.keyCode === 38) {
				setTabFocus(tabFocus - 1);
			}
		}
	};

	const data = [
		{
			company: "CoreStack",
			title: "SWE Summer Intern",
			url: "https://www.corestack.io/",
			range: "May 2024 - July 2024",
			html: `
			<ul className="list-disc">
				<li>• Developed data generation programs for Azure CSP schema with over 50 correlated fields.</li>
				<li>• Created programs to randomly generate data and estimate user service billing costs.</li>
				<li>• Implemented FastAPI servers for API endpoints handling billing details, product codes, and date ranges, with data hosted on MongoDB.</li>
				<li>• Enabled pagination with token generation for efficient data retrieval and server caching.</li>
			</ul>
		`,
			buttonText: "CoreStack",
		},
		{
			company: "Hardware Lab NITC",
			title: "Summer Intern",
			url: "https://hwlabnitc.github.io/",
			range: "May 2024 - June 2024",
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>",
			buttonText: "HW Lab NITC",
		},
	];

	return (
		<section id="jobs" className="flex flex-col p-3 py-8">
			<h2 className="text-3xl font-bold font-poppins text-primary mb-8">
				Where I've Worked
			</h2>
			<div className="flex flex-col md:flex-row max-w-[75%]">
				<div
					role="tablist"
					aria-label="Job tabs"
					onKeyDown={onKeyPressed}
					className="flex flex-col md:mr-8 mb-6 md:mb-0"
				>
					{data.map((job, i) => (
						<button
							key={i}
							isActive={activeTabId === i}
							onClick={() => setActiveTabId(i)}
							ref={(el) => (tabs.current[i] = el)}
							id={`tab-${i}`}
							role="tab"
							aria-selected={activeTabId === i ? true : false}
							aria-controls={`panel-${i}`}
							tabIndex={activeTabId === i ? "0" : "-1"}
							className={`btn-square btn-ghost w-full text-left py-2 px-4 min-w-[150px] ${
								activeTabId === i
									? "border-l-4 border-t-0 border-b-0 border-r-0 border-primary"
									: "border-l-4 border-t-0 border-b-0 border-r-0 border-secondary-content"
							}`}
						>
							{job.buttonText}
						</button>
					))}
				</div>

				<div className="relative w-full">
					{data.map((job, i) => (
						<div
							key={i}
							isActive={activeTabId === i}
							id={`panel-${i}`}
							role="tabpanel"
							aria-labelledby={`tab-${i}`}
							tabIndex={activeTabId === i ? "0" : "-1"}
							hidden={activeTabId !== i}
							className="relative"
						>
							<h4 className="text-3xl font-bold text-primary-content font-poppins mb-2">
								{job.title}
								<span className="text-primary ">
									&nbsp;at&nbsp;
									<a
										href={job.url}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="underline"
									>
										{job.company}
									</a>
								</span>
							</h4>
							<h5 className="text-xl font-roboto font-bold text-primary mb-4">
								{job.range}
							</h5>
							<div
								className="font-roboto text-lg text-primary text-justify"
								dangerouslySetInnerHTML={{ __html: job.html }}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
