import React from 'react'

const ChannelDetails = () => {
   return (
      <>
         <div>Title</div>
         <div className='flex h-14 pb-3 border-b-[1px]'>
            <div className='flex mt-3 mr-3'>
               <div className='h-[42.5px] w-[52px]'>
                  <img
                     className='h-10 rounded-full' src="https://yt3.ggpht.com/GyxO3Mplkm1LhJLFDnExlu_HSH38d3O-s4y3cixMthzaSGJvm_JY53BgpqaaoTCquyV3aCsVsw=s88-c-k-c0x00ffffff-no-rj" alt="logo" />
               </div>
               <div className='flex flex-col text-start mr-6'>
                  <div className='text-base font-black align-middle'>Channel Name</div>
                  <div className='text-xs text-zinc-500 mr-1 align-middle'>100k subscribers</div>
               </div>
               <div>
                  <button className='bg-black text-white text-sm h-9 w-24 rounded-r-full rounded-l-full font-bold'>Subscribe</button>
               </div>
            </div>

            <div className=''>
               <div className='flex right-0 relative'>
                  <div className='block'>
                     <button className='w-20 bg-gray-200 h-9 rounded-l-full'>Likes</button>
                     <button className='w-20 bg-gray-200 h-9 rounded-r-full'>dislikes</button>
                  </div>
                  <button className='w-20 bg-gray-200 h-9 rounded-l-full rounded-r-full'>share</button>
                  <button className='w-20 bg-gray-200 h-9 rounded-l-full rounded-r-full'>menu</button>
               </div >
            </div>
         </div>
      </>
   )
}

export default ChannelDetails