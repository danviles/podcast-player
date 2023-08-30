import { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlined from "@mui/icons-material/SkipNextOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import ShuffleOnOutlinedIcon from "@mui/icons-material/ShuffleOnOutlined";
import PauseIcon from "@mui/icons-material/Pause";
import { usePodcastContext } from "../../../hooks/usePodcast";
import { formatTime } from "../../../helpers/formatDates";

const isDurationInSeconds = (duration: number | string | string[]) => {
  return !isNaN(duration as number);
};

const isDurationInHMSFormat = (duration: string | number | string[]) => {
  if (typeof duration === "string") {
    return duration.includes(":");
  }
  return false;
};

const parseDuration = (duration: string | number | string[]) => {
  if (isDurationInSeconds(duration)) {
    return Number(duration);
  }

  if (typeof duration === "string" && isDurationInHMSFormat(duration)) {
    const [hours, minutes, seconds] = duration.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  return 0;
};

const AudioPlayer = () => {
  const {
    currentEpisode,
    isPLaying,
    isShuffle,
    toggleShuffle,
    nextEpisode,
    backEpisode,
    togglePlay,
  } = usePodcastContext();
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioObj = audioRef.current;

    const handleTimeUpdate = () => {
      setPosition(Math.floor(audioObj!.currentTime));
    };

    if (
      currentEpisode &&
      currentEpisode.episode &&
      currentEpisode.episode.itunes &&
      currentEpisode.episode.itunes.duration
    ) {
      const newDuration = parseDuration(currentEpisode.episode.itunes.duration);
      setDuration(newDuration);
    }

    audioObj!.addEventListener("timeupdate", handleTimeUpdate);
    audioObj!.volume = volume;

    return () => {
      audioObj!.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentEpisode, volume]);

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handleShufleToggle = () => {
    toggleShuffle();
  };

  const togglePlayPause = () => {
    const audioObj = audioRef.current;
    if (playing) {
      audioObj!.pause();
    } else {
      audioObj!.play();
    }
    setPlaying(!playing);
    togglePlay(!playing);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    const audioObj = audioRef.current;
    if (typeof newValue === "number") {
      audioObj!.currentTime = newValue;
      setPosition(newValue);
    }
  };

  return (
    <div className="flex justify-between items-center gap-4 w-full pr-2">
      <div className="flex justify-center items-center gap-4">
        {isShuffle ? (
          <ShuffleOnOutlinedIcon
            className="text-white cursor-pointer"
            onClick={handleShufleToggle}
          />
        ) : (
          <ShuffleIcon
            className="text-white cursor-pointer"
            onClick={handleShufleToggle}
          />
        )}
        <SkipPreviousOutlinedIcon
          className="text-white cursor-pointer"
          sx={{ height: "24px", width: "24px" }}
          onClick={backEpisode}
        />
        <div className="flex justify-center items-center w-[45px] h-[45px] bg-[#5C67DE] rounded-full cursor-pointer">
          <button onClick={togglePlayPause}>
            {isPLaying ? (
              <PauseIcon
                className="text-white"
                sx={{ height: "24px", width: "24px" }}
              />
            ) : (
              <PlayArrowIcon
                className="text-white"
                sx={{ height: "24px", width: "24px" }}
              />
            )}
          </button>
        </div>
        <SkipNextOutlined
          className="text-white cursor-pointer"
          sx={{ height: "24px", width: "24px" }}
          onClick={nextEpisode}
        />
        <ReplayOutlinedIcon
          className="text-white cursor-pointer"
          sx={{ height: "24px", width: "24px" }}
          onClick={() => {
            audioRef.current!.currentTime = 0;
          }}
        />
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center gap-5 text-white">
          <span>{formatTime(position)}</span>
          <Slider
            size="small"
            value={position}
            max={duration}
            onChange={handleSliderChange}
          />
          <span>
            {formatTime(
              currentEpisode?.episode?.itunes.duration
                ? formatTime(currentEpisode.episode.itunes.duration)
                : "00:00:00"
            )}
          </span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentEpisode?.episode?.enclosure.url}
      ></audio>
      <VolumeUpOutlinedIcon
        className="text-white"
        sx={{ height: "24px", width: "24px" }}
      />
      <Box width={300}>
        <div className="flex justify-between items-center gap-2 text-white pr-5">
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
