import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import { API_KEY, API_URL } from '../Api';

function FeaturedMovies() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    useEffect(() => {

        const fetchTrendingMovies = () => {
            fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`)
              .then((res) => res.json())
              .then((res) => setTrendingMovies(res.results));
          };
          fetchTrendingMovies();

    }, [])

  return (
    <>
    <div className='container pt-[82px]'>
    <MovieGrid data={trendingMovies} />
    </div>
    
    </>
  )
}

export default FeaturedMovies