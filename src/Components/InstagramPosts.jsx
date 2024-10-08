import React from 'react';
import './InstagramPosts.css';
import Botox from '../assets/Videos/Botox.mp4'
import Pores from '../assets/Videos/Pores.mp4'
import TearTrough from '../assets/Videos/TearTrough.mp4'

const InstagramPost = ({ video, caption }) => (
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
        <p className="post-caption" dangerouslySetInnerHTML={{ __html: caption }} />
    </div>
);

const InstagramPosts = () => {
    const posts = [
        {
            video: Pores,
            caption: "Thinking those deep 'pores' will never go away? <a href='https://www.instagram.com/reel/DA0cKdfSrfo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>Check it out on</a>!"
        },
        {
            video: TearTrough,
            caption: "Time to spill the beans on TearTrough Fillers! <a href='https://www.instagram.com/reel/C2mQiXKSgmS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>Check it out on</a>!"
        },
        {
            video: Botox,
            caption: "Essential Dos and Dont's After Botox Treatment <a href='https://www.instagram.com/reel/C4vL9wCSV-W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='>Check it out on</a>!"
        }
    ];

    return (
        <div className="instagram-posts-container">
            <h2 className="latest-text">LATEST</h2>
            <h1 className="instagram-title">Instagram Post</h1>
            <div className="posts-grid">
                {posts.map((post, index) => (
                    <InstagramPost key={index} {...post} />
                ))}
            </div>
            <div className="button-container">
                <button className="load-more-btn">LOAD MORE</button>
            </div>
        </div>
    );
};

export default InstagramPosts;