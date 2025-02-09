import MovieGrid from '../components/MovieGrid'
import useFetchData from '../api/useFetchData';

function FeaturedMovies() {
   const {data, error} = useFetchData();

   console.log('fetched Data', data)
    

  return (
    <>
    <div className='container pt-[82px]'>
    <MovieGrid data={data} />
    </div>
    
    </>
  )
}

export default FeaturedMovies