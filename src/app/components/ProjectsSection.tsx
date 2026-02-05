"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gym website",
    description:
      "This is a gym website built with HTML, CSS and JavaScript. the idea behind this website is to give user easy access to communicate with the gym and also working out from home.",
    image: "/images/projects/projectimage.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://pgc-gywebsite.netlify.app/",
  },
  {
    id: 2,
    title: "Gadget website",
    description:
      "This is a platform created to sell and swap gadgets of various brands.",
    image: "/images/projects/projectimage4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.swapconnect.africa/",
  },
  {
    id: 3,
    title: "Church website",
    description:
      "This is created with Next.js to give more visibility to a church fellowship, making it easier for members to download recorded sermons, make donations, and as well as get first hand informations and announcements. ",
    image: "/images/projects/projectimage3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://rcf-ikole.vercel.app/",
  },
  {
    id: 4,
    title: "Delivery website",
    description:
      "This is a platform created to help with the delivery of foods for restaurants and customers.",
    image: "/images/projects/project4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://deliver-x2.netlify.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
