import React from "react";

const SuggestionVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  function formatViews(views) {
    if (views < 1000) {
      return views;
    } else if (views < 1000000) {
      return (views / 1000).toFixed(0) + "K";
    } else {
      return (views / 1000000).toFixed(1) + "M";
    }
  }
  
  return (
    <div className="w-full flex">
      <div className="h-[94px] min-w-fit">
        <img
          className="rounded-lg w-full h-full"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>
      <div className="w-full lg:w-[202px] pl-2">
        <div className="flex text-sm font-[450] mb-2 line-clamp-2">{title}</div>
        <div className="text-xs">
          <div className="">{channelTitle}</div>
          <div className="">{formatViews(viewCount)}</div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;
