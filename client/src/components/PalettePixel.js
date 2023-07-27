import React, { useState } from 'react';
import styles from './Pixel.css';
import { Button } from '@mui/material';

export default function PalettePixel({ value, handleClick, index, selected }) {

    const palette = [
        '#f2f2f2',
        'black',
        'green',
        'blue',
        'red',
        'gold',
        'orange',
        'hotpink'
    ]

    return (
        <button 
        className='pixel'
        style={{
            backgroundColor: palette[value], 
            padding: selected ? '5px' : '1px',
        }}
        onMouseDown={()=> {
            handleClick(value,index);
        }}
        >
        {/*selected?'hi':'no hi'*/}
        </button>
    );

}