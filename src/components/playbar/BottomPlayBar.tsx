import React from 'react'
import AudioPlayer from './audio_player/AudioPlayer'

const BottomPlayBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-[110px] bg-[#1A1A1A]'>
      {/* Imagen */}
      <div className='w-1/12 h-full'>
        <img className='object-cover max-h-full' src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/6895059/6895059-1593675434364-a4927f598b644.jpg" alt="" />
      </div>
      {/* Titulo y autor */}
      <div className='flex flex-col justify-center items-center w-2/12 h-full gap-2 text-white'>
        <p className='text-lg'>Titulo del podcast</p>
        <p className='text-sm'>Autor del podcast</p>
      </div>
      {/* Audio player */}
      <div className='flex flex-grow justify-between items-center'>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default BottomPlayBar