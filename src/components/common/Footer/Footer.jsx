import React from "react";
import Link from "next/link";

const Footer = () => {
  // ১. ডাইনামিক ডাটা সেট (এখান থেকেই আপনি অপশন বাড়াতে বা কমাতে পারবেন)
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
    {
      title: "Social",
      links: ["Twitter", "Instagram", "Facebook"],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* উপরের ডাইনামিক লিঙ্ক সেকশন */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerData.map((section, index) => (
            <div key={index}>
              <h6 className="text-[13px] font-semibold text-black mb-4 uppercase tracking-wider">
                {section.title}
              </h6>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-[13px] text-gray-500 hover:text-black transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Next Gear Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 text-[12px] text-gray-400">
            <Link href="#" className="hover:text-black">
              Bangla
            </Link>
            <Link href="#" className="hover:text-black">
              English
            </Link>
            <Link href="#" className="hover:text-black">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
