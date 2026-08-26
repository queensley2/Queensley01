"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2 text-[#ADB7BE]">
        <li className="hover:text-white transition-colors duration-200">Next.js</li>
        <li className="hover:text-white transition-colors duration-200">HTML</li>
        <li className="hover:text-white transition-colors duration-200">Bootstrap</li>
        <li className="hover:text-white transition-colors duration-200">Tailwindcss</li>
        <li className="hover:text-white transition-colors duration-200">JavaScript</li>
        <li className="hover:text-white transition-colors duration-200">React</li>
                <li className="hover:text-white transition-colors duration-200">React Native</li>
        <li className="hover:text-white transition-colors duration-200">Flutter Dart</li>

      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Orglobal Tech Network Ltd, Ibadan</li>
        <li>Federal University, Oye-Ekiti</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-[#ADB7BE]">
        <li>Intermediate Frontend Development</li>
        <li>Advanced Frontend Development</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center md:justify-start"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              alt="About me image"
              src="/images/Pimage1.jpg"
              width={500}
              height={500}
              className="relative rounded-lg object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] mt-4 leading-relaxed">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next.js, HTML, CSS, and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 border-b border-[#33353F] pb-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-6 min-h-[150px] bg-[#181818]/40 p-6 rounded-lg border border-[#33353F]/50 backdrop-blur-sm">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
