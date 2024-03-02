import React from 'react'

const VideoCard = ({ info }) => {
     const { snippet, statistics } = info;
     const { channelTitle, title, thumbnails } = snippet;
     const { viewCount } = statistics;
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
          <div className='mb-12 aspect-auto md:w-[364px] w-full max-w-[426px]'>
               <div className=''>
                    <img
                         className='rounded-xl md:w-[364px] w-full'
                         alt="thumbnail"
                         src={thumbnails.medium.url} />
               </div>
               <ul className='grid grid-cols-7 grid-rows-2'>
                    <div className='w-9 h-19 rounded-full overflow-hidden mt-3'><img
                         id="img"
                         alt="channel logo"
                         className='object-cover'
                         src={thumbnails.default.url}></img>
                         </div>
                    <li className='pt-3 font-semibold col-start-2 col-end-8 leading-5 line-clamp-2'>{title}</li>
                    <div className='pt-2 \flex flex-col text-[14px] leading-5 text-gray-700 col-start-2 col-end-8 row-start-2 row-end-3'>
                         <li className=''>{channelTitle}</li>
                         <li>{formatViews(viewCount)} views</li>
                    </div>
               </ul>
          </div>
     );
};

export default VideoCard;