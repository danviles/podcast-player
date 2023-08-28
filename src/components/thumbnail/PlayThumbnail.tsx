import React from "react";
import PauseIcon from "@mui/icons-material/Pause";
import SarchOrderBy from "./SarchOrderBy";
import Verify from "../../assets/SVG/VerifySVG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { usePodcastContext } from "../../hooks/usePodcast";

const PlayThumbnail = () => {
  const { currentEpisode } = usePodcastContext();

  return (
    <div className="w-full flex flex-wrap items-center relative">
      {/* Icono de Play/Pause */}
      <div className="flex justify-center items-center w-[60px] h-[60px] bg-[#5C67DE] rounded-full">
        <PlayArrowIcon
          className="text-white"
          sx={{ height: "42px", width: "42px" }}
        />
      </div>

      {/* Título (centrado) */}
      {currentEpisode? (
        <div className="absolute inset-0 flex justify-center items-center gap-2">
          <h2 className="text-white text-[32px] font-bold tracking-[-0.64px]">
            {currentEpisode?.title}
          </h2>
          <div className="pt-2">
            <Verify />
          </div>
        </div>
      ): null}

      {/* Componente SearchOrderBy */}
      <div className="flex-grow"></div>
      <div className="flex justify-center items-center">
        <SarchOrderBy />
      </div>
    </div>
  );
};

export default PlayThumbnail;
