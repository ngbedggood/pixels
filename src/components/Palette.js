import React from 'react';
import Pixel from './Pixel';
import styles from './palette.css';

export default function Palette() {

    const palette =[0,1,2,3,4,5,6,7];
    
    return (
        <div className='palette'>
            {
                palette.map((colorNum) => (
                    <Pixel value={colorNum} />
                ))
            }
        
        </div>
    )


}