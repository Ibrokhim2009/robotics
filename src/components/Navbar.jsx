import React, { useState } from "react";
import logo from "../assets/Frame 1000006215.png";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaTh, FaPencilAlt, FaComments, FaUsers, FaInstagram, FaTwitter } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-t-[14px] border-b-[14px] border-solid border-[#FFE000]">
      <nav className="h-[185px] w-full max-w-7xl m-auto flex items-center justify-between relative">
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center gap-[10px]">
          <div className="flex lg:hidden">
            <button className="py-1 text-[#F0D625] text-xl px-4">RU</button>
            <button className="py-1 bg-[#F0D625] text-xl rounded-[10px] text-white px-4">
              UZ
            </button>
          </div>
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-white text-3xl" />
            ) : (
              <AiOutlineMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-white text-2xl items-center max-w-[580px] w-full justify-between">
          <li>
            <Link to={'/'}>Главная</Link>
          </li>
          <li>
            <a href="">О нас</a>
          </li>
          <li className="relative">
            <button
              className="text-[#FFE000] cursor-pointer py-2 px-5 border border-[#FFE000] rounded-full flex items-center gap-1"
              onClick={toggleDropdown}
            >
              Курсы <AiFillCaretDown />
            </button>
            {isOpen && (
              <ul className="absolute top-full left-0 mt-2 w-[290px] flex flex-col gap-2 text-white text-xl">
                <li className="text-[#FFE000] cursor-pointer py-2 px-5 w-full bg-black border border-[#FFE000] rounded-full">
                  робототехника
                </li>
                <li className="text-[#FFE000] cursor-pointer py-2 px-5 w-full bg-black border border-[#FFE000] rounded-full">
                  Анимация
                </li>
                <li className="text-[#FFE000] cursor-pointer py-2 px-5 w-full bg-black border border-[#FFE000] rounded-full">
                  Живопись для детей
                </li>
                <li className="text-[#FFE000] cursor-pointer py-2 px-5 w-full bg-black border border-[#FFE000] rounded-full">
                  Хореография
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to={'/contact'}>Контакты</Link>
          </li>
        </ul>

        {/* Desktop Call Button */}
        <button className="hidden lg:block text-black text-2xl shadow-[0px_0px_32px_#FFE000] font-bold py-4 px-13 rounded-lg bg-[#FFE000]">
          ПОЗВОНИТЬ
        </button>

        {/* Desktop Language Buttons */}
        <div className="hidden lg:flex">
          <button className="py-3 text-[#FFE000] text-2xl px-[27px]">RU</button>
          <button className="py-3 bg-[#F0D625] text-2xl rounded-[14px] text-white px-[27px]">
            UZ
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[185px] left-0 w-full bg-black flex flex-col lg:hidden z-10">
            {/* Menu Items */}
            <div className=" border-[16px] border-solid border-[#FFE000]">
              <ul className="flex flex-col gap-4 text-white text-2xl p-4">
                <li className="flex items-center gap-3 py-6 px-5 border-b">
                  <FaTh className="text-white text-2xl" />
                  <a href="" className="text-white">
                    ГЛАВНАЯ
                  </a>
                </li>
                <li className="flex items-center gap-3 py-6 px-5 border-b">
                  <FaPencilAlt className="text-white text-2xl" />
                  <a href="" className="text-white">
                    О НАС
                  </a>
                </li>
                <li className="relative flex items-center gap-3 py-6 px-5 border-b">
                  <FaComments className="text-white text-2xl" />
                  <button className="text-[#FFE000] flex items-center gap-1">
                    КУРСЫ
                  </button>
                </li>
                <li className="flex items-center gap-3 py-6 px-5">
                  <FaUsers className="text-white text-2xl" />
                  <Link to={'/contact'} className="text-white">
                    КОНТАКТЫ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-[68px] flex pl-[24px] text-xl items-center gap-[28px] text-white bg-black">
              <RiLinkedinFill />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        )}
      </nav>
    </nav>
  );
}

export default Navbar;
