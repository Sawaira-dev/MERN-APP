import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCards from '../../User/Components/UserCards'
import FooterSection from '../Components/FooterSection'

export default function Products() {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-products')
            .then((json) => setProducts(json.data.Product))
            .catch((err) => console.log(err))

    }, [])

    return (
        <div>
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>


            <div className='row my-5'>
                {
                    Products?.map((val, key) =>

                        // <tr key={key}>
                        //     <th scope="row">{val._id}</th>
                        //     <td>{val.productName}</td>
                        //     <td>{val.price}</td>
                        //     <td>{val.brand}</td>
                        //     <td>{val.category}</td>
                        //     <td>{val.description}</td>
                        //     <td>{val.rating}</td>
                        //     <td>{val.description}</td>
                        //     <td>{val.product_colors}</td>
                        //      <td><img src={val.Images} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} /></td>
                        //      <td><img src={val.thunmbnail} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} /></td>

                        // </tr>

                        
                        <UserCards key={key} image={val.Images} name={val.productName} price={val.price} url={`/products/${val._id}`} />
                       

                    )

                }
            </div>


        </div>
        <FooterSection />
        </div>

    )
}