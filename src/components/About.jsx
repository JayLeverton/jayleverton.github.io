import React from "react";

const About = () => {
  return (
    <div className="bg-[#131d35] w-full py-[50px]">
      <div className="container flex flex-col mx-auto w-12/12 md:flex-row md:max-w-5xl ">
        <div className="about-image mx-auto container w-10/12 md:w-6/12 ">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col mx-auto w-11/12 md:max-w-lg gap-5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-[#93C5FD] ">ABOUT ME</h2>
          <h3 className="text-2xl font-bold ">
            A self taught Front-end Developer based in London.
          </h3>
          <p className="text-slate-300 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            est perferendis, veniam omnis nobis, nam quam dolorem consequatur
            assumenda pariatur ducimus harum, porro quibusdam. Doloremque
            aperiam, laudantium hic illo assumenda accusamus. Dolore deleniti
            quis doloremque, optio totam saepe expedita aut in eligendi
            perspiciatis exercitationem quibusdam at nobis nisi sequi? Aperiam,
            sequi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
