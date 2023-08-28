import React from 'react'
import AudioPlayer from './audio_player/AudioPlayer'
import { usePodcastContext } from '../../hooks/usePodcast';

const BottomPlayBar = () => {

  const { currentEpisode } = usePodcastContext();

  return (
    <div className='flex justify-between items-center w-full h-[110px] bg-[#1A1A1A]'>
      {/* Imagen */}
      <div className='w-1/12 h-full'>
        <img className='object-cover max-h-full' src={currentEpisode?.itunes.image} alt="" />
      </div>
      {/* Titulo y autor */}
      <div className='flex flex-col justify-center items-center w-2/12 h-full gap-2 text-white'>
        <p className='text-lg'>{currentEpisode?.title}</p>
        <p className='text-sm'>{currentEpisode?.creator}</p>
      </div>
      {/* Audio player */}
      <div className='flex flex-grow justify-between items-center'>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default BottomPlayBar