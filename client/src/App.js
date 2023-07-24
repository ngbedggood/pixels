import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './Play';
import Home from './Home';
import Login from './Login';


export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/play' element={<Play />} />
            </Routes>
        </Router>
    )


}