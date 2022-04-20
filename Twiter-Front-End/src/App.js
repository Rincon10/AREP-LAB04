import React from 'react';
import './css/App.css';
import Sidebar from './components/UI/Sidebar';
import Feed from './components/Feed/Feed';
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
