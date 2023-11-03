import React from 'react'
import {Link} from 'react-router-dom';

const WatchPageSuggestion = ({eachvideo}) => {
  return (
     <div className='h-screen pt-6 pr-6 bg-gray-200 w-auto'>
          {/* <Link className="no-decoration" to={`/watch?v=${eachvideo.id.videoId===undefined? eachvideo.id : eachvideo.id.videoId}`}>
            <div className="suggestion-card">
                <img className="suggest-thumbnail" src={eachvideo?.snippet?.thumbnails?.medium?.url}/>
                <div className='suggest-content'>
                    <div className="line-1">{eachvideo?.snippet?.title}</div>
                    <div className="line-2">{eachvideo?.snippet?.channelTitle}</div>
                </div>  
            </div>
        </Link> */}
    </div>
  )
}
export default WatchPageSuggestion;
