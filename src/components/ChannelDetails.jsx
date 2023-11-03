import React from 'react'
import like from '../assets/likeb.svg'
import share from '../assets/share.svg'
import dot from '../assets/dot.png'

const ChannelDetails = ({info}) => {
   return (
      <>
         <div className='font-semibold text-lg'>{info?.snippet?.title}</div>
         <div className='flex h-14 pb-3 border-b-[1px] items-center'>
            <div className='flex mt-3 mr-3'>
               <div className='h-[42.5px] w-[52px]'>
                  <img
                     className='h-10 rounded-full' src="https://yt3.ggpht.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s88-c-k-c0x00ffffff-no-rj" alt="logo" />
               </div>
               <div className='flex flex-col text-start mr-6'>
                  <div className='text-base text-neutral-700 font-semibold align-middle'>{info?.snippet?.channelTitle}</div>
                  <div className='text-xs text-zinc-500 mr-1 align-middle'>100k subscribers</div>
               </div>
               <div>
                  <button className='bg-black text-white text-[13px] h-9 w-24 rounded-r-full rounded-l-full font-semibold'>Subscribe</button>
               </div>
            </div>
            <div className=''>
               <div className='flex right-0 relative'>
                  <button className='flex items-center justify-center px-3 bg-neutral-100 h-9 rounded-l-full text-sm font-semibold'><img className='px-1' src={like}></img>{info?.statistics?.likeCount}</button>
                  <button className='flex items-center justify-center bg-neutral-100 border-l h-9 rounded-r-full px-3'><img className='rotate-180 mr-1' src={like}></img></button>
                  <button className='flex justify-center items-center bg-neutral-100 h-9 px-3 rounded-l-full rounded-r-full text-sm'><img src={share}></img>Share</button>
                  <button className='flex items-center justify-center w-9 bg-neutral-100 h-9 rounded-l-full rounded-r-full'><img className='w-6 rotate-90' src={dot}></img></button>
               </div >
            </div>
         </div>
      </>
   )
}

export default ChannelDetails