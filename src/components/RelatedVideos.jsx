import React from 'react';
import { useYoutubeApiClient } from '../context/YoutubeApiContext';
import { useQuery } from 'react-query';
import VideoCard from './VideoCard';

export default function RelatedVideos({ videoId }) {
    const { youtubeApiClient } = useYoutubeApiClient();

    const { data: relatedVideos } = useQuery(
        ['related', videoId],
        () => youtubeApiClient.Related(videoId),
        { staleTime: 1000 * 60 * 5 }
    );

    return (
        <ul>
            {relatedVideos &&
                relatedVideos.map(video => (
                    <VideoCard key={video.id} video={video} list={true} />
                ))}
        </ul>
    );
}
