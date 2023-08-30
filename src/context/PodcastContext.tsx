import { createContext } from "react";
import { PodcastInterface, PodcastRSS, PodcastState, currentEpisode } from '../interfaces/interfaces';


export type PodcastContextProps = {
    podcastState: PodcastState;
    setPodcats: ( podcasts: PodcastInterface[] | null ) => void;
    setCurrentPodcast: ( podcast: PodcastInterface | null ) => void;
    setCurrentPodcastEpisodes: ( podcastEpisodes: PodcastRSS[] | null ) => void;
    setCurrentEpisode: ( currentEpisode: currentEpisode ) => void;
    setSearchQuery: ( searchQuery: string ) => void;
    resetPodcastEpisodes: () => void;
    ordernPodcastsByReleased: () => void;
    ordernPodcastsByName: () => void;
    ordernEpisodesByTitle: () => void;
    ordernEpisodesByReleased: () => void;
    togglePlay: (playstate: boolean) => void;
    toggleShuffle: () => void;
    nextEpisode: () => void;
    backEpisode: () => void;
} 



export const PodcastContext = createContext<PodcastContextProps>({} as PodcastContextProps );