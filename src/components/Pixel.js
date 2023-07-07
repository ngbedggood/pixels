import React from 'react';
import styles from './Pixel.css';

export default function Pixel({ value }) {

    return (
        <button className='pixel'>
            {value}
        </button>
    );

}