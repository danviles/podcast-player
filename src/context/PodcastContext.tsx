import { createContext } from "react";
import { PodcastInterface, PodcastRSS, PodcastState } from '../interfaces/interfaces';


export type PodcastContextProps = {
    podcastState: PodcastState;
    setPodcats: ( podcasts: PodcastInterface[] | null ) => void;
    setCurrentPodcast: ( podcast: PodcastRSS[] | null ) => void;
    setCurrentEpisode: ( currentEpisode: PodcastRSS | null ) => void;
} 


export const PodcastContext = createContext<PodcastContextProps>({} as PodcastContextProps );