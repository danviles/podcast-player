import React from 'react'
import PlayThumbnail from '../thumbnail/PlayThumbnail'
import SearchTable from '../tables/SearchTable'

const PodcastSearchPage = () => {
  return (
    <section className='flex flex-col'>
      <PlayThumbnail />
      <SearchTable />
    </section>
  )
}

export default PodcastSearchPage