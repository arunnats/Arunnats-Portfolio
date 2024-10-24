import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import githubIcon from "../../assets/logos/icons8-github.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RISC from "../../assets/reports/NITC-RISC24.pdf";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const revealProjects = useRef([]);

  const GRID_LIMIT = 3; // Maximum projects to show initially
  const projects = [
    {
      frontmatter: {
        title: "NITC-RISC24",
        html: `<p>NITC-RISC24 is a 16-bit reduced instruction set processor built as a part of NIT Calicut's 'Computer Architecture' course. Written in Verilog, the processor can perform various simple functions, with a streamlined multicycle pipeline for executing arithmetic and logic instructions efficiently.</p>`,
        tech: ["Verilog", "Icarus"],
      },
      github: "https://github.com/arunnats/NITC-RISC24/",
      external: RISC,
    },
    {
      frontmatter: {
        title: "FLiX",
        html: "<p>Flix is a movie recommender app using the MovieLens database to provide personalized recommendations based on user preferences. It employs collaborative filtering and a correlation matrix from user ratings. Features include a recommendation engine and data visualization for insights into movie ratings, genres etc.</p>",
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
      },
      github: "https://github.com/arunnats/Flix",
      external: "https://flix.arunnats.com/",
    },
    {
      frontmatter: {
        title: "Movie Match",
        html: "<p>Movie Match, winners of GDSC Bit'N'Build Kerala Hackathon, offers a vast, daily-updated movie database from 1940 to mid-2023. Powered by GPT-4-turbo, it provides personalized recommendations and detailed info pages with reviews, IMDB links, and streaming service details for a seamless experience.</p>",
        tech: ["Javascript", "Python", "Node.js", "GPT-4"],
      },
      github: "https://github.com/arunnats/movie-match",
      external: "",
    },
    {
      frontmatter: {
        title: "Github Glazer",
        html: "<p>GitHub Glazer is a React app built with Vite that glazed your GitHub profile. Simply enter a GitHub username, and the app fetches the user's profile information and repositories. It then uses OpenAI's GPT-3.5 to glaze your profile.</p>",
        tech: ["ReactJS", "TypeScript", "OpenAI"],
      },
      github: "https://github.com/arunnats/Github-Glazer",
      external: "https://githubglazer.arunnats.com/",
    },
    {
      frontmatter: {
        title: "Harvest Buddy",
        html: "<p>Harvest Buddy, a finalist at GDSC Bit'N'Build Hackathon at CRCE Mumbai, helps farmers with smart inventory management, real-time alerts via SMS and and AI-driven recommendations. It integrates weather updates and OpenMapBox coordinates for comprehensive agricultural insights.</p>",
        tech: [
          "Javascript",
          "Twilio",
          "Express",
          "NodeJS",
          "OpenMapBox",
          "HTML/CSS",
        ],
      },
      github: "https://github.com/arunnats/HarvestBuddy",
      external: "",
    },
    {
      frontmatter: {
        title: "Youtube Video Converter",
        html: "<p>The YouTube downloader converts YouTube URLs into downloadable files, ensuring seamless video retrieval and user interaction with efficient server-side logic and session management for a smooth experience.</p>",
        tech: ["Javascript", "NodeJS", "HTML/CSS"],
      },
      github: "https://github.com/arunnats/Youtube-Video-Converter",
      // external: "http://yt-converter.arunnats.com/",
      external: "",
    },

    {
      frontmatter: {
        title: "Minutes Maker",
        html: "<p>Minutes Maker simplifies meeting documentation by transforming audio recordings into organized minutes with accurate transcriptions and concise summaries. It ensures efficient file handling and a user-friendly interface for seamless operation.</p>",
        tech: ["Javascript", "NodeJS", "HTML/CSS", "GPT-4", "Deepgram Nova"],
      },
      github: "https://github.com/example/project4",
      //   external: "https://minutesmaker.arunnats.com/",
      external: "",
    },
    {
      frontmatter: {
        title: "FairPlay",
        html: "<p>FairPlay, developed at CodeInit 2024 by NIT Calicut, offers an interactive platform to explore the historic Playfair Cipher. Encrypt and decrypt messages effortlessly, visualize the process step-by-step, and engage with a GPT-4-powered AI chatbot. Learn about the cipher's history and evolution.</p>",
        tech: ["Javascript", "React.js", "ExpressJs", "Node.js", "GPT-4"],
      },
      github: "https://github.com/example/project5",
      external: "https://fair-play-six.vercel.app/",
    },
    {
      frontmatter: {
        title: "StoryGPT",
        html: "<p>StoryGPT Emoji Story Generator uses OpenAI's GPT-3.5 Turbo and DALL-E to craft captivating narratives from user-input emojis and mood selections. Its user-friendly interface generates unique stories with semi-realistic images, perfect for creative writing, education, and entertainment.</p>",
        tech: ["Javascript", "NodeJS", "HTML/CSS", "GPT-4"],
      },
      github: "https://github.com/example/project6",
      //   external: "https://storygpt.arunnats.com/",
      external: "",
    },
  ];

  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 90%",
        end: "top 78%",
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
        className="text-2xl md:text-3xl font-bold font-poppins text-primary mb-8"
      >
        Other Projects
      </h2>
      <div ref={projectsRef} className="container md:mx-auto px-4">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projectsToShow.map(({ frontmatter, github, external }, i) => (
            <div
              key={i}
              ref={(el) => (revealProjects.current[i] = el)}
              className="text-primary p-1 md:p-6 border-b-4 border-secondary-content "
            >
              <div className="flex justify-start items-center mb-2 ">
                {github && (
                  <a
                    className="mr-2"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={githubIcon}
                      alt="GitHub Icon"
                      className="w-8 h-8"
                    />
                  </a>
                )}
                {external && (
                  <a
                    className="mx-2"
                    href={external}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-outline btn-sm">Visit</button>
                  </a>
                )}
              </div>
              <div className="flex">
                {external ? (
                  <a
                    href={external}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-primary font-poppins font-semibold text-lg hover:text-secondary"
                  >
                    {frontmatter.title}
                  </a>
                ) : (
                  <span className="text-primary font-poppins font-semibold text-lg">
                    {frontmatter.title}
                  </span>
                )}
              </div>
              <div
                className="text-sm md:text-lg leading-relaxed mb-4 font-roboto text-secondary text-justify"
                dangerouslySetInnerHTML={{ __html: frontmatter.html }}
              />
              {frontmatter.tech && (
                <ul className="flex flex-wrap mb-4">
                  {frontmatter.tech.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm font-space font-bold text-secondary mr-2 mb-1"
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
