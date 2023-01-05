import React from 'react';
import { useNavigate } from 'react-router-dom';
import { agoDate } from '../util/date';

export default function VideoCard({ video, list }) {
    const related = list === true;
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
        <li
            onClick={handleClick}
            className={related ? 'flex items-center my-2' : ''}
        >
            <img
                className={related ? 'w-[50%] mr-2' : 'w-full'}
                src={thumbnails.medium.url}
                alt={title}
            />
            <div>
                <h3 className="text-l font-bold line-clamp-2 my-1">{title}</h3>
                <div className="text-sm font-semibold opacity-80 my-1">
                    <p>{channelTitle}</p>
                    <p>{agoDate(publishedAt)}</p>
                </div>
            </div>
        </li>
    );
}
