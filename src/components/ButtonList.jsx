import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Cricket", "Comedy", "Cooking", "News", "Bollywood_Music", "Soccer", "Mixes", "Kapil_Sharma", "React", "Algorithms", "Ponds", "Indian_cuisine", "Computer_Science"]

const ButtonList = () => {
  return (
    <div className='flex top-14 sticky flex-nowrap text-sm overflow-x-scroll max-w-screen-xl mx-5 snap-x snap-mandatory no-scrollbar scrollbar-none'>
      {list.map((list, index) => {
        return (
          <Button key={index} name={list} />
        );
      })}
    </div>
  )
}

export default ButtonList
{/*relative sticky top-14 flex flex-auto items-center space-x-3 px-5 py-2.5 border-t border-b border-sideBarHoverBg bg-topNavBg bg-opacity-95 z-20 overflow-x-scroll overflow-y-hidden scrollbar-none */}