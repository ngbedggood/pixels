import React from 'react';
import styles from './Pixel.css';
import { Button } from '@mui/material';

export default function PalettePixel({ value, handleClick, index }) {


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
        style={{backgroundColor: palette[value]}}
        onMouseDown={()=>handleClick(value,index)}
        >
        </button>
    );

}