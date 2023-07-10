import React from 'react';
import { Input, Button } from '@mui/material';


export default function Lobby() {

    return (
        <div>
            <div>
                <label>
                    <input readOnly={true}>
                    </input>
                    <button>
                        Generate
                    </button>
                </label>
            </div>
            <div>
                <label>
                    <input>
                    </input>
                    <button>
                        Join
                    </button>
                </label>
            </div>
        </div>
    )
}