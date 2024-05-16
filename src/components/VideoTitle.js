import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/4 py-5 text-lg'>{overview}</p>
      <div>
        <button className=' p-3 px-10 mr-5 rounded-md bg-white text-black hover:bg-gray-400'>▶️ Play</button>
        <button className='bg-slate-400 p-3 px-10 rounded-md bg-opacity-65'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle