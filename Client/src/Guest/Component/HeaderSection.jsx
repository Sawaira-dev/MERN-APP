import React from 'react'
import Logo from '../../Guest/assets/logo.png'
import { Link } from 'react-router-dom'


export default function HeaderSection() {
  
    return (
        <>

            <div className="container-fluid px-0 ">
                <header>
                    <div className="shape" />

                    <div className="container">
                        <div className="row">
                            {" "}
                            <div className="col-md-6 left-side">
                                {/* <img src={Logo} /> */}
                                <img src={Logo} className="w-100" />
                            </div>{" "}
                            <div className="col-md-6 right-side">
                                <h1>We Offer Great Quality That You Deserves!</h1>
                                <p>FREE HOME DELIVERY</p>
                                <div className="text-center">
                                    
                                    <button  className='ms-4 btn btn-danger'>ORDER NOW</button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}
