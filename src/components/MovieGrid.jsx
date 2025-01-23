import React from 'react';
import { IMAGE_URL } from '../Api';

function MovieGrid({ data = [] }) {
  return (
    <> 
      <div className="my-16 grid grid-cols-5 gap-y-16 justify-items-center w-5/5 mx-auto">
        {data.map((item, index) => (
        <a href='#' key={index}>
          <div className="w-full max-w-[250px]" >
            <img
              className="w-full"
              src={`${IMAGE_URL}/original${item.poster_path}`}
              alt="Movie Poster"
            />

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
          </a>
        ))}
      </div>
    </>
  );
}

export default MovieGrid;
