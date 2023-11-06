import React from "react";
import { useState } from "react";

function formatViewCount(viewCount) {
  if (viewCount >= 1000000) {
    return `${(viewCount / 1000000).toFixed(1)}M`;
  } else {
    return viewCount.toLocaleString();
  }
}

const Description = ({ videos }) => {
  const viewCount = videos?.statistics?.viewCount;
  const description = videos?.snippet?.description;
  const initialLinesToShow = 3;

  const [showFullDescription, setShowFullDescription] = useState(false);
  if (!description) {
    return null;
  }
  const parts = description.split('\n');
  const withLineBreaks = parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      <br />
    </React.Fragment>
  ));

  const descriptionToDisplay = showFullDescription? withLineBreaks : withLineBreaks.slice(0, initialLinesToShow);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  return (
    <>
      <div className="bg-neutral-100 p-3 text-sm rounded-2xl">
        <div className="font-bold text-neutral-700">{formatViewCount(viewCount)} views</div>

        <div className="text-neutral-700">{descriptionToDisplay}</div>
        
        {parts.length > initialLinesToShow && (
          <button onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Description;
