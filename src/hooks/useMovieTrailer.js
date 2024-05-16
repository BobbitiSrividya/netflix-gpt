import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieTrailer = async(movieId) => {
        const data = await fetch('https://api.themoviedb.org/3/movie/823464/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter(video => video.type === "Trailer");
        const movieTrailer = filteredData[0];
        console.log(movieTrailer);
        dispatch(addTrailerVideo(movieTrailer));
    }

    useEffect(() => {
        getMovieTrailer(movieId);
    },[]);

}

export default  useMovieTrailer;