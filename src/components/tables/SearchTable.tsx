import {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useGetRssPodcast, usePodcastContext } from '../../hooks/usePodcast';
import { defaultFormatDate } from '../../helpers/formatDates';
import { PodcastInterface } from '../../interfaces/interfaces';

const SearchTable = () => {

  const { podcasts } = usePodcastContext();
  
  const [feedRss, setFeedRss] = useState<string>('');
  
  const getRssPodcastQuery = useGetRssPodcast(feedRss);

  useEffect(() => {
    getRssPodcastQuery.refetch()
  }, [feedRss])
  

  const handleSelectPodcast = (podcast: PodcastInterface) => {
    setFeedRss(podcast.feedUrl)
  }

  return (
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
        <TableBody>
          {podcasts?.map((podcast) => (
            <TableRow
              key={podcast.trackId}
              onClick={() => handleSelectPodcast(podcast)}
            >
              <TableCell>
                <PlayArrowIcon />
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <img className='w-[45px] h-[45px] rounded-md' src={podcast.artworkUrl100} alt="" />
                  <div className='flex flex-col'>
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
  );
}

export default SearchTable