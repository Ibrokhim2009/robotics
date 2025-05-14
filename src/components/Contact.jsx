import React, { useState } from "react";
import tel from "../assets/Group.svg";
import location from "../assets/Group (1).png";
import time from "../assets/Vector (1).png";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

// Компонент формы обратной связи
function Contact() {
  const [dropDown, setDropDown] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const contactArr = [
    { img: tel, title: "Адрес Ориентир" },
    { img: location, title: "График работы" },
    { img: time, title: "Номера телефонов" },
  ];

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

    if (!name || !phone || !age || !selectedCourse) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const formData = {
      name,
      phone,
      age,
      course: selectedCourse,
    };

    console.log("Данные формы перед отправкой:", formData);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzPsDqV6LnyGXAhi2WCL5fI_4Rbbixtz2wuDNs7IVEXHnBmrqNZlNqwuvev6Ha0R38/exec?redirect",
        {
          method: "POST",
          mode: "no-cors", // Отключаем CORS
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("Спасибо! Ваша заявка отправлена.");
      setName("");
      setPhone("");
      setAge("");
      setSelectedCourse("");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка. Проверьте соединение или настройки скрипта.");
    }
  };

  return (
    <div className="mt-[-400px] relative z-[999]">
      <div className="max-w-7xl w-full m-auto">
        <h1 className="text-2xl lg:text-8xl mb-20 text-[#F0D625] font-bold text-center">
          {"получите бесплатный первый урок".toUpperCase()}
        </h1>
        <form onSubmit={contactSubmit} className="mb-20">
          <div className="flex max-w-7xl px-[12px] flex-col lg:flex-row w-full gap-4 justify-center">
            <input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white lg:max-w-[280px] text-2xl h-[60px] px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F0D625]"
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white lg:max-w-[280px] text-2xl h-[60px] px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F0D625]"
            />
            <div className="relative lg:flex hidden w-full max-w-[350px]">
              <button
                type="button"
                onClick={() => setDropDown(!dropDown)}
                className={`w-full ${
                  dropDown ? "rounded-b-[0px] border-b-0" : ""
                } border-[#D9D9D9] bg-white rounded-[10px] text-2xl h-[60px] px-5 border flex justify-between items-center cursor-pointer`}
              >
                <span className="text-[#0000006f] text-xl">
                  {selectedCourse || "Выберите курс"}
                </span>
                {dropDown ? <IoCaretUp /> : <IoCaretDown />}
              </button>
              {dropDown && (
                <div
                  className={`absolute ${
                    dropDown ? "rounded-t-[0px] border" : ""
                  } top-[58px] w-full bg-white border border-[#D9D9D9] rounded-[10px] shadow-lg z-10`}
                >
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="py-4 px-5 border-b border-[#D9D9D9] text-[1.25rem] cursor-pointer hover:bg-gray-100"
                      onClick={() => handleCourseSelect(course)}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="number"
              placeholder="Возраст"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full bg-white lg:max-w-[280px] text-2xl h-[60px] px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F0D625]"
            />
            <div className="relative lg:hidden w-full max-w-[800px]">
              <button
                type="button"
                onClick={() => setDropDown(!dropDown)}
                className={`w-full ${
                  dropDown ? "rounded-b-[0px] border-b-0" : ""
                } border-[#D9D9D9] bg-white rounded-[10px] text-2xl h-[60px] px-5 border flex justify-between items-center cursor-pointer`}
              >
                <span className="text-[#0000006f] text-xl">
                  {selectedCourse || "Выберите курс"}
                </span>
                {dropDown ? <IoCaretUp /> : <IoCaretDown />}
              </button>
              {dropDown && (
                <div
                  className={`absolute
                ${dropDown ? "rounded-t-[0px] border-t-0" : ""}
                top-[58px] w-full bg-white border border-[#D9D9D9] rounded-[10px] shadow-lg z-10`}
                >
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="py-4 px-5 border-b border-[#D9D9D9] text-[1.25rem] cursor-pointer hover:bg-gray-100"
                      onClick={() => handleCourseSelect(course)}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-2xl max-w-[800px] h-[60px] bg-[#FFE000] shadow-[0px_0px_30px_#F0D625] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              ПОЛУЧИТЬ
            </button>
          </div>

          <div className="lg:mt-20 mt-6 px-4 flex items-center gap-[10px] lg:gap-[60px]">
            <button className="lg:px-16 w-full lg:w-auto py-4 lg:py-5 text-md lg:text-3xl bg-[#FFE000] shadow-[0px_0px_30px_#F0D625] rounded-lg text-black font-bold">
              ФИЛИАЛЫ Ц4
            </button>
            <button className="lg:px-16 w-full lg:w-auto py-4 lg:py-5 text-md lg:text-3xl bg-white rounded-lg text-black font-bold">
              ФИЛИАЛЫ БЕРУНИ
            </button>
          </div>
        </form>

        <div className="flex mb-20 px-4 items-center justify-between max-w-[932px] w-full m-auto">
          {contactArr.map((item, index) => (
            <div key={index} className="flex gap-[5px] lg:gap-6 items-center">
              <img
                className="lg:w-10 lg:h-10 w-5 h-5"
                src={item.img}
                alt={item.title}
              />
              <p className="lg:text-2xl text-[10px] font-mono text-white">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3007701202782!2d69.2685316!3d41.3023201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84cf0f93df79be43%3A0x7a2e69ecded3ed88!2sFintech%20Innovation%20Hub!5e0!3m2!1sru!2s!4v1738436810543!5m2!1sru!2s"
          title="Google Map"
          width="100%"
          height="595px"
          allowFullScreen=""
          loading="lazy"
          className="contact-map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
