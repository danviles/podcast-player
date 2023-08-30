import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PauseIcon from "@mui/icons-material/Pause";
import { usePodcastContext } from '../../hooks/usePodcast';
import { defaultFormatDate } from '../../helpers/formatDates';
import { PodcastRSS } from '../../interfaces/interfaces';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const PlayListTable = () => {

  const [parent] = useAutoAnimate()
  const { currentPodcastEpisodes, currentPodcast, isPLaying, currentEpisode, setCurrentEpisode } = usePodcastContext()

  const handleSetEpisode = (episode: PodcastRSS, index: number) => {
    setCurrentEpisode({episode, index})
  }

  return (
    <TableContainer component={Table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Topic</TableCell>
            <TableCell>Released</TableCell>
            <TableCell><AccessTimeIcon/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody ref={parent}>
          {currentPodcastEpisodes?.map((episode, index) => (
            <TableRow
              key={episode.title}
              className="cursor-pointer"
              onClick={ () => handleSetEpisode(episode, index)}
            >
              <TableCell>
                {isPLaying && currentEpisode?.episode?.enclosure.url == episode.enclosure.url ? (
                  <PauseIcon />
                ) : (
                  <PlayArrowIcon />
                )}
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <img className='w-[45px] h-[45px] rounded-md' src={episode.itunes.image ? episode.itunes.image : currentPodcast?.artworkUrl100} alt="" />
                  <div className='flex flex-col'>
                    <p>{episode.title}</p>
                    <p>{episode.creator}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{episode.creator}</TableCell>
              <TableCell>{ defaultFormatDate(episode.pubDate) }</TableCell>
              <TableCell>{episode.itunes.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default PlayListTable