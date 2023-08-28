import React, { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { usePodcastContext } from '../../../hooks/usePodcast';
import { format } from 'date-fns';

const convertDurationToSeconds = (durationString) => {
  const [hours, minutes, seconds] = durationString.split(':').map(Number);
  return (hours * 3600) + (minutes * 60) + seconds;
};

const formatTime = (time) => {
  const date = new Date(0, 0, 0, 0, 0, time, 0);
  return format(date, 'HH:mm:ss');
};

const AudioPlayer = () => {
  const { currentEpisode } = usePodcastContext();
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioObj = audioRef.current;

    const handleTimeUpdate = () => {
      setPosition(Math.floor(audioObj.currentTime));
    };

    if (currentEpisode && currentEpisode.itunes && currentEpisode.itunes.duration) {
      const newDuration = convertDurationToSeconds(currentEpisode.itunes.duration);
      setDuration(newDuration);
    }

    audioObj.addEventListener('timeupdate', handleTimeUpdate);
    audioObj.volume = volume;

    return () => {
      audioObj.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentEpisode, volume]);

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const togglePlayPause = () => {
    const audioObj = audioRef.current;
    if (playing) {
      audioObj.pause();
    } else {
      audioObj.play();
    }
    setPlaying(!playing);
  };

  const handleSliderChange = (event, newValue) => {
    const audioObj = audioRef.current;
    audioObj.currentTime = newValue;
    setPosition(newValue);
  };

  return (
    <div className="flex justify-between items-center gap-4 w-full pr-2">
      {/* ... Aquí tus otros controles y SVGs */}
      <div className="flex justify-center items-center gap-4">
        {/* ... Tus otros íconos SVG */}
        <div className="flex justify-center items-center w-[45px] h-[45px] bg-[#5C67DE] rounded-full">
          <button onClick={togglePlayPause}>
            <PlayArrowIcon className="text-white" sx={{ height: '24px', width: '24px' }} />
          </button>
        </div>
        {/* ... Tus otros íconos SVG */}
      </div>

      {/* Slider de sonido */}
      <div className="w-full">
        <div className="flex justify-between items-center gap-5 text-white">
          <span>{formatTime(position)}</span>
          <Slider
            size="small"
            value={position}
            max={duration}
            onChange={handleSliderChange}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <audio ref={audioRef} src={currentEpisode?.enclosure.url}></audio>

      {/* Slider de volumen */}
      <Box width={300}>
        <div className="flex justify-between items-center gap-2 text-white pr-5">
          {/* ... Tu ícono SVG para el volumen */}
          <Slider
            size="small"
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
          />
        </div>
      </Box>
    </div>
  );
};

export default AudioPlayer;
