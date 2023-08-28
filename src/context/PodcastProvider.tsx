import { useReducer, useState } from 'react';

import { PodcastInterface, PodcastRSS, PodcastState } from '../interfaces/interfaces';
import { PodcastReducer } from './PodcastReducer';
import { PodcastContext } from './PodcastContext';

const INITIAL_STATE: PodcastState = {
    podcasts: [],
    currentPodcast: null,
    currentEpisode: null
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const PodcastProvider = ({ children }: props ) => {

    

    const [ podcastState, dispatch] = useReducer( PodcastReducer, INITIAL_STATE );

    const setPodcats = (podcasts: PodcastInterface[] | null ) => {
        dispatch({ type: 'setPodcatsList', payload:  podcasts })
    }

    const setCurrentPodcast = (currentPodcast: PodcastRSS[] | null ) => {
        dispatch({ type: 'setCurrentPodcast', payload: currentPodcast })
    }

    const setCurrentEpisode = (currentEpisode: PodcastRSS | null ) => {
        dispatch({ type: 'setCurrentEpisode', payload: currentEpisode })
    }

    return (
        <PodcastContext.Provider value={{
            podcastState,
            setPodcats,
            setCurrentPodcast,
            setCurrentEpisode
        }}>
            { children }
        </PodcastContext.Provider>
    )
}