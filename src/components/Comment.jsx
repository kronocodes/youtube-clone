import React from 'react'
import like from '../assets/likeb.svg'

const Comment = ({com}) => {
  return (
    <>
    <div className='flex w-full mb-4'>
      <div className='w-14'>
    <img className='w-9 h-9 rounded-full' src={com?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}/>
    </div>
    <div className='flex flex-col'>
      <div className='text-[13px] font-semibold' >@{com?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
      <div className='text-sm line-clamp-4'>{com?.snippet?.topLevelComment?.snippet?.textDisplay}</div>
      <div className='flex text-xs items-center h-8 mt-[4px] ml-[-7px]'>
        <img className='w-[23px] h-[23px] mr-1' src={like}></img>
      <div className='mr-2'>{com?.snippet?.topLevelComment?.snippet?.likeCount}</div>
      <img className='w-[23px] h-[23px] rotate-180' src={like}></img>
      <div className='ml-2 w-14 h-full flex items-center justify-center font-semibold hover:bg-neutral-200 rounded-full'> Reply</div>
      </div>
        </div>
        </div>
    </>
  )
}

export default Comment