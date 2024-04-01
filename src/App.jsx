import React, { useEffect } from 'react';
import './App.css';

const time = () => {
    let date = Date.now();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return hours + ':' + minutes + ':' + seconds;
};

const App = () => {
    let clock = useEffect(time, []);
    return (
        <div>
            <div style={{ fontSize: '60px' }}>{clock}</div>
        </div>
    );
};

export default App;
