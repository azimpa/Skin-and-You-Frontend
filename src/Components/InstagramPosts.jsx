import React, { useEffect, useState } from 'react';
import './InstagramPosts.css';
import axios from 'axios';

const InstagramPost = ({ video, caption, permalink }) => (
    <div className="instagram-post">
        {video ? (
            <div className="video-container">
                <video controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        ) : (
            <p>No Video Found</p>
        )}
        <p className="post-caption">{caption}</p>
        {permalink && (
            <a href={permalink} target="_blank" rel="noopener noreferrer" className="post-link">
                Check it on!
            </a>
        )}
    </div>
);

const InstagramPosts = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [posts, setPosts] = useState([]);
    const [visiblePostsCount, setVisiblePostsCount] = useState(2);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/instagram-feed`);
                const fetchedPosts = response.data.map(post => ({
                    id: post.id,
                    video: post.media_url,
                    caption: post.caption,
                    permalink: post.permalink,
                }));
                setPosts(fetchedPosts);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
                setError('Failed to fetch Instagram data');
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    const handleLoadMore = () => {
        setVisiblePostsCount((prevCount) => prevCount + 3);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="instagram-posts-container">
            <h2 className="latest-text">LATEST</h2>
            <h1 className="instagram-title">Instagram Post</h1>
            <div className="posts-grid">
                {posts.slice(0, visiblePostsCount).map((post) => (
                    <InstagramPost key={post.id} {...post} />
                ))}
            </div>
            {visiblePostsCount < posts.length && (
                <div className="button-container">
                    <button className="load-more-btn" onClick={handleLoadMore}>LOAD MORE</button>
                </div>
            )}
        </div>
    );
};

export default InstagramPosts;