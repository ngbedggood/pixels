import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Pixel from './components/Pixel';

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
        <div>
            <Palette handleSelect={handleSelectColor}/>
            <h2>Current color: {selectedColor}</h2>
            <Canvas 
                canvasState={canvasState}
                handlePaint={handlePaint}
            />
        </div>
    );
}
