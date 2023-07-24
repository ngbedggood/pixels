import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/play'>
                <button>Play As Guest</button>
            </Link>
        </div>
    )

}