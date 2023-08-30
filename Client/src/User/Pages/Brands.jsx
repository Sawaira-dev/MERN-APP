import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCards from '../../User/Components/UserCards'
import FooterSection from '../Components/FooterSection'

export default function Brands() {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        axios.get('/api/get-brand')
            .then((json) => setBrands(json.data.Brands))
            .catch((err) => console.log(err))

    }, [])

    return (
       
        <div className="container my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>


            <div className='row my-5'>
                {
                    brands?.map((val, key) =>

                        // <tr key={key}>
                        //     <th scope="row">{val._id}</th>
                        //     <td>{val.brand}</td>
                        //     <td><img src={val.Images} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} /></td>
                        // </tr>
                        <UserCards key={key} image={val.Images} name={val.brand} url={`/products`} />
                    )

                }
            </div>


        </div>
        

    )
}