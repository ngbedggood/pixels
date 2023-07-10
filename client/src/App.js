import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Pixel from './components/Pixel';
import styles from './App.css';
import Lobby from './components/Lobby';

export default function App() {
    let canvasSize = 8;
    const [canvasState, setCanvasState] = useState(Array.from({length: canvasSize},()=> Array.from({length: canvasSize}, () => null)));
    const [selectedColor, setSelectedColor] = useState(7);


    function handlePaint(color, ind) {
        let newCanvasState = canvasState.slice();
        newCanvasState[ind.row][ind.col] = selectedColor;
        setCanvasState(newCanvasState);
    }

    function handleSelectColor(color, ind) {
        setSelectedColor(color);
    }

    return (
        <div className='app'>
            <Lobby />
            <Palette handleSelect={handleSelectColor} currentColor={selectedColor}/>
            <Canvas 
                canvasState={canvasState}
                handlePaint={handlePaint}
            />
        </div>
    );  
}
