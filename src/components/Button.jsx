import React from 'react'

const Button = ({name}) => {
  return (
     <div className='h-14 flex-none snap-always snap-center'>
      <button className='border h-8 px-3 my-3 mr-3 bg-gray-200 rounded-lg hover:bg-zinc-200 duration-300 ease-in-out' >{name}</button>
        
    </div>
  )
}

export default Button