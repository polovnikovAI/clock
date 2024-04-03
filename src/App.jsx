import React from 'react';
import s from './App.module.sass';
import Clock from './components/Clock/Clock';

const App = () => {
    return (
        <div className={s.wrapper}>
            <Clock />
        </div>
    );
};

export default App;
