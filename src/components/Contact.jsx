import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-secondary-bg-color w-full py-[50px] pb-[5rem] scroll-mt-[75px]"
    >
      <div className="container flex flex-col mx-auto w-11/12 md:max-w-5xl gap-20 ">
        <div className="flex flex-col mx-auto w-9/12 gap-5 text-center md:w-full md:text-left">
          <h2 className="text-xl font-semibold text-[#93C5FD] ">CONTACT</h2>
          <h3 className="text-2xl font-bold ">Get in touch!</h3>
        </div>

        <div className="flex flex-col text-lg gap-16 md:flex-row">
          {/*  */}
          {/* Location */}
          <div className="flex flex-col text-center gap-2 md:flex-row">
            <div className="location-svg w-9 mx-auto my-auto md:w-11">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="my-auto md:text-left justify-between">
              <h4 className="font-bold">Location</h4>
              <p className="text-slate-300">London, United Kingdom</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col text-center gap-2 md:flex-row">
            <a
              className="location-svg w-9 mx-auto my-auto md:w-11"
              href="mailto:leverton.web@gmail.com"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                    fill="#93C5FD"
                  ></path>
                </g>
              </svg>
            </a>

            <a
              className="my-auto md:text-left justify-between"
              href="mailto:leverton.web@gmail.com"
            >
              <h4 className="font-bold">E-mail</h4>
              <p className="text-slate-300">leverton.web@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
