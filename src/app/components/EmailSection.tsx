"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify will automatically handle the form submission
    setIsSubmitting(true);

    toast.success("Email sent successfully!");
    e.currentTarget.reset();

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-12 relative overflow-hidden"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 flex flex-col justify-center"
      >
        <h5 className="text-3xl font-bold text-white my-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md text-base leading-relaxed">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href="https://github.com/queensley2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            <Image
              src="/github-icon.svg"
              width={45}
              height={45}
              alt="Github Icon"
              className="filter invert"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ojenike-queensley-6759a12aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            <Image
              src="/linkedin-icon.svg"
              width={45}
              height={45}
              alt="Linkedin Icon"
            />
          </Link>
          <Link
            href="https://wa.me/+2348068642246"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            <Image
              src="/whatsapp-icon.svg"
              width={45}
              height={45}
              alt="Whatsapp Icon"
            />
          </Link>
          <Link
            href="https://x.com/TechQ75457"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1 hover:scale-110 transition-all duration-300"
          >
            <Image src="/x-icon.svg" width={45} height={45} alt="X Icon" />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10"
      >
        <Toaster position="top-center" reverseOrder={false} />
        <div className="bg-[#18191E]/60 border border-[#33353F]/60 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
          <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#121212]/80 border border-[#33353F] placeholder-[#4d5156] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="jacob@google.com"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#121212]/80 border border-[#33353F] placeholder-[#4d5156] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="bg-[#121212]/80 border border-[#33353F] placeholder-[#4d5156] text-gray-100 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 mt-2 w-full rounded-full bg-gradient-to-br from-purple-600 via-indigo-500 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
