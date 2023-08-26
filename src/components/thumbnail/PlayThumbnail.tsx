import React from 'react'
import PauseIcon from '@mui/icons-material/Pause';
import SarchOrderBy from './SarchOrderBy'
import Verify from '../../assets/SVG/Verify'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayThumbnail = () => {
  return (
    <div className='w-full flex flex-wrap items-center relative'>
      
      {/* Icono de Play/Pause */}
      <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#5C67DE] rounded-full">
        <PlayArrowIcon className='text-white' sx={{height: '42px', width: '42px'}}/>
      </div>

      {/* Título (centrado) */}
      <div className='absolute inset-0 flex justify-center items-center gap-2'>
        <h2 className='text-white text-[32px] font-bold tracking-[-0.64px]'>How to start a podcast</h2>
        <div className='pt-2'>
          <Verify />
        </div>
      </div>
      
      {/* Componente SearchOrderBy */}
      <div className="flex-grow"></div>
      <div className="flex justify-center items-center">
        <SarchOrderBy />
      </div>

    </div>
  )
}

export default PlayThumbnail