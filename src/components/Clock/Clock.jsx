import React, { useEffect, useState } from 'react';
import s from './Clock.module.sass';
import classNames from 'classnames';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    // Обновление state - time каждые 1000мс
    useEffect(() => {
        const delay = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(delay);
    }, []);

    // Часы, минуты, секунды из состояния
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // Проверка времени суток
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

    // Сборка часов в строку. Добавляем 0, для формата часов 00:00:00
    const clock = `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${
        seconds > 9 ? seconds : '0' + seconds
    }`;

    // Редактируемая строка
    const naming = (
        <span
            onBlur={() => {
                localStorage.setItem('name', document.getElementById('name').textContent);
            }}
            id='name'
            className={s.name}
            contentEditable='true'
            suppressContentEditableWarning={true}>
            {localStorage.name == undefined ? '[Enter name]' : localStorage.name}
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
                {/* Присвоение класса в зависимости от времени суток */}
                <div className={s[dayTime(hours)]}>
                    Good {dayTime(hours)} {naming}
                </div>
            </div>
            <div className={s.focus}>
                What Is Your Focus For Today
                <br />
                <span
                    // onBlur срабатывает после того как фокус с элемента переключается
                    // добавление в localStorage значение span
                    onBlur={() => {
                        localStorage.setItem('focus', document.getElementById('focus').textContent);
                    }}
                    id='focus'
                    // возможность редактирования содержимого span
                    contentEditable='true'
                    // строка чтобы не было ошибки
                    suppressContentEditableWarning={true}>
                    {/* проверка на существующее значение в localStorage */}
                    {localStorage.focus == undefined ? '[Enter focus]' : localStorage.focus}
                </span>
            </div>
        </div>
    );
};

export default Clock;
