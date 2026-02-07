import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side: Queensley and social icons */}
          <div className="flex flex-row items-center gap-4">
            <span className="text-lg md:text-xl font-semibold">Queensley</span>

            <div className="socials flex flex-row gap-4">
              <Link
                href="https://github.com/queensley2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/github-icon.svg"
                  width={40}
                  height={40}
                  alt="Github Icon"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ojenike-queensley-6759a12aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/linkedin-icon.svg"
                  width={40}
                  height={40}
                  alt="Linkedin Icon"
                />
              </Link>
              <Link
                href="https://wa.me/+2348068642246"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/whatsapp-icon.svg"
                  width={40}
                  height={40}
                  alt="Whatsapp Icon"
                />{" "}
              </Link>
            </div>
          </div>

          {/* Right side: All rights reserved */}
          <p className="text-slate-600 text-sm md:text-base">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
