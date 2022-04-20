import React from 'react';
import '../../css/Feed.css';
import TweetBox from '../tweetbox/TweetBox';

const Feed = () => {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />
        </div>
    );
};

export default Feed;
