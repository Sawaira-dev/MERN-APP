import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCards from '../../User/Components/UserCards'
import FooterSection from '../Components/FooterSection'

export default function Category() {
    const [Categories, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-category')
            .then((json) => setCategory(json.data.Category))
            .catch((err) => console.log(err))

    }, [])

    return (
        
            <div className="container my-5">
                <div className="text-center">
                    <h2>Categories</h2>
                    <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
                </div>


                <div className='row my-5'>
                    {
                        Categories?.map((val, key) =>

                            // <tr key={key}>
                            //     <th scope="row">{val._id}</th>
                            //     <td>{val.categoryName}</td>
                            //     <td><img src={val.categoryImages} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} /></td>
                            // </tr>
                            <UserCards key={key} image={val.categoryImages} name={val.categoryName} url={`/products`} />
                        )

                    }
                </div>
            </div>
            

    )
}