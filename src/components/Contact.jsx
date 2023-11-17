import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#131d35] w-full pb-[5rem]">
      <div className="container flex flex-col mx-auto w-11/12 md:flex-row md:max-w-5xl gap-20 ">
        <div className="about-image mx-auto container w-9/12 md:w-6/12">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col mx-auto w-9/12 md:max-w-lg gap-5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-[#93C5FD] ">CONTACT</h2>
          <h3 className="text-2xl font-bold ">Get in touch!</h3>
        </div>

        {/* Location */}
        <div className="flex flex-col text-lg gap-16">
          <div className="flex flex-col text-center gap-2">
            <div className="location-svg border w-9 h-9 mx-auto"></div>
            <h4 className="font-bold">Location</h4>
            <p className="text-slate-300">London, United Kingdom</p>
          </div>

          {/* E-mail */}
          <div className="flex flex-col text-center gap-3">
            <div className="location-svg border w-9 h-9 mx-auto"></div>
            <h4 className="font-bold">E-mail</h4>
            <a className="text-[#93C5FD]">leverton.web@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
