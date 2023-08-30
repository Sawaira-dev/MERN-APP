import React from 'react'
import HeaderSection from '../../Guest/Component/HeaderSection'
import FooterSection from '../Component/FooterSection'
import Category from '../../Guest/Pages/Category'
import Brands from '../../Guest/Pages/Brands'

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