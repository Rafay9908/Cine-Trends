import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "./Api";

const useFetchData = () => {
  const [data, setData] = useState([]);  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTrendingMovies();
        setData(result); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useFetchData;
