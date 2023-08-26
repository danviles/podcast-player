import React from "react";
import PlayThumbnail from "../thumbnail/PlayThumbnail";
import PlayListTable from "../tables/PlayListTable";

const PodcastViewPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full h-[280px] justify-center items-center rounded-lg bg-[#1A1A1A] ">
        <img
          className="h-full w-full object-contain"
          src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/6895059/6895059-1593675434364-a4927f598b644.jpg"
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
