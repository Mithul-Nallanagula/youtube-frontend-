import React, { useContext, useEffect, useState } from 'react';
import '../Css/SearchPage.css';
import { MyContext } from '../Context/MyProvider';
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom';

function SearchPage() {
    const navigate = useNavigate();
    const { videos = [], filter, setFilter } = useContext(MyContext); // Ensure videos is always an array
    const [prompt, setPrompt] = useState('');

    function handleSearch() {
        setFilter(prompt);
    }

    useEffect(() => {
        setFilter('');
    }, []);

    return (
        <div className='Search-page'>
            <div className="top">
                <i className="ri-arrow-left-s-line" onClick={() => { navigate(-1); setFilter(''); }}></i>
                <input type="text" placeholder='Search' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <i className="ri-search-line" onClick={handleSearch}></i>
            </div>
            <div className="btm">
                {videos?.length > 0 ? (
                    videos
                        .filter((video) =>
                            video.title.toLowerCase().includes(filter.toLowerCase()) ||
                            video.description.toLowerCase().includes(filter.toLowerCase()) ||
                            video.channelId?.name?.toLowerCase().includes(filter.toLowerCase()) || // Optional chaining
                            video.category.toLowerCase().includes(filter.toLowerCase())
                        )
                        .map((video) => <VideoCard key={video._id} video={video} />)
                ) : (
                    <p>No videos available.</p>
                )}
            </div>
        </div>
    );
}

export default SearchPage;