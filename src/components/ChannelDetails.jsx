import React from "react";
import like from "../assets/likeb.svg";
import share from "../assets/share.svg";
import dot from "../assets/dot.png";

const ChannelDetails = ({ info }) => {
  function formatViews(views) {
    if (views < 1000) {
        return views;
    } else if (views < 1000000) {
        return (views / 1000).toFixed(0) + 'K';
    } else {
        return (views / 1000000).toFixed(1) + 'M';
    }
  }
  return (
    <>
      <div className="font-semibold text-lg leading-6 w-full">{info?.snippet?.title}</div>
      <div className="text-neutral-700 w-full">
        <div className="flex items-center">
          <div className="flex my-3 md:flex-row flex-col justify-between gap-y-3 w-full">
            <div className="flex">
              <div className="h-[42.5px] w-[52px] mr-2">
                <img
                  className="h-10  rounded-full"
                  src="https://yt3.ggpht.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s88-c-k-c0x00ffffff-no-rj"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold align-middle mr-5">
                  {info?.snippet?.channelTitle}
                </div>
                <div className="text-xs text-zinc-600 align-middle">
                  100k subscribers
                </div>
              </div>
                <button className="bg-black text-white text-[13px] h-9 px-4 rounded-full font-semibold">
                  Subscribe
                </button>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center justify-center px-3 bg-neutral-100 h-9 rounded-l-full text-sm font-semibold">
                <img className="px-1" src={like}></img>
                {formatViews(info?.statistics?.likeCount)}
              </button>
              <button className="flex items-center justify-center bg-neutral-100 border-l h-9 rounded-r-full px-3">
                <img className="rotate-180 mr-1" src={like}></img>
              </button>
              <button className="flex justify-center items-center bg-neutral-100 h-9 px-3 rounded-full text-sm">
                <img src={share}></img>Share
              </button>
              <button className="flex items-center justify-center w-9 bg-neutral-100 h-9 rounded-full">
                <img className="w-6 rotate-90" src={dot}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelDetails;
