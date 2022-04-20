import React, { useEffect, useState } from 'react';
import '../../css/TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import { addTweet } from 'components/helpers/getPosts';
import Post from '../Post/Post';
import FlipMove from 'react-flip-move';
import usePost from 'components/hooks/usePost';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const { posts, loadData, setPosts } = usePost();

    useEffect(() => {
        loadData();
        alert('dd');
        return () => {};
    }, [posts]);

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

        setPosts(addTweet(tweet));

        setTweetMessage('');
        setTweetImage('');
    };

    return (
        <>
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
        </>
    );
}

export default TweetBox;
