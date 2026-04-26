import React from "react";

const Newsletter = () => {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center px-6 bg-gray-50 py-20 rounded-[3rem] border border-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight italic">
          Stay Connected.
        </h2>
        <p className="text-gray-500 mb-10 text-lg md:text-xl font-medium">
          Get the latest updates on new gear and exclusive offers.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          //   onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-8 py-5 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-lg bg-white"
          />
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all shadow-lg active:scale-95">
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
