import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useYoutubeApiClient } from '../context/YoutubeApiContext';
import VideoCard from '../components/VideoCard';

export default function Videos() {
    const { keyword } = useParams();
    const { youtubeApiClient } = useYoutubeApiClient();
    const {
        isLoading,
        error,
        data: videoList,
    } = useQuery(['videos', keyword], () => youtubeApiClient.Search());
    if (isLoading) return <p>is Loading</p>;
    if (error) return <p>is error</p>;

    return (
        <section>
            <h1>videos</h1>
            <ul>
                {videoList &&
                    videoList.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
            </ul>
        </section>
    );
}
