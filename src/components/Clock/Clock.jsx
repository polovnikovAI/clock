import React, { useEffect, useState } from 'react';
import s from './Clock.module.sass';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const delay = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(delay);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const clock = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${
        seconds > 9 ? seconds : '0' + seconds
    }`;

    const naming = (
        <span
            className={s.name}
            contentEditable='true'>
            [Enter name]
        </span>
    );
    return (
        <div className={s.wrapper}>
            <div className={s.clock}>{clock}</div>
            <div className={s.hello}>
                {hours < 10 ? (
                    <div className={s.morning}>Good morning {naming}</div>
                ) : hours < 17 ? (
                    <div className={s.afternoon}>Good afternoon {naming}</div>
                ) : hours < 21 ? (
                    <div className={s.evening}>Good evening {naming}</div>
                ) : hours < 6 ? (
                    <div className={s.night}>Good night {naming}</div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Clock;
