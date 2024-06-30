import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Featured = () => {
	const revealTitle = useRef(null);
	const revealProjects = useRef([]);
	useEffect(() => {
		// Replace with your reveal logic if needed
	}, []);

	// Sample data
	const featuredProjects = [
		{
			frontmatter: {
				external: "https://example.com/project1",
				title: "Project 1",
				tech: ["React.js", "Node.js", "GraphQL"],
				github: "https://github.com/example/project1",
				cover: {
					src: "https://via.placeholder.com/600x400",
					alt: "Project 1 Image",
				},
			},
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		},
		{
			frontmatter: {
				external: "https://example.com/project2",
				title: "Project 2",
				tech: ["Vue.js", "Express.js", "MongoDB"],
				github: "https://github.com/example/project2",
				cover: {
					src: "https://via.placeholder.com/600x400",
					alt: "Project 2 Image",
				},
			},
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		},
		// Add more projects as needed
	];

	return (
		<section id="projects" className="py-12 bg-white">
			<div className="container mx-auto px-4">
				<h2 ref={revealTitle} className="text-4xl font-bold text-primary mb-8">
					Some Things I've Built
				</h2>

				<div>
					{featuredProjects.map(({ frontmatter, html }, i) => (
						<div
							key={i}
							ref={(el) => (revealProjects.current[i] = el)}
							className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8"
						>
							<div className="col-span-6 md:col-span-5">
								<div className="relative">
									<a
										href={
											frontmatter.external
												? frontmatter.external
												: frontmatter.github
												? frontmatter.github
												: "#"
										}
										target="_blank"
										rel="nofollow noopener noreferrer"
									>
										<img
											src={frontmatter.cover.src}
											alt={frontmatter.cover.alt}
											className="rounded-lg"
										/>
									</a>
								</div>
							</div>

							<div className="col-span-6 md:col-span-7">
								<div className="bg-lightNavy text-lightSlate p-6 rounded-lg shadow-lg">
									<h4 className="text-smish font-mono text-green mb-2">
										Featured Project
									</h4>
									<h5 className="text-2xl md:text-3xl text-lightestSlate mb-4">
										{frontmatter.external ? (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="hover:text-primary"
											>
												{frontmatter.title}
											</a>
										) : (
											frontmatter.title
										)}
									</h5>
									<div
										className="text-lg leading-relaxed mb-4"
										dangerouslySetInnerHTML={{ __html: html }}
									/>
									{frontmatter.tech && (
										<ul className="flex flex-wrap mb-4">
											{frontmatter.tech.map((tech, i) => (
												<li
													key={i}
													className="font-mono text-smish text-green mr-4 mb-2 whitespace-nowrap"
												>
													{tech}
												</li>
											))}
										</ul>
									)}
									<div className="flex items-center">
										{frontmatter.github && (
											<a
												href={frontmatter.github}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="text-lightestSlate hover:text-primary mr-4"
												aria-label="GitHub Link"
											></a>
										)}
										{frontmatter.external && (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="text-lightestSlate hover:text-primary"
												aria-label="External Link"
											></a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Featured.propTypes = {
	data: PropTypes.array.isRequired, // Adjust PropTypes if needed
};

export default Featured;
