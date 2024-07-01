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
				start: "top 85%",
				end: "top 60%",
				scrub: true,
				markers: false,
			},
		});

		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
				start: "top 67%",
				end: "top 20%",
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
			tl2.fromTo(
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
			html: "<p>Bookmate is a fun website that helps you find your 'Book Mate' by adding your favorite books to your library and taking a quiz. Users are matched with like-minded readers using an ML model trained with reader data. Plus, personalized book recommendations are available on a dedicated page. You can discover your perfect book buddy with BookMate</p>",
		},
		{
			frontmatter: {
				external: "",
				title: "FLiX",
				tech: [
					"Javascript",
					"Python",
					"React.js",
					"Node.js",
					"FastAPI",
					"SciKit",
					"Seaborn",
					"MathPlotLib",
				],
				github: "https://github.com/arunnats/Flix",
				cover: {
					src: flix,
					alt: "Flix",
				},
			},
			html: "<p>Flix is a movie recommender app using the MovieLens database to provide personalized recommendations based on user preferences. It employs collaborative filtering and a correlation matrix from user ratings. Features include a recommendation engine, live search, and data visualization with graphs and charts for insights into movie ratings, genres, and other relevant information.</p>",
		},
		{
			frontmatter: {
				external: "",
				title: "Movie Match",
				tech: ["Javascript", "Python", "Node.js", "GPT-4"],
				github: "https://github.com/arunnats/movie-match",
				cover: {
					src: movieMatch,
					alt: "Movie Match",
				},
			},
			html: "<p>Movie Match, winners of GDSC Bit'N'Build Kerala Hackathon, offers a vast, daily-updated movie database from 1940 to mid-2023. Powered by GPT-4-turbo, it provides personalized recommendations, intuitive search, and detailed info pages with reviews, IMDB links, and streaming service details for a seamless experience.</p>",
		},
	];

	return (
		<section ref={sectionRef} id="projects" className="py-3 bg-base-100 p-3">
			<h2
				ref={revealTitle}
				className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-8"
			>
				Some Things I've Built
			</h2>
			<div className="container mx-auto px-4">
				<div>
					{featuredProjects.map(({ frontmatter, html }, i) => (
						<div
							key={i}
							className="grid grid-cols-1 md:grid-cols-12 gap-2 mb-8"
						>
							<div className="col-span-7 md:col-span-6 my-auto relative group border-l-4 border-secondary p-1">
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
										className="w-full "
									/>
									<div className="absolute inset-0 bg-secondary-content opacity-60 group-hover:opacity-20 transition-opacity duration-300 "></div>
								</a>
							</div>

							<div
								ref={(el) => (revealProjects.current[i] = el)}
								className="col-span-7 md:col-span-6 "
							>
								<div className="p-1 md:p-6 border-r-4 border-secondary-content transition-transform transform hover:translate-y-[-5px]">
									<h4 className="text-sm md:text-base font-space font-bold text-secondary mb-2">
										Featured Project
									</h4>
									<h5 className="text-xl md:text-2xl text-primary font-poppins font-semibold md:mb-4 mb-2">
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
										className="text-sm md:text-lg leading-relaxed font-roboto mb-2 md:mb-4 text-justify"
										dangerouslySetInnerHTML={{ __html: html }}
									/>
									{frontmatter.tech && (
										<ul className="flex flex-wrap mb-4">
											{frontmatter.tech.map((tech, i) => (
												<li
													key={i}
													className="font-space font-semibold text-xs md:text-smish text-secondary mr-2 mb-2 whitespace-nowrap"
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
												<img
													className="lg:w-12 lg:h-12 md:w-10 md:h-10 h-8 w-8"
													src={github}
													alt="GitHub"
												/>
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
