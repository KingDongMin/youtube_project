import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function VideoDetail() {
    const { videoId } = useParams();
    const location = useLocation();
    const { title, channelTitle, channelId, description } = location.state;
    console.log(videoId);
    return (
        <section>
            <article>
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
                <div>
                    <img src="" alt="channelThumnail" />
                    <p>{channelTitle}</p>
                </div>
                <pre>{description}</pre>
            </article>

            <section>related video list area</section>
        </section>
    );
}
