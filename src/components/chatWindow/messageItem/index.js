import React, { useState, useEffect } from 'react';
import './style.css';

export default ({ data, user }) => {

    const [time, setTime] = useState('');

    useEffect(() => {
        if (data.date > 0) {

            let d = new Date(data.date.seconds * 1000);
            let hours = d.getHours();
            let minutes = d.getMinutes();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            setTime(`${hours}:${minutes}`)

        }

    }, [data])


    return (
        <div
            className="message-line"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
            <div
                className="message-item"
                style={{
                    backgroundColor: user.id === data.author ? 'var(--bg-message-user)' : 'var(--bg-message-contact)'
                }}
            >
                <div className="message-text">{data.body}</div>
                <div className="message-date">{time}</div>

            </div>

        </div>
    );
}