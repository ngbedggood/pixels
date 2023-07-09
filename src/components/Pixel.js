import React, { useEffect } from 'react';
import styles from './Pixel.css';

export default function Pixel({ value, handleClick, index }) {


    const palette = [
        'white',
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
            onClick={()=>handleClick(value,index)}
        >
        </button>
    );

}