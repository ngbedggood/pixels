import React, { useState, useEffect } from 'react';
import { Input, Button, TextField } from '@mui/material';
import styles from './Lobby.css';


export default function Lobby( {lobbyNum, lobbyNumJoin, onGenLobby, onJoinLobby, onTypeLobby } ) {

    return (
        <div className='lobby'>
            <div>
                <label>
                    <TextField variant="outlined" size="small" readOnly={true} value={lobbyNum} />
                    <Button variant="contained" onClick={onGenLobby}>
                        Create
                    </Button>
                </label>
            </div>
            <div>
                <label>
                    <TextField variant="outlined" size="small" value={lobbyNumJoin} onChange={onTypeLobby} placeholder='Enter lobby code...' />
                    <Button variant="contained" onClick={onJoinLobby}>
                        Join
                    </Button>
                </label>
            </div>
        </div>
    )
}