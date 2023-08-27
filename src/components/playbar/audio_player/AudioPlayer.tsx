import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import ShufleSVG from "../../../assets/SVG/ShufleSVG";
import StepBackSVG from "../../../assets/SVG/StepBackSVG";
import StepForwardSVG from "../../../assets/SVG/StepForwardSVG";
import RotateSVG from "../../../assets/SVG/RotateSVG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeSVG from "../../../assets/SVG/VolumeSVG";

const formatTime = (time) => {
  const mins = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const secs = (time % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(57);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioObj = audioRef.current;

    const handleTimeUpdate = () => {
      setPosition(Math.floor(audioObj.currentTime));
    };

    audioObj.addEventListener("timeupdate", handleTimeUpdate);
    audioObj.volume = volume;
    return () => {
      audioObj.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [volume]);

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
      {/* Controles */}
      <div className="flex justify-center items-center gap-4">
        <ShufleSVG />
        <StepBackSVG />
        <div className="flex justify-center items-center w-[45px] h-[45px] bg-[#5C67DE] rounded-full">
          <button onClick={togglePlayPause}>
            <PlayArrowIcon
              className="text-white"
              sx={{ height: "24px", width: "24px" }}
            />
          </button>
        </div>
        <StepForwardSVG />
        <RotateSVG />
      </div>
      {/* Slider de sonido */}
      <div className="w-full" >
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
      <audio
        ref={audioRef}
        src="https://anchor.fm/s/29b19cec/podcast/play/16008927/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-6-2%2F87007506-44100-2-e30a79f43bef7.m4a"
      ></audio>
      {/* Slider de volumen */}
      <Box width={300}>
        <div className="flex justify-between items-center gap-2 text-white pr-5">
          <VolumeSVG />
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
