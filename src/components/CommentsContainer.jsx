import React from 'react'
import { useState, useEffect } from 'react';
import { COMMENTS_LIST_API } from '../utils/constants';
import Comment from './Comment'
const CommentsContainer = ({info, count}) => {
   const [comments, setComments] = useState([]);
   const videoId = info;

   const getComments = async () => {
    const data = await fetch(COMMENTS_LIST_API+videoId);
    const json = await data.json();
   //  const com=json?.items[0]?.snippet?.topLevelComment?.snippet
    setComments(json?.items);
   //  console.log(comments);
  };
  useEffect(() => {
   getComments();
 }, []);
   return (
      <>
      <div className='font-bold text-xl my-2'>{count} Comments</div>
      <div className='flex items-center mb-4'>
         <img className='w-10 h-10 rounded-full ' src='https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj'></img>
      <input
              type="text"
              placeholder="Add a comment..."
              className="w-full m-5 border-b-[1px] outline-none text-sm"
              //   value={searchText}
              //   onChange={(e) => setSearchText(e.target.value)}
            />
      </div>
      <div>
         {comments.map((com)=>(
            <Comment key={com.id.videoId} com={com}/>
         ))}
      </div>
      </>
   );
};

export default CommentsContainer