import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
    const { videoId } = useParams();
    const location = useLocation();
    const { title, channelTitle, channelId, description } = location.state;
    return (
        <section className="flex flex-col xl:flex-row ">
            <article className=" basis-2/3">
                <iframe
                    title={title}
                    id="player"
                    type="text/html"
                    width="100%"
                    height="650"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder="0"
                ></iframe>
                <h1>{title}</h1>
                <ChannelInfo
                    channelId={channelId}
                    channelTitle={channelTitle}
                />
                <pre className="whitespace-pre-wrap">{description}</pre>
            </article>

            <section className="basis-1/3 m-4">
                <RelatedVideos videoId={videoId} />
            </section>
        </section>
    );
}
