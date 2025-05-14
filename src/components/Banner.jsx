import React from "react";
import robot from "../assets/orange_robot_9 1 (1).png";
import background from "../assets/Mask group.png";

function Banner() {
  const infoArr = [
    {
      title: "300+",
      content: "Довольных студентов",
    },
    {
      title: "25+",
      content: "Преподавателей",
    },
    {
      title: "60+",
      content: "групп",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="flex py-9 items-center justify-center bg-no-repeat rounded-br-4xl w-full h-auto lg:h-[611px]"
        style={{
          background: `url('${background}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Text and Button Section */}
        <div className="max-w-[250px] md:max-w-[400px] xl:h-[450px]  lg:w-[40%] xl:w-full xl:max-w-[621px] px-4 xl:px-[51px] flex flex-col justify-between h-auto text-[1.5rem] xl:text-[2.5rem] py-4 xl:py-[48px] bg-white rounded-[30px]">
          <div>
            <h1 className="text-[1,5rem] lg:text-[3.3rem] xl:text-[5.3rem] lg:mb-[9px] leading-tight lg:leading-20 font-semibold">
              JustRobotics
            </h1>
            <p className="leading-3 max-w-[150px] lg:max-w-[590px] lg:leading-5 md:mb-10 xl:leading-[40px] font-[500] text-[0.7rem] xl:text-[2.75rem] lg:text-[1.75rem]">
              твой проводник в мир технологий и искусства
            </p>
          </div>
          <div className="mt-1 lg:mt-0">
            <p className="text-[0.675rem] lg:text-[1.25rem] leading-[16px] mb-1 lg:mb-0">
              получите бесплатное первое занятие
            </p>
            <button className="text-[0.8rem] lg:text-2xl py-1 lg:py-4 px-2 lg:px-11 rounded-md text-[#FFE001] bg-black">
              ПЕРЕЙТИ К КУРСАМ
            </button>
          </div>
        </div>

        {/* Robot Image */}
        <img
          className="w-[140px] max-w-[600px] lg:w-[40%] mt-6 lg:mt-0 lg:ml-[60px]"
          src={robot}
          alt="Robot"
        />
      </div>

      {/* Stats Section */}
      <div className="w-full mb-[30px] lg:pb-0 flex lg:flex-nowrap max-w-7xl m-auto flex-wrap mt-[30px] lg:mt-0 justify-center gap-[10px] lg:justify-between py-6 lg:py-0 px-4 lg:px-0">
        {infoArr?.map((item, index) => (
          <div
            className="bg-[#d3bb20] max-w-[190px] lg:max-w-[800px] min-w-[140px] h-[110px] lg:h-auto w-full  pt-6 lg:pt-10 pb-4 lg:pb-5 shadow-[0px_0px_32px_#F0D625] flex items-center justify-evenly rounded-2xl lg:rounded-t-[0px] lg:rounded-b-4xl flex-col lg:mb-0 lg:mx-4"
            key={index + 1}
          >
            <h1 className="text-black text-[2rem] xl:text-[7rem] lg:text-[5rem] font-bold leading-[100%]">
              {item?.title}
            </h1>
            <p className="leading-6 lg:leading-11 text-[0.8rem] lg:text-[2rem] xl:text-[2.5rem] text-center font-semibold">
              {item?.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
