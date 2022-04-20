import React, { useEffect, useState } from 'react';

import '../../css/Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import FlipMove from 'react-flip-move';
import { getPosts } from 'components/helpers/getPosts';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    const loadData = async () => {
        const res = (await getPosts()) || [];
        setPosts(res);
    };

    useEffect(() => {
        loadData();
        return () => {};
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
};

export default Feed;
