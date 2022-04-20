import React from 'react';
import Feed from 'components/feed/Feed';
import Sidebar from 'components/ui/Sidebar';

const HomeScreen = () => {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
        </div>
    );
};

export default HomeScreen;
