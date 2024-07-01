import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import githubIcon from "../../assets/logos/icons8-github.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
	const [showMore, setShowMore] = useState(false);
	const projectsRef = useRef(null);
	const titleRef = useRef(null);
	const revealProjects = useRef([]);

	const GRID_LIMIT = 3; // Maximum projects to show initially
	const projects = [
		{
			frontmatter: {
				title: "Harvest Buddy",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["React.js", "Tailwind CSS", "DaisyUI"],
			},
			github: "https://github.com/example/project1",
		},
		{
			frontmatter: {
				title: "Youtube Video Converter",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["Vue.js", "Express.js", "MongoDB"],
			},
			github: "https://github.com/example/project2",
		},
		{
			frontmatter: {
				title: "Instagram Likes Analyser",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["Vue.js", "Express.js", "MongoDB"],
			},
			github: "https://github.com/example/project2",
		},
		{
			frontmatter: {
				title: "Minutes Maker",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["Vue.js", "Express.js", "MongoDB"],
			},
			github: "https://github.com/example/project2",
		},
		{
			frontmatter: {
				title: "FairPlay",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["Vue.js", "Express.js", "MongoDB"],
			},
			github: "https://github.com/example/project2",
		},
		{
			frontmatter: {
				title: "StoryGPT",
				html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
				tech: ["Vue.js", "Express.js", "MongoDB"],
			},
			github: "https://github.com/example/project2",
		},
	];

	const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: projectsRef.current,
				start: "top 90%",
				end: "top 65%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			projectsRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			titleRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" },
			"<"
		);

		revealProjects.current.forEach((item, index) => {
			tl.fromTo(
				item,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
				`<${index * 0.2}`
			);
		});
	}, []);

	return (
		<section className="py-3 bg-base-100 p-3">
			<h2
				ref={titleRef}
				className="text-3xl font-bold font-poppins text-primary mb-8"
			>
				Other Projects
			</h2>
			<div ref={projectsRef} className="container mx-auto px-4">
				<div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{projectsToShow.map(({ frontmatter, github }, i) => (
						<div
							key={i}
							ref={(el) => (revealProjects.current[i] = el)}
							className="text-primary p-6 rounded-md transition-transform transform hover:translate-y-[-5px]"
						>
							<div className="flex justify-start items-center mb-2">
								<a
									className="mr-2"
									href={github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={githubIcon} alt="Folder Icon" className="w-8 h-8" />
								</a>
								<a
									className="mx-2"
									href={github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="btn btn-outline btn-sm">Visit</button>
								</a>
							</div>
							<div className="flex">
								<a
									href={github}
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="text-primary font-poppins font-semibold text-lg hover:text-secondary"
								>
									{frontmatter.title}
								</a>
							</div>
							<div
								className="text-lg leading-relaxed mb-4 font-roboto text-secondary text-justify"
								dangerouslySetInnerHTML={{ __html: frontmatter.html }}
							/>
							{frontmatter.tech && (
								<ul className="flex flex-wrap mb-4">
									{frontmatter.tech.map((item, i) => (
										<li
											key={i}
											className="text-sm font-space font-bold text-secondary mr-2 mb-1"
										>
											{item}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				<button
					onClick={() => setShowMore(!showMore)}
					className="btn btn-outline btn-md btn-primary font-poppins mt-8 mx-auto block"
				>
					Show {showMore ? "Less" : "More"}
				</button>
			</div>
		</section>
	);
};

Projects.propTypes = {
	// No props required
};

export default Projects;
