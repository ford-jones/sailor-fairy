import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Flash from './Flash'
import Booking from './Booking'
import TattooGallery from './TattooGallery'
import Admin from './Admin'

export default function App() {

    return (
        <>
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Flash' element={<Flash />} />
                <Route path='/Gallery' element={<TattooGallery />} />
                <Route path='/Booking' element={<Booking />} />
                <Route path='/Admin' element={<Admin />} />
            </Routes>
        </div>
        </>
    )
}