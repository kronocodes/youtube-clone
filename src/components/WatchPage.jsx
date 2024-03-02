import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { VIDEO_API, SUGGESTED_VIDEO_LIST_API_URL } from "../utils/constants";
import ChannelDetails from "./ChannelDetails";
import CommentsContainer from "./CommentsContainer";
import Description from "./Description";
import WatchPageSuggestion from "./WatchPageSuggestion";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const videoId = searchParams.get("v");
  useEffect(() => {
    getVideos();
  }, [videoId]);

  const getVideos = async () => {
    const data = await fetch(VIDEO_API + videoId);
    const json = await data.json();
    setVideos(json?.items[0]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  return (
    <>
      <div className="mx-auto">
        <div className="ml-6 pt-6 pr-6 flex gap-x-2">
          <div className="w-full max-w-[1280px]">
            <iframe
              className="aspect-video w-full"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
            <div className="mt-3 mb-6">
              <ChannelDetails info={videos} />
              <Description videos={videos} />
              <div className="lg:hidden w-full"> <WatchPageSuggestion /></div>
              <CommentsContainer info={videoId} count={videos?.statistics?.commentCount}/>
            </div>
          </div>
          <div></div>
          <div className="hidden lg:flex">
            <WatchPageSuggestion />
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchPage;
