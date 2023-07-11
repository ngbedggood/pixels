import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Pixel from './components/Pixel';
import styles from './App.css';
import Lobby from './components/Lobby';

import io from 'socket.io-client';
const socket = io('http://localhost:1235');

export default function App() {
    let canvasSize = 8;
    const [canvasState, setCanvasState] = useState(Array.from({length: canvasSize},()=> Array.from({length: canvasSize}, () => null)));
    const [selectedColor, setSelectedColor] = useState(7);
    const [isConnected, setIsConnected] = useState(true);
    const [lobbyNum, setLobbyNum] = useState('');
    const [lobbyNumJoin, setLobbyNumJoin] = useState('');
    

    useEffect(() => {
        socket.on('send_canvas', (data) => {
            const c = data.canvas;
            setCanvasState(c);
        })
    }, [socket]);
    

    function handlePaint(color, ind) {
        let newCanvasState = canvasState.slice();
        newCanvasState[ind.row][ind.col] = selectedColor;
        setCanvasState(newCanvasState);
    }

    function handleSelectColor(color, ind) {
        setSelectedColor(color);
    }

    function handleGenLobby() {
        // Random generate 6 digit lobby code
        const lobby = Math.floor(100000 + Math.random() * 900000);
        setLobbyNum(lobby);
        // Cconnect socket
        const socket = io.connect('http://localhost:1235');
        socket.emit('create_lobby', { lobby: lobby, canvas: canvasState });
    }

    function handleJoinLobby() {
        console.log({lobbyNumJoin});
        const socket = io.connect('http://localhost:1235');
        socket.emit('join_lobby', { lobby: lobbyNumJoin});
    }

    function handleTypeLobby(e) {
        setLobbyNumJoin(e.target.value);
    }

    return (
        <div className='app'>
            <Lobby
                lobbyNum={lobbyNum}
                lobbyNumJoin={lobbyNumJoin}
                onGenLobby={handleGenLobby}
                onJoinLobby={handleJoinLobby}
                onTypeLobby={handleTypeLobby}
            />
            <Palette
                handleSelect={handleSelectColor}
                currentColor={selectedColor}
            />
            <Canvas 
                canvasState={canvasState}
                handlePaint={handlePaint}
            />
        </div>
    );  
}
