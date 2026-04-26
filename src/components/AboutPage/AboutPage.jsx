import React from "react";

const AboutPage = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">
            Our Identity
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold mt-4 tracking-tighter text-black">
            Next Gear. <br />
            <span className="text-gray-400 font-medium">
              Reimagining Tech Retail.
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Brand Philosophy */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-gray-700 leading-snug font-medium">
              At <span className="text-black font-bold">Next Gear</span>, we
              don&apos;t just sell gadgets. We curate the tools that power your
              digital lifestyle.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Founded on the principles of minimalism and high performance, we
              bridge the gap between cutting-edge technology and seamless user
              experience. Every product in our catalog undergoes rigorous
              quality assessment to ensure it meets the standards of modern
              professionals and tech enthusiasts alike.
            </p>

            {/* Stats/Achievements */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <h4 className="text-4xl font-bold text-black">100%</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-semibold">
                  Authentic Products
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black">24/7</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-semibold">
                  Expert Support
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Vision Cards */}
          <div className="grid gap-6">
            <div className="p-8 bg-[#fbfbfd] rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300 font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Curated Excellence
              </h3>
              <p className="text-gray-500 leading-relaxed">
                We handpick every item, ensuring that our customers only get
                access to the most innovative and durable gear on the market.
              </p>
            </div>

            <div className="p-8 bg-[#fbfbfd] rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-black group-hover:text-white transition-colors duration-300 font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Customer First
              </h3>
              <p className="text-gray-500 leading-relaxed">
                From pre-purchase advice to after-sales support, our team is
                dedicated to providing a premium shopping journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA for Professionalism */}
        <div className="mt-20 p-12 bg-black rounded-[3rem] text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 italic">
            Ready to upgrade your workflow?
          </h3>
          <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
