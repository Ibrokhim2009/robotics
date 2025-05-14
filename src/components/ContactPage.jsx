import React, { useState } from "react";
import robot from "../assets/orange_robot_6.png";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// Компонент страницы контактной формы
function ContactPage() {
  // Состояния для управления формой и выпадающим списком
  const [dropDown, setDropDown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const navigate = useNavigate();

  const courses = [
    "Робототехника",
    "Живопись для взрослых",
    "Живопись для детей",
    "Шахматы",
  ];

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setDropDown(false);
  };

  const contactSubmit = async (e) => {
    e.preventDefault();

    if (!name || !secondName || !phone || !birthDate || !selectedCourse) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const formData = {
      name,
      secondName,
      phone,
      birthDate,
      course: selectedCourse,
    };

    console.log("Данные формы перед отправкой:", formData);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzPsDqV6LnyGXAhi2WCL5fI_4Rbbixtz2wuDNs7IVEXHnBmrqNZlNqwuvev6Ha0R38/exec?redirect",
        {
          method: "POST",
          mode: "no-cors", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Спасибо! Ваша заявка отправлена.");
      setName("");
      setSecondName("");
      setPhone("");
      setBirthDate("");
      setSelectedCourse("");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка. Проверьте соединение или настройки скрипта.");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-black to-gray-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FFE000] rounded-bl-[100%] opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#FFE000] rounded-tr-[100%] opacity-80"></div>

      <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-center text-white pt-16 sm:pt-20 mb-12 sm:mb-16 tracking-wide">
        Приглашаем на первый урок!
      </h1>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center max-w-7xl m-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12">
        <form
          onSubmit={contactSubmit}
          method="post"
          className="px-6 sm:px-8 bg-white rounded-3xl w-full max-w-[684px] py-6 sm:py-8 shadow-lg shadow-gray-700/20 transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex w-full flex-col gap-3 mb-5">
            <label className="text-[#5B5B5B] text-sm sm:text-base font-semibold">
              Имя
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-4 text-base sm:text-lg border-2 border-[#D9D9D9] outline-none rounded-xl px-5 focus:ring-2 focus:ring-[#FFDE00] transition-all duration-200"
              placeholder="Патрик"
            />
          </div>

          <div className="flex w-full flex-col gap-3 mb-5">
            <label className="text-[#5B5B5B] text-sm sm:text-base font-semibold">
              Фамилия
            </label>
            <input
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              className="py-4 text-base sm:text-lg border-2 border-[#D9D9D9] outline-none rounded-xl px-5 focus:ring-2 focus:ring-[#FFDE00] transition-all duration-200"
              placeholder="Хэндсом"
            />
          </div>

          <div className="flex w-full flex-col gap-3 mb-5">
            <label className="text-[#5B5B5B] text-sm sm:text-base font-semibold">
              Номер телефона
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="py-4 text-base sm:text-lg border-2 border-[#D9D9D9] outline-none rounded-xl px-5 focus:ring-2 focus:ring-[#FFDE00] transition-all duration-200"
              placeholder="+998 99-888-77-77"
            />
          </div>

          <div className="flex w-full flex-col gap-3">
            <label className="text-[#5B5B5B] text-sm sm:text-base font-semibold">
              Дата рождения и курс
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="py-4 w-full text-base sm:text-lg border-2 border-[#D9D9D9] outline-none rounded-xl px-5 focus:ring-2 focus:ring-[#FFDE00] transition-all duration-200"
                placeholder="25.08.2000"
              />
              <div className="relative w-full sm:max-w-[310px]">
                <button
                  type="button"
                  onClick={() => setDropDown(!dropDown)}
                  className={`w-full ${
                    dropDown ? "rounded-b-none border-b-0" : ""
                  } border-2 border-[#D9D9D9] bg-white rounded-xl text-lg sm:text-xl h-[56px] px-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-all duration-200`}
                >
                  <span className="text-[#0000006f]">
                    {selectedCourse || "Выберите курс"}
                  </span>
                  {dropDown ? <IoCaretUp /> : <IoCaretDown />}
                </button>
                {dropDown && (
                  <div
                    className={`absolute top-[56px] w-full bg-white border-2 border-t-0 border-[#D9D9D9] rounded-b-xl shadow-lg z-10 max-h-48 overflow-y-auto`}
                  >
                    {courses.map((course, index) => (
                      <div
                        key={index}
                        className="py-3 px-5 border-b border-[#D9D9D9] text-base sm:text-lg cursor-pointer hover:bg-gray-100 transition-all duration-200 last:border-b-0"
                        onClick={() => handleCourseSelect(course)}
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>

        <img
          src={robot}
          alt="Робот"
          className="max-w-[300px] sm:max-w-[400px] w-full animate-pulse-slow"
        />
      </div>

      <div className="flex mt-12 sm:mt-16 gap-4 sm:gap-5 max-w-7xl justify-center lg:justify-end m-auto items-center px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="py-3 sm:py-4 rounded-xl w-full max-w-[250px] sm:max-w-[310px] text-lg sm:text-2xl uppercase bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300"
        >
          Назад
        </button>
        <button
          type="submit"
          form="contact-form"
          className="py-3 sm:py-4 rounded-xl w-full max-w-[250px] sm:max-w-[310px] text-lg sm:text-2xl uppercase text-white bg-[#FFE000] font-semibold shadow-[0px_0px_41px_#F0D625] hover:bg-yellow-400 transition-all duration-300"
        >
          Записаться
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default ContactPage;
