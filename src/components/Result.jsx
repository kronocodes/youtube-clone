import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import ResultVideoCard from "./ResultVideoCard";

const Results = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  const search_query = searchParams?.get("search_query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getVideos();
  }, [search_query]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search_query);
    const json = await data.json();
    console.log(json.items);
    const onlyVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    setIsLoading(false);
    setVideos(onlyVideos);
  };

  useEffect(() => {
    setIsLoading(true);
    getVideos().catch((e) => {
      setIsLoading(false);
      setVideos(null);
    });
  }, [search_query]);

  return (
    <div className="md:flex flex-col md:flex-wrap md:justify-center mx-auto w-fit">
      { videos && videos.map((video) => {
        return (
          <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
            <ResultVideoCard key={video?.id?.videoId} info={video} />
          </Link>
        );
      })}
      {!videos && <p>No videos found.</p>}
    </div>
  );
};

export default Results;