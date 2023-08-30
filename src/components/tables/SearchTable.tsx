import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  useGetPodcasts,
  useGetRssPodcast,
  usePodcastContext,
} from "../../hooks/usePodcast";
import { defaultFormatDate } from "../../helpers/formatDates";
import { PodcastInterface } from "../../interfaces/interfaces";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const SearchTable = () => {
  const [feedRss, setFeedRss] = useState<string>("");

  const { podcasts, searchQuery, setCurrentPodcast } = usePodcastContext();

  const getRssPodcastQuery = useGetRssPodcast(feedRss);
  const getPodcastsQuery = useGetPodcasts(searchQuery);

  const [parent] = useAutoAnimate();

  useEffect(() => {
    getRssPodcastQuery.refetch();
  }, [feedRss]);

  const handleSelectPodcast = (podcast: PodcastInterface) => {
    setCurrentPodcast(podcast);
    setFeedRss(podcast.feedUrl);
  };

  return (
    <>
      <TableContainer component={Table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Released</TableCell>
            </TableRow>
          </TableHead>
          <TableBody ref={parent}>
            {podcasts?.map((podcast) => (
              <TableRow
                key={podcast.trackId}
                onClick={() => handleSelectPodcast(podcast)}
                className="cursor-pointer"
              >
                <TableCell>
                  <PlayArrowIcon />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[45px] h-[45px] rounded-md"
                      src={podcast.artworkUrl100}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p>{podcast.collectionName}</p>
                      <p>{podcast.artistName}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{podcast.shortDescription}</TableCell>
                <TableCell>{defaultFormatDate(podcast.releaseDate)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {getPodcastsQuery.isFetching && (
        <div className="flex justify-center items-center mt-2">
          <CircularProgress />
        </div>
      )}
      <Button
        onClick={() => getPodcastsQuery.fetchNextPage()}
        disabled={!getPodcastsQuery.hasNextPage}
      >
        Load more
      </Button>
    </>
  );
};

export default SearchTable;
