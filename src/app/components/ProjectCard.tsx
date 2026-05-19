import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMobileClick = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="group rounded-xl overflow-hidden bg-[#181818]/60 border border-[#33353F]/50 transition-all duration-300 hover:-translate-y-2 hover:border-[#7c3aed]/50 hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.3)] flex flex-col h-full">
      <div
        className="h-52 md:h-64 relative md:cursor-default cursor-pointer overflow-hidden bg-[#181818]"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={handleMobileClick}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300"></div>
        {/* Mobile overlay - shown on click */}
        <div
          className="md:hidden overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-80 transition-all duration-500"
          style={{
            display: showOverlay ? "flex" : "none",
          }}
        >
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>

        {/* Desktop overlay - original hover behavior */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80 transition-all duration-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden group-hover:!flex">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all hover:scale-110"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all hover:scale-110"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white py-6 px-4 flex-grow flex flex-col justify-between">
        <div>
          <h5 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">{title}</h5>
          <p className="text-[#ADB7BE] text-sm line-clamp-3 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
