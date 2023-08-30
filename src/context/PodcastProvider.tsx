import { useReducer } from "react";

import {
  PodcastInterface,
  PodcastRSS,
  PodcastState,
} from "../interfaces/interfaces";
import { PodcastReducer } from "./PodcastReducer";
import { PodcastContext } from "./PodcastContext";

const INITIAL_STATE: PodcastState = {
  podcasts: null,
  searchQuery: "",
  currentPodcast: null,
  currentPodcastEpisodes: [],
  currentEpisode: null,
  isPLaying: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PodcastProvider = ({ children }: props) => {
  const [podcastState, dispatch] = useReducer(PodcastReducer, INITIAL_STATE);

  const setPodcats = (podcastsQuery: PodcastInterface[] | null ) => {
    dispatch({ type: "setPodcats", payload: podcastsQuery });
  };

  const setSearchQuery = (searchQuery: string) => {
    dispatch({ type: "setSearchQuery", payload: searchQuery });
  }

  const setCurrentPodcast = (currentPodcast: PodcastInterface | null) => {
    dispatch({ type: "setCurrentPodcast", payload: currentPodcast });
  };

  const setCurrentPodcastEpisodes = (currentPodcast: PodcastRSS[] | null) => {
    dispatch({ type: "setCurrentPodcastEpisodes", payload: currentPodcast });
  };

  const setCurrentEpisode = (currentEpisode: PodcastRSS | null) => {
    dispatch({ type: "setCurrentEpisode", payload: currentEpisode });
  };

  const resetPodcastEpisodes = () => {
    dispatch({ type: "ResetPodcastEpisodes" });
  }

  const ordernPodcastsByName = () => {
    dispatch({ type: "sortPodcastsByName" });
  };

  const ordernPodcastsByReleased = () => {
    dispatch({ type: "sortPodcastsByReleased" });
  };

  const ordernEpisodesByTitle = () => {
    dispatch({ type: "sortEpisodesByTitle" });
  };

  const ordernEpisodesByReleased = () => {
    dispatch({ type: "sortEpisodesByReleased" });
  };


  return (
    <PodcastContext.Provider
      value={{
        podcastState,
        setPodcats,
        setSearchQuery,
        setCurrentPodcast,
        setCurrentEpisode,
        setCurrentPodcastEpisodes,
        ordernPodcastsByName,
        ordernPodcastsByReleased,
        ordernEpisodesByTitle,
        ordernEpisodesByReleased,
        resetPodcastEpisodes
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
