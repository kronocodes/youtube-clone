import React from 'react'
import { convertToMillion, randomNumber } from "../utils/conversion";

const VideoCard = ({ info }) => {
     const { snippet, statistics } = info;
     const { channelTitle, title, thumbnails } = snippet;
     const { viewCount } = statistics;

     return (
          <div className='mb-12 h-[302px] w-[360px]'>
               <div className=''>
                    <img
                         className='rounded-xl w-[360px]'
                         alt="thumbnail"
                         src={thumbnails.medium.url} />
               </div>
               <ul className='grid grid-cols-7 grid-rows-2'>
                    <img
                         id="img"
                         alt="channel logo"
                         width="36"
                         height="36"
                         className='mt-3 rounded-full col-start-1 col-end-2'
                         src={thumbnails.default.url}></img>
                    <li className='pt-3 font-semibold col-start-2 col-end-8 leading-5 line-clamp-2'>{title}</li>
                    <div className='pt-2 \flex flex-col text-[14px] leading-5 text-gray-700 col-start-2 col-end-8 row-start-2 row-end-3'>
                         <li className=''>{channelTitle}</li>
                         {convertToMillion(viewCount)} M views . {randomNumber()} days ago {" "}
                    </div>
               </ul>
          </div>
     );
};

export default VideoCard;