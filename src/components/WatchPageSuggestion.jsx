import React from 'react'
import {Link} from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useState,useEffect } from 'react';
import SuggestionVideoCard from './SuggestionVideoCard';

const WatchPageSuggestion = ({}) => {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(20);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };
  const handleShowMore = () => {
    setVisibleVideos(prevCount => prevCount + 30); // Increment count by 25
  };
  return (
    <div className='h-full w-full lg:w-[402px]'>
    {videos.slice(0, visibleVideos).map((video) => (
      <Link key={video.id} to={`/watch?v=${video.id}`}>
        <div className="my-2">
          <SuggestionVideoCard info={video} />
        </div>
      </Link>
    ))}
    {visibleVideos < videos.length && (
      <button className='text-blue-500 font-semibold text-sm border border-zinc-600 rounded-full px-4 py-2 my-2 ml-1' onClick={handleShowMore}>Show more</button>
    )}
  </div>
  )
}
export default WatchPageSuggestion;
