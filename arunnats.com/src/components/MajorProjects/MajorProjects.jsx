import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "../../assets/logos/icons8-github.svg";
import flix from "../../assets/images/projects/flix.png";
import movieMatch from "../../assets/images/projects/movieMatch.png";
import bookMate from "../../assets/images/projects/bookMate.png";

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {
	const revealTitle = useRef(null);
	const sectionRef = useRef(null);
	const revealProjects = useRef([]);

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 90%",
				end: "top 65%",
				scrub: true,
				markers: false,
			},
		});

		tl.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);

		tl.fromTo(
			revealTitle.current,
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

		return () => tl.kill();
	}, []);

	// Sample data
	const featuredProjects = [
		{
			frontmatter: {
				external: "",
				title: "Book Mate",
				tech: ["Vue.js", "Express.js", "MongoDB"],
				github: "https://github.com/arunnats/BookMate",
				cover: {
					src: bookMate,
					alt: "Book Mate",
				},
			},
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		},
		{
			frontmatter: {
				external: "",
				title: "FLiX",
				tech: ["React.js", "Node.js", "GraphQL"],
				github: "https://github.com/arunnats/Flix",
				cover: {
					src: flix,
					alt: "Flix",
				},
			},
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		},
		{
			frontmatter: {
				external: "",
				title: "Movie Match",
				tech: ["React.js", "Node.js", "GraphQL"],
				github: "https://github.com/arunnats/movie-match",
				cover: {
					src: movieMatch,
					alt: "Movie Match",
				},
			},
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
		},
	];

	return (
		<section ref={sectionRef} id="projects" className="py-3 bg-base-100 p-3">
			<h2
				ref={revealTitle}
				className="text-3xl font-bold font-poppins text-primary mb-8"
			>
				Some Things I've Built
			</h2>
			<div className="container mx-auto px-4">
				<div>
					{featuredProjects.map(({ frontmatter, html }, i) => (
						<div
							key={i}
							ref={(el) => (revealProjects.current[i] = el)}
							className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-8"
						>
							<div className="col-span-7 md:col-span-6 my-auto relative group">
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
									className="block"
								>
									<img
										src={frontmatter.cover.src}
										alt={frontmatter.cover.alt}
										className="w-full"
									/>
									<div className="absolute inset-0 bg-secondary-content opacity-60 group-hover:opacity-20 transition-opacity duration-300 border-l-4"></div>
								</a>
							</div>

							<div className="col-span-5 md:col-span-6">
								<div className="bg-lightNavy text-lightSlate p-6 border-r-4 border-secondary-content">
									<h4 className="text-smish font-space font-bold text-secondary mb-2">
										Featured Project
									</h4>
									<h5 className="text-2xl md:text-3xl text-primary font-poppins font-semibold mb-4">
										{frontmatter.external ? (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="hover:text-secondary"
											>
												{frontmatter.title}
											</a>
										) : (
											frontmatter.title
										)}
									</h5>
									<div
										className="text-lg leading-relaxed font-roboto mb-4 text-justify"
										dangerouslySetInnerHTML={{ __html: html }}
									/>
									{frontmatter.tech && (
										<ul className="flex flex-wrap mb-4">
											{frontmatter.tech.map((tech, i) => (
												<li
													key={i}
													className="font-space font-semibold text-smish text-secondary mr-4 mb-2 whitespace-nowrap"
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
											>
												<img className="w-12 h-12" src={github} alt="GitHub" />
											</a>
										)}
										{frontmatter.external && (
											<a
												href={frontmatter.external}
												target="_blank"
												rel="nofollow noopener noreferrer"
												className="text-lightestSlate hover:text-primary"
												aria-label="External Link"
											>
												<button className="btn btn-outline btn-md btn-primary font-poppins">
													Preview
												</button>
											</a>
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
