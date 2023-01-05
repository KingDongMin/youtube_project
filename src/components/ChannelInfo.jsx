import React from 'react';
import { useYoutubeApiClient } from '../context/YoutubeApiContext';
import { useQuery } from 'react-query';

export default function ChannelInfo({ channelId, channelTitle }) {
    const { youtubeApiClient } = useYoutubeApiClient();
    const { data: url } = useQuery(
        ['channel', channelId],
        () => youtubeApiClient.Channel(channelId),
        { staleTime: 1000 * 60 * 5 }
    );
    return (
        <div className="flex items-center my-4">
            {url && (
                <img
                    className="w-[48px] h-[48px] rounded-full mr-2"
                    src={url}
                    alt="aa"
                />
            )}
            <h3 className="text-xl font-semibold opacity-80">{channelTitle}</h3>
        </div>
    );
}
