import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import ButtonList from "./ButtonList";

const VideoContainer = () => {
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
    <>
    {/* <div><ButtonList/></div> */}
    <div className="flex flex-wrap justify-center pt-6">
      {videos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video.id}>
          <div className="px-2">
            <VideoCard info={video} />
          </div>
        </Link>
      ))}
    </div>
    </>
  )
};

export default VideoContainer;
