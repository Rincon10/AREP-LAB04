import React, { useState } from 'react';
import '../../css/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { addTweet } from 'components/helpers/getPosts';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        const tweet = {
            displayName: 'Camilo Rincon',
            username: 'Rincon10',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://avatars.githubusercontent.com/u/53798019?v=4',
        };

        addTweet(tweet);

        setTweetMessage('');
        setTweetImage('');
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/53798019?v=4" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;
