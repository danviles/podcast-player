import {
  PodcastInterface,
  PodcastRSS,
  PodcastState,
} from "../interfaces/interfaces";

type PodcastAction =
  | { type: "setPodcats"; payload: PodcastInterface[] | null }
  | { type: "setSearchQuery"; payload: string }
  | { type: "setCurrentPodcast"; payload: PodcastInterface | null }
  | { type: "setCurrentPodcastEpisodes"; payload: PodcastRSS[] | null }
  | { type: "setCurrentEpisode"; payload: PodcastRSS | null }
  | { type: "ResetPodcastEpisodes" }
  | { type: "sortPodcastsByName" }
  | { type: "sortPodcastsByReleased" }
  | { type: "sortEpisodesByTitle" }
  | { type: "sortEpisodesByReleased" };
// | { type: "sortEpisodesByDuration"}

export const PodcastReducer = (
  state: PodcastState,
  action: PodcastAction
): PodcastState => {
  switch (action.type) {
    case "setPodcats":
      return {
        ...state,
        podcasts: action.payload,
      };

    case "setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload,
      }

    case "setCurrentPodcast":
      return {
        ...state,
        currentPodcast: action.payload,
      };

    case "setCurrentPodcastEpisodes":
      return {
        ...state,
        currentPodcastEpisodes: action.payload,
      };

    // case "ResetPodcastEpisodes":
    //   return {
    //     ...state,
    //     currentPodcastEpisodes: [],
    //   };
    //   break;

    case "setCurrentEpisode":
      return {
        ...state,
        currentEpisode: action.payload,
      };

    case "sortPodcastsByName":
      return {
        ...state,
        podcasts: state.podcasts?.sort((a, b) =>
          a.artistName.localeCompare(b.artistName)
        )
          ? state.podcasts
          : [],
      };

    case "sortPodcastsByReleased":
      return {
        ...state,
        podcasts: state.podcasts?.sort(
          (a, b) =>
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
        )
          ? state.podcasts
          : [],
      };

    case "sortEpisodesByTitle":
      return {
        ...state,
        currentPodcastEpisodes: state.currentPodcastEpisodes?.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
          ? state.currentPodcastEpisodes
          : [],
      };

    case "sortEpisodesByReleased":
      return {
        ...state,
        currentPodcastEpisodes: state.currentPodcastEpisodes?.sort(
          (a, b) =>
            new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        )
          ? state.currentPodcastEpisodes
          : [],
      };

    // case "sortEpisodesByDuration":
    //   return {
    //     ...state,
    //     currentPodcastEpisodes: state.currentPodcastEpisodes?.sort((a, b) => a.itunes.duration - b.itunes.duration) ? state.currentPodcastEpisodes : []
    //   }

    default:
      return state;
  }
};
