import React from 'react';
import Canvas from './components/Canvas';
import Palette from './components/Palette';
import Pixel from './components/Pixel';


export default function App() {
    return (
        <div>
            <Palette />
            <Canvas />
        </div>
    );
}
