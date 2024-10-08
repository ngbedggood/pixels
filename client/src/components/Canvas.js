import React, { useState } from 'react';
import Pixel from './Pixel';
import styles from './Canvas.css'

export default function Canvas({ canvasState, handlePaint, handlePaintHover }) {

    return (
        <div className='canvas'>
            {
                canvasState.map((row, rIndex) => (
                    <div>
                        {
                            row.map((col, cIndex) => (
                                <Pixel 
                                    value={canvasState[rIndex][cIndex]}
                                    handleClick={handlePaint}
                                    handleHover={handlePaintHover} 
                                    index={{row:rIndex,col:cIndex}}

                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}