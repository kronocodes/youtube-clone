import React from 'react'

const SuggestedVideoCard = ({ info }) => {
   const { snippet, statistics } = info;
   const { channelTitle, title, thumbnails } = snippet;

   return (
      <div className='p-2 h-70 w-80 shadow-lg'>
         <div className=''>
            <img alt="thumbnail" src={thumbnails.standard.url} />
         </div>
         <ul className='grid'>
            
            <li>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}</li>
         </ul>
      </div>
   );
};

export default SuggestedVideoCard;