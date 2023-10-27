import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { VIDEO_API } from '../utils/constants';
import ChannelDetails from './ChannelDetails';
import CommentsContainer from './CommentsContainer';
import Description from './Description';
import WatchPageSuggestion from './WatchPageSuggestion';

const WatchPage = () => {

     const [searchParams] = useSearchParams();
     const [videos, setVideos] = useState([]);
     const videoId = searchParams.get("v");
     useEffect(() => {
          getVideos();
     }, []);

     const getVideos = async () => {
          const data = await fetch(VIDEO_API + videoId);
          setVideos(data);
     };

     const dispatch = useDispatch();
     useEffect(() => {
          dispatch(closeMenu());
     })

     return (
          <>
               <div className='w-screen ml-6 flex flex-wrap'>
                    <div className=''>
                         <iframe
                              className='aspect-video w-screen h-screen'
                              src={"https://www.youtube.com/embed/" + videoId}
                              title="YouTube video player"
                              frameBorder="2"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                         </iframe>
                         <div className='bg-gray-500'> <ChannelDetails /></div>
                         <div><Description /></div>
                         <div><CommentsContainer /></div>
                    </div>
               </div>
               <div className=''>
                    <WatchPageSuggestion />
               </div>
          </>
     )
}

export default WatchPage;