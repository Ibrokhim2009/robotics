import React, { useEffect, useState } from "react";
import background from "../assets/background (3).png"; // Путь к картинке
import courseImage1 from "../assets/Rectangle 19.png";
import courseImage2 from "../assets/Rectangle 21.png";
import courseImage3 from "../assets/Rectangle 25.png";
import courseImage4 from "../assets/Rectangle 23.png";
import courseImage5 from "../assets/Rectangle 25 (1).png";
import play from "../assets/Vector.png";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
function Courses() {
  const courseArr = [
    {
      image: courseImage1,
      title: "Робототехника",
    },
    {
      image: courseImage2,
      title: "Живопись для детей",
    },
    {
      image: courseImage3,
      title: "Живопись для взрослых",
    },
    {
      image: courseImage4,
      title: "Английский язык для детей",
    },
    {
      image: courseImage5,
      title: "Шахмат",
    },
  ];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 15;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Array(totalItems).fill(0).slice(startIndex, endIndex);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const getSlidesPerView = () => {
    if (windowWidth < 768) {
      return 1.5;
    } else if (windowWidth < 1200) {
      return 2.5; 
    } else {
      return 2;
    }
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (swiperInstance) {
      const slideIndex = (pageNumber - 1) * getItemsPerPage();
      swiperInstance.slideTo(slideIndex);
    }
  };
  const getItemsPerPage = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) return 1;
    if (windowWidth < 1200) return 2;
    return 2;
  };
  const handleSlideChange = (swiper) => {
    const newPage = Math.ceil((swiper.activeIndex + 1) / getItemsPerPage());
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="relative min-h-[1500px] lg:min-h-[2960px] overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover top-[-1300px] z-0"
        style={{
          backgroundImage: `url('${background}')`,
        }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-[#F0D625] font-bold sm:text-2xl text-xl lg:mt-[80px] mt-[30px] md:text-5xl lg:text-8xl max-w-4xl mx-auto mb-10 md:mb-20 text-center px-4">
          АВТОРСКИЕ КУСЫ ОТ JUSTROBOTICS
        </h1>

        {windowWidth >= 1200 ? (
          <div className="grid grid-cols-2 mx-auto gap-y-0 gap-x-6 w-full max-w-6xl px-4">
            {courseArr.map((item, index) => (
              <div
                className="z-10 shadow-lg flex flex-col justify-between items-end w-full py-8 max-w-[550px] h-[508px] rounded-3xl bg-[#F0D625] mb-8"
                key={index}
              >
                <div className="max-w-[450px] w-full mx-auto">
                  <img
                    className="mb-5 w-full h-auto rounded-lg"
                    src={item.image}
                    alt=""
                  />
                  <p className="font-bold text-2xl md:text-4xl">{item.title}</p>
                </div>
                <button className="py-1.5 px-5 text-lg rounded-full mr-10 bg-black text-white text-center font-semibold">
                  Подробнее о кусе -&gt;
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto w-full max-w-6xl pl-4">
            <Swiper
              slidesPerView={getSlidesPerView()}
              spaceBetween={30}
              className="mySwiper"
              loop={true}
            >
              {courseArr.map((item, index) => (
                <SwiperSlide key={index} className="flex gap-[15px]">
                  <div className="z-10 shadow-lg p-4 flex flex-col justify-between w-full  rounded-md bg-[#181818]">
                    <div className=" w-full mx-auto h-[280px] justify-between">
                      <img
                        className="mb-5 w-full h-[191px] rounded-2xl"
                        src={item.image}
                        alt=""
                      />
                      <p className="font-medium text-md md:text-lg text-[white]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        <div className="mt-20">
          <h1 className="text-[#F0D625] font-bold text-4xl lg:text-2xl max-w-7xl w-full m-auto lg:mb-5 mb-10 md:mb-20 lg:text-left text-center px-4">
            ОТЗЫВЫ
          </h1>

          {window.innerWidth >= 1200 ? (
            // Desktop layout with pagination
            <div className="mx-auto w-full max-w-7xl  px-4">
              <div className="flex items-start justify-between mx-auto gap-6 w-full">
                {currentItems.map((_, index) => (
                  <div
                    className="w-full z-[99999] flex items-center justify-center rounded-xl bg-[#C4C4C4] xl:shadow-[0px_0px_60px_#F0D625] h-[310px]"
                    key={startIndex + index + 1}
                  >
                    <div className="flex items-center justify-center w-20 h-12 border-solid border rounded-3xl border-white">
                      <img src={play} alt="Play button" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {Array(totalPages)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-6 z-[9999999999999] h-6 rounded-full border-2 border-[#F0D625] ${
                        currentPage === index + 1
                          ? "bg-[#F0D625]"
                          : "bg-transparent"
                      }`}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-7xl px-4">
              <Swiper
                slidesPerView={window.innerWidth < 768 ? 1.7 : 2.7}
                spaceBetween={30}
                className="mySwiper gap-0"
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
              >
                {currentItems.map((_, index) => (
                  <SwiperSlide>
                    <div
                      className="w-full z-[99999] flex items-center justify-center rounded-xl bg-[#C4C4C4] xl:shadow-[0px_0px_60px_#F0D625] h-[310px]"
                      key={startIndex + index + 1}
                    >
                      <div className="flex items-center justify-center w-20 h-12 border-solid border rounded-3xl border-white">
                        <img src={play} alt="Play button" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {Array(totalPages)
                  .fill(0)
                  .map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`w-6 z-[9999999999999] h-6 rounded-full border-2 border-[#F0D625] ${
                        currentPage === index + 1
                          ? "bg-[#F0D625]"
                          : "bg-transparent"
                      }`}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
