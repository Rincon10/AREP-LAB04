const posts = [];

const generateDefaultTweet = () => {
    const times = 3;
    for (let i = 0; i < times; i++) {
        const post = {
            displayName: 'Camilo Rincon',
            username: 'Rincon10',
            verified: true,
            text:
                i +
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo repellat odio nesciunt reiciendis dolor voluptates facere commodi cumque debitis nihil distinctio ducimus consequuntur architecto eius, quasi iure id sapiente.',
            image: i + 'image',
            avatar: 'https://avatars.githubusercontent.com/u/53798019?v=4',
        };
        const tweets = [];

        for (let j = 0; j < times; j++) {
            const tweet = {
                displayName: 'Mark Mark' + j,
                username: 'Markkkk' + j,
                verified: true,
                text: 'tweetMessage' + j,
                image: 'tweetImage' + j,
                avatar: '',
            };

            tweets.push(tweet);
        }
        post['t'] = tweets;
        posts.push(post);
    }
};

export const getPosts = async () => {
    if (posts.length === 0) {
        await generateDefaultTweet();
    }
    return posts;
};

export const addTweet = tweet => {
    posts.push(tweet);
    return posts;
};

const addPost = id => {
    posts[id] = [];
};

export default addPost;
