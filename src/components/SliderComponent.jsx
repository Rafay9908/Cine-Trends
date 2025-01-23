import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGE_URL } from "../Api";

import smallChevron from "../assets/small-chevron-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import { Link } from "react-router-dom";

function SliderComponent({ 
  heading, 
  data,
  seeMoreLink,
}) {
  const PrevArrow = ({ className, style, onClick }) => (
    <img
      src={arrowLeft}
      alt="Previous"
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-60px",
        zIndex: 1,
        cursor: "pointer",
        width: "48px",
        height: "48px",
      }}
      onClick={onClick}
    />
  );

  const NextArrow = ({ className, style, onClick }) => (
    <img
      src={arrowRight}
      alt="Next"
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-60px",
        zIndex: 1,
        cursor: "pointer",
        width: "48px",
        height: "48px",
      }}
      onClick={onClick}
    />
  );

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: null,
          prevArrow: null,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
        },
      },
    ],
  };

  

  return (
    <>
      <div className="my-16">
        <div className="flex flex-row justify-between mb-11">
          <h1 className="text-2xl sm:text-4xl font-bold text-black">{heading}</h1>
          <Link to={seeMoreLink} className="flex items-center text-[#BE123C] text-sm sm:text-lg">
            See more
            <span className="pl-2 inline">
              <img src={smallChevron} alt="" />
            </span>
          </Link>
        </div>

        <div className="h-[100%] bg-white">
          <a href="#">
            <div className="w-[100%] m-auto">
              <Slider {...settings}>
                {data.map((item, index) => {
                  return (
                    <div key={index} className="bg-white">
                      <div className="md:w-[250px]">
                        <img
                          src={`${IMAGE_URL}/original${item.poster_path}`}
                          className="md:w-[250px] md:h-[370px] object-contain block "
                        />
                      </div>

                      <div className="pt-3 bg-white lg:w-[250px]">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[#9CA3AF] text-xs font-bold uppercase">
                            {item.original_language}
                          </p>
                          <p className=" text-[#9CA3AF] text-xs font-bold">
                            {item.release_date}
                          </p>
                        </div>

                        <h3 className="py-3 text-lg font-bold text-[#111827]">
                        {item.title || item.name}
                        </h3>

                        <div className="flex flex-row items-center justify-between">
                          <p className="text-xs font-bold">popularity</p>
                          <p className="text-xs">{item.popularity}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default SliderComponent;
