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
    } = useQuery(
        ['videos', keyword],
        () =>
            keyword
                ? youtubeApiClient.Search(keyword)
                : youtubeApiClient.Popular(),
        { staleTime: 1000 * 60 * 5 }
    );

    if (isLoading) return <p>is Loading</p>;
    if (error) return <p>is error</p>;

    return (
        <section>
            <ul
                className="grid gird-cols-1 
            2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-2 gap-y-4"
            >
                {videoList &&
                    videoList.map(video => (
                        <VideoCard key={video.id} video={video} />
                    ))}
            </ul>
        </section>
    );
}
