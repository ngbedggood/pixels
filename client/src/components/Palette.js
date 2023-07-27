import React from 'react';
import PalettePixel from './PalettePixel';
import styles from './Palette.css';

export default function Palette({ handleSelect, currentColor }) {

    const palette =[0,1,2,3,4,5,6,7];
    
    return (
        <div className='palette'>
            {
                palette.map((colorNum) => (
                    <PalettePixel 
                        value={colorNum}
                        handleClick={handleSelect} 
                        selected={colorNum === currentColor}
                    />
                ))
            }
            {/*<div>Current color: {currentColor}</div>*/}
        </div>
    )


}