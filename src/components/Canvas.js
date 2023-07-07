import React from 'react';
import Pixel from './Pixel';

export default function Canvas() {
    let canvas = [];
    let canvasSize = 8;

    for (let i = 0; i < canvasSize; i++) {
        canvas[i] = [];
        for (let j = 0; j < canvasSize; j++) {
          canvas[i][j] = 0;
        }
    }

    console.log(canvas);

    return (
        <>
            {
                canvas.map((row, rIndex) => (
                    <div>
                        {
                            row.map((col, cIndex) => (
                                <Pixel value={canvas[rIndex][cIndex]} />
                            ))
                        }
                    </div>
                ))
            }
        </>
    )
}