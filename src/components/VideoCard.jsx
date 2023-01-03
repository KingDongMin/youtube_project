import React from 'react';

export default function VideoCard({ video }) {
    const { title, publishedAt, thumbnails, channelTitle } = video.snippet;
    return (
        <article>
            <div>
                <img src={thumbnails.medium.url} alt={title} />
                <div>
                    <p>{title}</p>
                    <p>{channelTitle}</p>
                    <p>{publishedAt}</p>
                </div>
            </div>
        </article>
    );
}
