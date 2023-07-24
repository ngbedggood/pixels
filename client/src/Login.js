import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div>
            Login in details
            <Link to='/play'>
                <button>Play Now</button>
            </Link>
        </div>
    )

}