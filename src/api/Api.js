const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.themoviedb.org/3"
const IMAGE_URL = "https://image.tmdb.org/t/p"

export const fetchTrendingMovies = async () => {
    try {
        const response = await fetch(`${API_URL}/trending/movie/week?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch trending movies");

        const data = await response.json();

        return data.results;  
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return []; 
    }
};

export default  IMAGE_URL; 