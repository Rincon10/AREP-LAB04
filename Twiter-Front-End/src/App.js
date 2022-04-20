import React from 'react';
import './css/App.css';
import Sidebar from './components/ui/Sidebar';
import Feed from './components/feed/Feed';
/* import Widgets from './components/UI/Widgets'; */

const App = () => {
    return (
        <div className="app">
            <Sidebar />

            <Feed />
        </div>
    );
};

export default App;
