import React, { useState, useEffect } from 'react';
import { Input, Button } from '@mui/material';


export default function Lobby( {lobbyNum, lobbyNumJoin, onGenLobby, onJoinLobby, onTypeLobby } ) {

    return (
        <div>
            <div>
                <label>
                    <input readOnly={true} value={lobbyNum}/>
                    <button onClick={onGenLobby}>
                        Generate Lobby
                    </button>
                </label>
            </div>
            <div>
                <label>
                    <input value={lobbyNumJoin} onChange={onTypeLobby} placeholder='Enter lobby code...' />
                    <button onClick={onJoinLobby}>
                        Join Lobby
                    </button>
                </label>
            </div>
        </div>
    )
}