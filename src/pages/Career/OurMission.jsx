import React from "react";
import ourMission from "../../assets/ourMission.png";
const OurMission = () => {
  return (
    <div>
      <div className="lg:flex items-center mt-12  lg:mt-28 space-y-9 lg:space-y-0 gap-48">
        <div className="relative ">
          <div className="bg-[#F0F0F0] p-12 w-[120px] lg:w-[382px]  h-[350px]  lg:h-[620px]"></div>
          <img
            className="w-[250px] lg:w-[393px] absolute top-6 lg:top-20 left-16 lg:left-24 h-[300px] lg:h-[462px]"
            src={ourMission}
            alt=""
          />
        </div>

        <div className="w-[250px] mx-auto lg:mx-0 text-center lg:text-start lg:w-[745px]   ">
          <h1 className="text-[12px] lg:text-[18px] text-[#FF8700] font-semibold">
            <span className="inline-block mr-3">O</span>
            <span className="inline-block mr-3">U</span>
            <span className="inline-block mr-3">R</span>
            <span className="inline-block mr-3">&nbsp;</span>
            <span className="inline-block mr-3">M</span>
            <span className="inline-block mr-3">I</span>
            <span className="inline-block mr-3">S</span>
            <span className="inline-block mr-3">S</span>
            <span className="inline-block mr-3">I</span>
            <span className="inline-block mr-3">O</span>
            <span className="inline-block">N</span>
          </h1>

          <h3 className="text-[18px]  lg:text-[40px] text-[#FF8700] mt-2 lg:mt-6 mb-3 lg:mb-8 font-bold ">
            How do we achieve our goal
          </h3>
          <p className="text-[9px] lg:text-[16px] text-[#858585] lg:leading-9 font-medium ">
            Lorem ipsum dolor sit amet consectetur. Aliquam maecenas elementum
            purus sit arcu. Imperdiet tristique aenean ultrices bibendum vel
            amet tincidunt. Turpis cursus massa a sed vestibulum sit libero
            ultricies. Rhoncus aenean quam egestas egestas ac sollicitudin
            lacus. Varius elit velit odio proin mi at vulputate. Aliquam sit
            orci at sed ullamcorper diam nulla lectus. Consequat ut dignissim
            dui laoreet neque convallis neque diam. Volutpat commodo non in
            tincidunt viverra. Lectus hac nibh elementum quis mauris egestas.
            Consectetur risus est at semper lacus diam. Ornare nam nec fringilla
            a mattis malesuada pharetra diam et. Nibh sodales sit erat a
            <br />
            Suspendisse sem malesuada mattis lacus commodo. Diam mauris tellus
            et penatibus sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
