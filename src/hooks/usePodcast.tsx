// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Parser from "rss-parser/dist/rss-parser.min.js";
import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import axiosClient from "../config/axiosClient";
import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const parser = new Parser();


interface QueryProps {
  pageParam?: number;
  queryKey: ( string )[];
}


const getPodcasts = async ({ pageParam = 0, queryKey }: QueryProps) => {
  const offset = pageParam * 25;
  const { data } = await axiosClient(
    `/search?term=${encodeURIComponent(
      queryKey[1]
    )}&media=podcast&limit=25&offset=${offset}`
  );
  return data.results;
};

const getRssPodcast = async (feedUrl: string) => {
  const proxyUrl = 'https://api.allorigins.win/raw?url=';
  const response = await axios.get(proxyUrl + feedUrl);
  const feed = await parser.parseString(response.data);
  return feed.items;
};

export const useGetPodcasts = (query: string) => {
  const { setPodcats } = useContext(PodcastContext);
  return useInfiniteQuery(
    ["podcasts", query],
    getPodcasts,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 25) {
          return undefined;  // No más páginas disponibles
        }
        return pages.length;  // Retorna el número de la próxima página
      },
      onSuccess: (data) => {
        setPodcats(data.pages.flat().filter(podcast => podcast.trackCount <= 500));
      },
      enabled: query !== "",
      retry: 1
    }
  );
};


export const useGetRssPodcast = (feedUrl: string) => {
  const { setCurrentPodcastEpisodes, podcastState } = useContext(PodcastContext);
  const navigate = useNavigate();
  return useQuery(["rssPodcast", podcastState.currentPodcast?.artistName], () => getRssPodcast(feedUrl), {
    enabled: false,
    retry: 1,
    onSuccess: (data) => {
      setCurrentPodcastEpisodes(data);
      navigate(`/podcast/`)
    }
  });
};

export const usePodcastContext = () => {
  const state = useContext(PodcastContext);
  return {
    ...state,
    ...state.podcastState,
  };
};
