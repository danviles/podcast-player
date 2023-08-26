import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function createData(
  name: string,
  description: string,
  released: string,
  duration: string,
) {
  return { name, description, released, duration };
}

const rows = [
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
  createData('Frozen yoghurt', 'Podcast cool', 'today', '21:00'),
];

const PlayListTable = () => {
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
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell>
                <PlayArrowIcon />
              </TableCell>
              <TableCell>
                <div className='flex items-center gap-2'>
                  <img className='w-[45px] h-[45px] rounded-md' src="https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/3c/02/1c/3c021c34-851d-bb7f-b426-d62683a4ac42/SPE_SPIDERMAN_ATS_TH_FINAL_ITUNES_WW_ARTWORK_EN_2000x3000_3TUF3R000066S7.lsr/100x100bb.jpg" alt="" />
                  <div className='flex flex-col'>
                    <p>{row.name}</p>
                    <p>Ken Adams</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.released}</TableCell>
              <TableCell>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PlayListTable