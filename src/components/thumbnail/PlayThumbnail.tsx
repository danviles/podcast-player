import React from "react";
import SarchOrderBy from "./SarchOrderBy";
import Verify from "../../assets/SVG/VerifySVG";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { usePodcastContext } from "../../hooks/usePodcast";
import { TableTypeEnum } from "../../interfaces/interfaces";

interface PlayThumbnailProps {
  PlayButton?: boolean;
  OrderByType: TableTypeEnum;
}

const PlayThumbnail = ({
  PlayButton = false,
  OrderByType,
}: PlayThumbnailProps) => {

  const { currentEpisode, isPLaying } = usePodcastContext();
  
  const handlePlay = () => {

  }

  return (
    <div className="flex justify-between items-center w-full">
      {/* Icono de Play/Pause */}

      {PlayButton && currentEpisode && (
        <div
          className="flex justify-center items-center w-[60px] h-[60px] bg-[#5C67DE] rounded-full cursor-pointer"
          onClick={handlePlay}
        >
          {isPLaying ? (
            <PauseIcon
              className="text-white"
              sx={{ height: "42px", width: "42px" }}
            />
          ) : (
            <PlayArrowIcon
              className="text-white"
              sx={{ height: "42px", width: "42px" }}
            />
          )}
        </div>
      )}

      {/* Título (centrado) */}
      {PlayButton && currentEpisode ? (
        <div className="flex flex-grow px-5 justify-center items-center gap-2 w-5/12">
          <h2 className="text-white text-[32px] font-bold tracking-[-0.64px]">
            {currentEpisode?.episode!.title}
          </h2>
          <div className="pt-2">
            <Verify />
          </div>
        </div>
      ) : null}

      {/* Componente SearchOrderBy */}
      <div></div>
      <div className="flex justify-center items-center">
        <SarchOrderBy tableType={OrderByType} />
      </div>
    </div>
  );
};

export default PlayThumbnail;
