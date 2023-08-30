import { createContext } from "react";
import { PodcastInterface, PodcastRSS, PodcastState } from '../interfaces/interfaces';


export type PodcastContextProps = {
    podcastState: PodcastState;
    setPodcats: ( podcasts: PodcastInterface[] | null ) => void;
    setCurrentPodcast: ( podcast: PodcastInterface | null ) => void;
    setCurrentPodcastEpisodes: ( podcastEpisodes: PodcastRSS[] | null ) => void;
    setCurrentEpisode: ( currentEpisode: PodcastRSS | null ) => void;
    setSearchQuery: ( searchQuery: string ) => void;
    resetPodcastEpisodes: () => void;
    ordernPodcastsByReleased: () => void;
    ordernPodcastsByName: () => void;
    ordernEpisodesByTitle: () => void;
    ordernEpisodesByReleased: () => void;
} 


export const PodcastContext = createContext<PodcastContextProps>({} as PodcastContextProps );