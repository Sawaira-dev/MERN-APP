import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import FooterSection from '../Components/FooterSection'
import Category from '../../User/Pages/Category'
import Brands from '../../User/Pages/Brands'

export default function Home() {
    return (
        <div className='pt-5'>
            <HeaderSection />
            <Brands />
            <Category />
            <FooterSection />
        </div>
    )
}