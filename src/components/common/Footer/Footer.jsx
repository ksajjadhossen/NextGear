"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const username = "ksajjadhossen";

  const footerData = [
    {
      title: "Services",
      links: ["Branding", "Design", "Marketing", "Advertising"],
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Jobs"],
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"],
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, url: `https://twitter.com/${username}` },
    { icon: <FaInstagram />, url: `https://instagram.com/${username}` },
    { icon: <FaFacebookF />, url: `https://facebook.com/${username}` },
    { icon: <FaGithub />, url: `https://github.com/${username}` },
    { icon: <FaLinkedinIn />, url: `https://linkedin.com/in/${username}` },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-black tracking-tighter mb-4">
              NEXT GEAR.
            </h2>
            <p className="text-[12px] text-gray-400 leading-relaxed max-w-[200px] uppercase tracking-wider">
              Architecting the future of digital toolsets and professional gear.
            </p>
          </div>

          {/* Dynamic Links */}
          {footerData.map((section, index) => (
            <div key={index}>
              <h6 className="text-[11px] font-black text-black mb-6 uppercase tracking-[0.2em]">
                {section.title}
              </h6>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-[12px] text-gray-500 hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-wrap gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, backgroundColor: "#000", color: "#fff" }}
              className="w-10 h-10 flex items-center justify-center border border-gray-100 text-gray-400 rounded-none transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Next Gear Inc. Crafted by{" "}
            <span className="text-black underline underline-offset-4 cursor-pointer">
              @{username}
            </span>
          </div>

          <div className="flex space-x-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Link href="#" className="hover:text-black transition-colors">
              Bangla
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              English
            </Link>
            <Link href="#" className="hover:text-black transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
