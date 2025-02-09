import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid'

function FeaturedMovies() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    

  return (
    <>
    <div className='container pt-[82px]'>
    <MovieGrid data={trendingMovies} />
    </div>
    
    </>
  )
}

export default FeaturedMovies