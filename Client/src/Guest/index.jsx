import React from 'react'
import { Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Brands from '../Guest/Pages/Brands';
import Category  from '../Guest/Pages/Category'
import Product from '../Guest/Pages/Product'
import Loginn from '../Guest/Pages/Loginn';
import GuestNav from './Component/GuestNav';


export default function Guest() {
    return (
        <>
        <GuestNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loginn" element={<Loginn />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/category" element={<Category />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </>
    )
}