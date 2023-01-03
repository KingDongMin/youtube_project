import React from 'react';
import { createContext, useContext } from 'react';
import { fakeClient } from '../api/fakeClient';
import { Youtube_API_Client } from '../api/youtubeApiClient';

const youtubeApiContext = createContext();
const client = new fakeClient();
const youtubeApiClient = new Youtube_API_Client(client);

export function YoutubeApiProvider({ children }) {
    return (
        <youtubeApiContext.Provider value={{ youtubeApiClient }}>
            {children}
        </youtubeApiContext.Provider>
    );
}

export function useYoutubeApiClient() {
    return useContext(youtubeApiContext);
}
