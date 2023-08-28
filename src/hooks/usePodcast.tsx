import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import axiosClient from "../config/axiosClient";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Parser from "rss-parser/dist/rss-parser.min.js";
import { useNavigate } from 'react-router-dom';

const parser = new Parser();

const getPodcasts = async (query: string, offset: number) => {
  const { data } = await axiosClient(
    `/search?term=${encodeURIComponent(
      query
    )}&media=podcast&limit=25&offset=${offset}`
  );
  return data.results;
};

const getRssPodcast = async (feedUrl) => {
  const proxyUrl = 'https://api.allorigins.win/raw?url=';
  const targetUrl = encodeURIComponent(feedUrl);
  const response = await axios.get(proxyUrl + targetUrl);
  const feed = await parser.parseString(response.data);
  return feed.items;
};

export const useGetPodcasts = (query: string, offset: number) => {
  const { setPodcats } = useContext(PodcastContext);
  return useQuery(["podcasts", query], () => getPodcasts(query, offset), {
    enabled: false,
    onSuccess: (data) => {
      setPodcats(data);
    },
  });
};

export const useGetRssPodcast = (feedUrl: string) => {
  const { setCurrentPodcast } = useContext(PodcastContext);
  const navigate = useNavigate();
  return useQuery(["rssPodcast", feedUrl], () => getRssPodcast(feedUrl), {
    enabled: false,
    onSuccess: (data) => {
      setCurrentPodcast(data);
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
