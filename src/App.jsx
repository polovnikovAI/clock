import React from 'react';
import s from './App.module.sass';
import Clock from './components/Clock/Clock';

const App = () => {
    return (
        <div className={s.wrapper}>
            <Clock />
            <div className={s.focus}>
                What Is Your Focus For Today
                <br />
                <span contentEditable='true'>[Enter Focus]</span>
            </div>
        </div>
    );
};

export default App;
