import React from "react";

const SuggestionVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return(
    <div className='w-full flex'>
               <div className='w-[168px] h-[94px]'>
                    <img className='rounded-lg w-full h-full' alt="thumbnail" src={thumbnails.medium.url} />
               </div>
               <div className='w-[202px] pl-2'>
                    <div className='flex text-sm font-[450] line-clamp-1'>{title}</div>
                    <div className='text-xs'>
                         <div className=''>{channelTitle}</div>
                         <div className="">{viewCount}{" "}</div>
                    </div>
               </div>
          </div>
  );
};

export default SuggestionVideoCard;