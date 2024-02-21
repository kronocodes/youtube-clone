import React from 'react'
import Button from './Button'

const list = ["All", "Live", "Gaming", "Music", "Cricket", "Comedy", "Cooking", "News", "Bollywood_Music", "Soccer", "Mixes", "Kapil_Sharma", "React", "Algorithms", "Ponds", "Indian_cuisine", "Computer_Science"]

const ButtonList = () => {
  return (
    <div className='bg-white flex top-14 sticky flex-nowrap text-sm mx-5'>
      {list.map((list, index) => {
        return (
          <Button key={index} name={list} />
        );
      })}
    </div>
  )
}

export default ButtonList