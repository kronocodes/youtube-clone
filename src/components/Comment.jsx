import React from 'react'
import like from '../assets/likeb.svg'

const Comment = ({com}) => {
  return (
    <>
    <div className='flex mb-4'>
      <div className='w-10 h-10 aspect-square mr-3'>
    <img className='w-full rounded-full' src={com?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}/>
    </div>
    <div className='flex flex-col'>
      <div className='text-sm font-semibold' >{com?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
      <div className='text-sm line-clamp-3'>{com?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
      <div className='flex text-xs items-center h-8 mt-[4px] ml-[-7px]'>
        <img className='w-[23px] h-[23px] mr-1' src={like}></img>
      <div className='mr-2'>{com?.snippet?.topLevelComment?.snippet?.likeCount}</div>
      <img className='w-[23px] h-[23px] rotate-180 -z-10' src={like}></img>
      <div className='ml-2 w-14 h-full flex items-center justify-center font-semibold hover:bg-neutral-200 rounded-full'> Reply</div>
      </div>
        </div>
        </div>
    </>
  )
}

export default Comment