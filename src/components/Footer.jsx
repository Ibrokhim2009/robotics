import React from "react";
import logo from "../assets/Frame 1000006215.png";
import telegramm from "../assets/Group (2).png";
import youtube from "../assets/Frame.png";
import insta from "../assets/Frame (1).png";
function Footer() {
  return (
    <div className="bg-[#FFE000] pb-5">
      <div className=" max-w-7xl pl-[15px] pt-3 w-full m-auto">
        <div className="flex items-start flex-col lg:flex-row justify-between">
          <div className="flex flex-row lg:flex-col lg:items-start items-end gap-5">
            <img className="border mb-4 rounded-full" src={logo} alt="" />
            <div>
              <p className="max-w-[248px] font-bold text-sm mb-5">
                SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center gap-3">
                <img src={telegramm} alt="" />
                <img src={youtube} alt="" />
                <img src={insta} alt="" />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h1 className="font-bold mb-2 text-[1.6rem]">Курсы</h1>
            <div className="flex flex-col gap-2.5">
              <p className="text-[1.3rem]">Работотехника</p>
              <p className="text-[1.3rem]">Английский для взрослых</p>
              <p className="text-[1.3rem]">Английский для детей</p>
              <p className="text-[1.3rem]">Шахмат</p>
              <p className="text-[1.3rem]">Живопись</p>
            </div>
          </div>
          <div className="pt-6">
            <h1 className="font-bold mb-2 text-[1.6rem]">Контакты</h1>
            <div className="flex flex-col gap-2.5">
              <p className="text-[1.3rem]">Телеграм</p>
              <p className="text-[1.3rem]">Инстаграм</p>
              <p className="text-[1.3rem]">Ютюб</p>
            </div>
          </div>
        </div>
        <p className="font-semibold mt-6">
          Ideallux.com © 2000-2024, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
