export enum TableTypeEnum {
  'SearchTable',
  'EpisodeTable',
}

export interface PodcastState {
  podcasts: PodcastInterface[] | null
  searchQuery: string
  currentPodcast: PodcastInterface | null
  currentPodcastEpisodes: PodcastRSS[] | null
  currentEpisode: PodcastRSS | null
  isPLaying: boolean
}

export interface PodcastRSS {
  creator: string
  title: string
  link: string
  pubDate: string
  enclosure: Enclosure
  "dc:creator": string
  content: string
  contentSnippet: string
  guid: string
  isoDate: string
  itunes: Itunes
}

export interface Enclosure {
  url: string
  length: string
  type: string
}

export interface Itunes {
  summary: string
  explicit: string
  duration: string
  image: string
  episode: string
  season: string
  episodeType: string
}

export interface PodcastInterface {
  wrapperType: string
  kind: string
  collectionId?: number
  trackId: number
  artistName: string
  collectionName?: string
  trackName: string
  collectionCensoredName?: string
  trackCensoredName: string
  collectionArtistId?: number
  collectionArtistViewUrl?: string
  feedUrl: string
  collectionViewUrl?: string
  trackViewUrl: string
  previewUrl: string
  artworkUrl30: string
  artworkUrl60: string
  artworkUrl100: string
  artworkUrl600: string
  collectionPrice?: number
  trackPrice?: number
  collectionHdPrice?: number
  trackHdPrice?: number
  releaseDate: string
  collectionExplicitness: string
  trackExplicitness: string
  trackCount?: number
  trackNumber?: number
  trackTimeMillis: number
  country: string
  currency: string
  primaryGenreName: string
  contentAdvisoryRating?: string
  shortDescription?: string
  longDescription?: string
  hasITunesExtras?: boolean
  artistId?: number
  artistViewUrl?: string
  discCount?: number
  discNumber?: number
  isStreamable?: boolean
  trackRentalPrice?: number
  trackHdRentalPrice?: number
  collectionArtistName?: string
}