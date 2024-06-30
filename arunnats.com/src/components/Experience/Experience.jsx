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
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>",
		},
		{
			company: "Hardware Lab, NIT Calicut",
			title: "Summer Intern",
			url: "https://hwlabnitc.github.io/",
			range: "May 2024 - June 2024",
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>",
		},
		{
			company: "Company Three",
			title: "Full Stack Developer",
			url: "https://www.companythree.com",
			range: "March 2016 - May 2018",
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>",
		},
	];

	return (
		<section id="jobs" className="relative max-w-xl mx-auto px-4 py-8">
			<h2 className="text-3xl font-bold text-center mb-8">Where I've Worked</h2>
			<div className="flex flex-col md:flex-row">
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
							className={`btn btn-outline w-full text-left py-2 px-4 ${
								activeTabId === i ? "border-l-4 border-green-500" : ""
							}`}
						>
							{job.company}
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
							<h4 className="text-2xl font-semibold mb-2">
								{job.title}
								<span className="text-green-500">
									&nbsp;@&nbsp;
									<a
										href={job.url}
										target="_blank"
										rel="nofollow noopener noreferrer"
									>
										{job.company}
									</a>
								</span>
							</h4>
							<h5 className="text-sm font-mono text-gray-600 mb-4">
								{job.range}
							</h5>
							<div
								className="text-base"
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
