import { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { usePodcastContext } from '../../hooks/usePodcast';
import { defaultFormatDate } from '../../helpers/formatDates';
import { PodcastRSS } from '../../interfaces/interfaces';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const PlayListTable = () => {

  const [parent] = useAutoAnimate()
  const { currentPodcastEpisodes, setCurrentEpisode } = usePodcastContext()

  const handleSetPlayUrl = (episode: PodcastRSS) => {
    setCurrentEpisode(episode)
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
          {currentPodcastEpisodes?.map((episode) => (
            <TableRow
              key={episode.title}
            >
              <TableCell>
                <PlayArrowIcon onClick={ () => handleSetPlayUrl(episode)}/>
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <img className='w-[45px] h-[45px] rounded-md' src={episode.itunes.image} alt="" />
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