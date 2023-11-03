import React from "react";

const Description = ({ videos }) => {
  const tags=[
    "Clash Royale",
    "Clash Royale Game",
    "Supercell",
    "Supercell Game",
    "Clash Royale Supercell",
    "Mobile Game"
  ];
  return (
    <>
      <div className="bg-neutral-100 p-3 text-sm">
        <div className="font-bold text-neutral-700">{videos?.statistics?.viewCount} views</div>
        <div className="flex">{tags.map((tg)=>(
          <p key={tg}>#{tg}</p>
        ))}</div>
        <div>{videos?.snippet?.description}</div>
      </div>
    </>
  );
};

export default Description;
