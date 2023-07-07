import React, { useEffect } from 'react';
import styles from './Pixel.css';

export default function Pixel({ value }) {

    let gridColor;

    /*useEffect(() => {
        if (index.row%2===0 && index.col%2===0) {
            gridColor = "whitesmoke";
        }
    }, [])*/

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
        >
            {value}
        </button>
    );

}