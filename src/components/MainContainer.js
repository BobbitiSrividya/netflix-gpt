import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const mainMovie = movies[0];
  console.log(mainMovie);
  if (!mainMovie) return;
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackground  />
    </div>
  );
}

export default MainContainer