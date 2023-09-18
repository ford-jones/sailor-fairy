import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Flash from './Flash'
import Booking from './Booking'
import TattooGallery from './TattooGallery'
import Admin from './Admin'

import { fetchData } from '../helper/firebase'

fetchData(process.env.REACT_APP_FIREBASE_TATTOO_IMAGE_DIR, 'tattooGallery-images', 'image')
fetchData(process.env.REACT_APP_FIREBASE_TATTOO_DATA_DIR, 'tattooGalelry-data', 'data')
fetchData(process.env.REACT_APP_FIREBASE_FLASH_IMAGE_DIR, 'flash-images', 'image')
fetchData(process.env.REACT_APP_FIREBASE_FLASH_DATA_DIR, 'flash-data', 'data')

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