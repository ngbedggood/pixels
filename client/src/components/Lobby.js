import React, { useState, useEffect } from 'react';
import { Input, Button } from '@mui/material';

import io from 'socket.io-client';
const socket = io.connect("http://localhost:1235");


export default function Lobby() {

    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('server_message', (data) => {
            setMessage(data.message);
        })
    }, [socket]);

    const handleClick = () => {
        socket.emit('send_message', { message: 'Hello from the frontend!'});
    };

    return (
        <div>
            <div>
                <label>
                    <input readOnly={true} />
                    <button>
                        Generate
                    </button>
                </label>
            </div>
            <div>
                <label>
                    <input placeholder='Enter lobby code...' />
                    <button onClick={handleClick}>
                        Join
                    </button>
                </label>
            </div>
            {message}
        </div>
    )
}