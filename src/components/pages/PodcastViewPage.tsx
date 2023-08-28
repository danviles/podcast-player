import React from "react";
import PlayThumbnail from "../thumbnail/PlayThumbnail";
import PlayListTable from "../tables/PlayListTable";
import { usePodcastContext } from "../../hooks/usePodcast";

const PodcastViewPage = () => {

  const {currentPodcast} = usePodcastContext()

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full h-[280px] justify-center items-center rounded-lg bg-[#1A1A1A] ">
        <img
          className="h-full w-full object-contain"
          src={currentPodcast[0].itunes.image}
          alt=""
        />
      </div>
      <div className="w-full">
        <PlayThumbnail />
      </div>
      <div>
        <PlayListTable />
      </div>
    </div>
  );
};

export default PodcastViewPage;
