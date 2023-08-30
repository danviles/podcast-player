import { useReducer } from "react";

import {
  PodcastInterface,
  PodcastRSS,
  PodcastState,
  currentEpisode,
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
  isShuffle: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PodcastProvider = ({ children }: props) => {
  const [podcastState, dispatch] = useReducer(PodcastReducer, INITIAL_STATE);

  const setPodcats = (podcastsQuery: PodcastInterface[] | null) => {
    dispatch({ type: "setPodcats", payload: podcastsQuery });
  };

  const setSearchQuery = (searchQuery: string) => {
    dispatch({ type: "setSearchQuery", payload: searchQuery });
  };

  const setCurrentPodcast = (currentPodcast: PodcastInterface | null) => {
    dispatch({ type: "setCurrentPodcast", payload: currentPodcast });
  };

  const setCurrentPodcastEpisodes = (currentPodcast: PodcastRSS[] | null) => {
    dispatch({ type: "setCurrentPodcastEpisodes", payload: currentPodcast });
  };

  const setCurrentEpisode = (currentEpisode: currentEpisode) => {
    dispatch({ type: "setCurrentEpisode", payload: currentEpisode });
  };

  const resetPodcastEpisodes = () => {
    dispatch({ type: "ResetPodcastEpisodes" });
  };

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

  const toggleShuffle = () => {
    dispatch({ type: "toggleShuffle" });
  };

  const togglePlay = (playState: boolean) => {
    dispatch({ type: "togglePlay", payload: playState  });
  }

  const nextEpisode = () => {
    if (podcastState.isShuffle) {
      const randomNumber = Math.floor(
        Math.random() * podcastState.currentPodcastEpisodes!.length
      );
      const nextEpisode: currentEpisode = {
        episode: podcastState.currentPodcastEpisodes![randomNumber],
        index: randomNumber,
      };
      dispatch({ type: "nextEpisode", payload: nextEpisode });
    } else {
      if (
        podcastState.currentPodcastEpisodes!.length - 1 ==
        podcastState.currentEpisode?.index
      ) {
        const nextEpisode: currentEpisode = {
          episode: podcastState.currentPodcastEpisodes![0],
          index: 0,
        };
        dispatch({ type: "nextEpisode", payload: nextEpisode });
      } else {
        const nextEpisode: currentEpisode = {
          episode:
            podcastState.currentPodcastEpisodes![
              podcastState?.currentEpisode!.index + 1
            ],
          index: podcastState?.currentEpisode!.index + 1,
        };
        dispatch({ type: "nextEpisode", payload: nextEpisode });
      }
    }
  };

  const backEpisode = () => {
    if (podcastState.isShuffle) {
      const randomNumber = Math.floor(
        Math.random() * podcastState.currentPodcastEpisodes!.length
      );
      const backEpisode: currentEpisode = {
        episode: podcastState.currentPodcastEpisodes![randomNumber],
        index: randomNumber,
      };
      dispatch({ type: "backEpisode", payload: backEpisode });
    } else {
      if (
        podcastState.currentEpisode?.index == 0
      ) {
        const backEpisode: currentEpisode = {
          episode: podcastState.currentPodcastEpisodes![podcastState.currentPodcastEpisodes!.length-1],
          index: podcastState.currentPodcastEpisodes!.length-1,
        };
        dispatch({ type: "backEpisode", payload: backEpisode });
      } else {
        const backEpisode: currentEpisode = {
          episode:
            podcastState.currentPodcastEpisodes![
              podcastState?.currentEpisode!.index - 1
            ],
          index: podcastState?.currentEpisode!.index - 1,
        };
        dispatch({ type: "backEpisode", payload: backEpisode });
      }
    }
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
        resetPodcastEpisodes,
        toggleShuffle,
        nextEpisode,
        backEpisode,
        togglePlay
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
