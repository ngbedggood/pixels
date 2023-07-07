import React from 'react';
import Pixel from './Pixel';
import styles from './Canvas.css'

export default function Canvas() {
    let canvas = [];
    let canvasSize = 8;

    for (let i = 0; i < canvasSize; i++) {
        canvas[i] = [];
        for (let j = 0; j < canvasSize; j++) {
          canvas[i][j] = 3;
        }
    }

    return (
        <div className='canvas'>
            {
                canvas.map((row, rIndex) => (
                    <div>
                        {
                            row.map((col, cIndex) => (
                                <Pixel value={canvas[rIndex][cIndex]}/>// index={{ row:rIndex, col:cIndex }} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}