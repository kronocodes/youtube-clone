import React from 'react'
import {Link} from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useState,useEffect } from 'react';
import SuggestionVideoCard from './SuggestionVideoCard';

const WatchPageSuggestion = ({}) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //console.log(json)
    setVideos(json.items);
  };
  return (
     <div className='h-full w-full md:w-[402px]'>
          {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <div className="my-2">
            <SuggestionVideoCard info={video} />
          </div>
        </Link>
      ))}
    </div>
  )
}
export default WatchPageSuggestion;
