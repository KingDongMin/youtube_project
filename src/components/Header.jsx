import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function Header() {
    const { keyword } = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    useEffect(() => setText(keyword || ''), [keyword]);

    const handleChange = e => {
        setText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    };

    return (
        <header className="flex w-full p-4 item-center text-3xl   border-b-2 border-black-100 mb-4 ">
            <Link to="/" className="flex items-center">
                <BsYoutube className="text-4xl text-red-600 mr-2" />
                <h1 className="font-bold">YouTube</h1>
            </Link>
            <form
                className="flex w-full text-2xl justify-center"
                onSubmit={handleSubmit}
            >
                <input
                    className="text-black w-1/2 pl-2"
                    id="input"
                    value={text}
                    type="text"
                    onChange={handleChange}
                />
                <label htmlFor="input">
                    <button className="p-2 bg-black">
                        <BsSearch />
                    </button>
                </label>
            </form>
        </header>
    );
}
