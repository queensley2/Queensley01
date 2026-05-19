
import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white hover:scale-105";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-lg cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
