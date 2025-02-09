import React, { useEffect, useState } from "react";
import SliderComponent from "../components/SliderComponent";

import play from "../assets/play.svg";
import useFetchData from "../api/useFetchData";
import IMAGE_URL from "../api/Api";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [trendingSeries, setTrendingSeries] = useState([]);
  const [newSeries, setNewSeries] = useState([]);
  const [exploreMovies, setExploreMovies] = useState([]);
  const [index, setIndex] = useState(0);

  const {data, error} = useFetchData();

  console.log("haha", data);


  const slicedData = data.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slicedData.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [slicedData.length]);

  return (
    <>
      <div
        style={{
          background: slicedData[index]
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${IMAGE_URL}/original${slicedData[index].backdrop_path})`
            : "transparent",
        }}
        className="images relative"
      >
        <div
          className="flex flex-col justify-center"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="container">
            <div className="flex flex-row justify-center lg:justify-between">
              <div className="space-y-6 w-[400px] lg:space-y-4  mt-[0px] lg:mt-[-72px]">
                <h3 className="text-5xl text-white font-bold leading-[56px]">
                  {slicedData[index]
                    ? `${slicedData[index].original_title}`
                    : ""}
                </h3>
                <p className="text-sm font-medium text-white leading-[18px]">
                  {slicedData[index] ? `${slicedData[index].overview}` : ""}
                </p>
                <a
                  href="#"
                  className="w-[165px] flex flex-row gap-2 items-center bg-[#BE123C] py-[6px] px-[16px] rounded-md"
                >
                  <img src={play} alt="play icon" />{" "}
                  <span className="font-bold text-white text-sm leading-6">
                    WATCH TRAILER
                  </span>
                </a>
              </div>
              <div
                style={{
                  transition: "translate 300ms ease-in-out",
                }}
                className="pointer cursor-pointer hidden lg:block"
              >
                {slicedData.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className="flex flex-row items-center gap-[6px] cursor-pointer"
                  >
                    <div
                      className={`h-1 w-5 ${
                        i === index
                          ? "bg-white mb-[10px] rounded-md"
                          : "bg-transparent"
                      } transition-all duration-300`}
                    ></div>
                    <div
                      style={{
                        transition: "translate 300ms ease-in-out",
                      }}
                      className={`text-white  mb-[10px] ${
                        i === index
                          ? "text-white text-sm font-bold"
                          : "text-xs text-[#9CA3AF]"
                      } `}
                      key={i}
                      onClick={() => setIndex(i)}
                    >
                      {i + 1}
                    </div>
                  </div>
                ))}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <SliderComponent heading={"Trending Movies"} data={data} seeMoreLink={'/featured-movies'} />
        <SliderComponent heading={"New Arrival"} data={newMovies} />
        <SliderComponent heading={"Trending TV Series"} data={trendingSeries} />
        <SliderComponent heading={"New TV Series"} data={newSeries} />
      </div>
    </>
  );
}

export default Home;
