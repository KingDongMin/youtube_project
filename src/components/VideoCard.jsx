import React from 'react';
import { useNavigate } from 'react-router-dom';
import { agoDate } from '../util/date';

export default function VideoCard({ video }) {
    const {
        title,
        publishedAt,
        thumbnails,
        channelTitle,
        channelId,
        description,
    } = video.snippet;
    const navigate = useNavigate();
    const handleClick = () =>
        navigate(`/videoDetail/${video.id}`, {
            state: {
                title,
                channelTitle,
                channelId,
                description,
            },
        });
    return (
        <li onClick={handleClick}>
            <img className="w-full" src={thumbnails.medium.url} alt={title} />
            <h3 className="text-l font-bold line-clamp-2 my-1">{title}</h3>
            <div className="text-sm font-semibold opacity-80 my-1">
                <p>{channelTitle}</p>
                <p>{agoDate(publishedAt)}</p>
            </div>
        </li>
    );
}
