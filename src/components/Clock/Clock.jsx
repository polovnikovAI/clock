import React, { useEffect, useState } from 'react';
import s from './Clock.module.sass';
import classNames from 'classnames';

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

    let dayTime = (hours) => {
        if (hours >= 6 && hours <= 10) {
            return 'morning';
        }
        if (hours > 10 && hours < 17) {
            return 'afternoon';
        }
        if (hours >= 17 && hours <= 21) {
            return 'evening';
        }
        if (hours > 21 || hours < 6) {
            return 'night';
        }
    };

    const clock = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${
        seconds > 9 ? seconds : '0' + seconds
    }`;

    const naming = (
        <span
            className={s.name}
            contentEditable='true'
            suppressContentEditableWarning={true}>
            [Enter name]
        </span>
    );

    return (
        <div
            className={
                dayTime(hours) === 'morning'
                    ? classNames(s.wrapper, s.backgroundMorning)
                    : dayTime(hours) == 'afternoon'
                    ? classNames(s.wrapper, s.backgroundAfternoon)
                    : dayTime(hours) == 'evening'
                    ? classNames(s.wrapper, s.backgroundEvening)
                    : dayTime(hours) == 'night'
                    ? classNames(s.wrapper, s.backgroundNight)
                    : classNames(s.wrapper)
            }>
            <div className={s.clock}>{clock}</div>
            <div className={s.hello}>
                <div className={s[dayTime(hours)]}>
                    Good {dayTime(hours)} {naming}
                </div>
            </div>
            <div className={s.focus}>
                What Is Your Focus For Today
                <br />
                <span
                    contentEditable='true'
                    suppressContentEditableWarning={true}>
                    [Enter Focus]
                </span>
            </div>
        </div>
    );
};

export default Clock;
