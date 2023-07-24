import React, { useState, useEffect } from 'react';
import styles from './Pixel.css';
import { Button } from '@mui/material';

export default function Pixel({ value, handleClick, handleHover, index }) {


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
        onMouseEnter={()=>handleHover(value,index)}
        >
        </button>
    );

}