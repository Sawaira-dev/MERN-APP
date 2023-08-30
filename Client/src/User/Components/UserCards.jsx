import React from 'react'
// import { Link } from 'react-router-dom'

export default function UserCards({ name, image, url ,price }) {
    return (
        <div className="col-md-3 m-5">
        
                <div className="card p-4">
                    <img src={image} className="card-img-top  " alt={name} style={{ height: '30vh', objectFit: 'contain' }} />
                    <div className="card-body " >
                        <h5 className="card-title ">{name}</h5>
                        <h5 className="card-title text-success ">{price}</h5>
                        <a href={url} className="btn shadow btn-danger ">
                         Order Now
                       </a>
                    </div>
                </div>
           
        </div>


      
    )
}