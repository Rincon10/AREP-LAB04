import { useState } from 'react';
import { getPosts } from 'components/helpers/getPosts';

const usePost = () => {
    const [posts, setPosts] = useState([]);

    const loadData = async () => {
        const res = (await getPosts()) || [];
        setPosts(res);
    };

    return { posts, setPosts, loadData };
};

export default usePost;
