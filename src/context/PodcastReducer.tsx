import {
  PodcastInterface,
  PodcastRSS,
  PodcastState,
} from "../interfaces/interfaces";

type PodcastAction =
  | { type: "setPodcatsList"; payload: PodcastInterface[] | null }
  | { type: "setCurrentPodcast"; payload: PodcastRSS[] | null }
  | { type: "setCurrentEpisode"; payload: PodcastRSS | null };

export const PodcastReducer = (
  state: PodcastState,
  action: PodcastAction
): PodcastState => {
  switch (action.type) {
    case "setPodcatsList":
      return {
        ...state,
        podcasts: action.payload,
      };

    case "setCurrentPodcast":
      return {
        ...state,
        currentPodcast: action.payload,
      };

    case "setCurrentEpisode":
      return {
        ...state,
        currentEpisode: action.payload,
      };

    default:
      return state;
  }
};
