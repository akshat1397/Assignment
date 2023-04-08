import React, { useEffect, useState } from 'react';
import './ListView.css'

export default function ListView() {

    const [user, setUser] = useState([]);

    const getData = async () => {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        setUser(await response.json());
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="container">
                <h2>List Practical</h2>
                <div className="row">
                    {
                        user.map((ele) => {
                            return (
                                <div className="col-6">

                                    <div className="card" style={{ width: 400, marginTop: '30px', padding:'30px' }}>
                                        <img className="card-img-top c_img" src={ele.image} alt="Jwellary image" />
                                        <div className="card-body">
                                            <h4 className="card-title">{ele.price}</h4>
                                            <p className="card-text">{ele.title}</p>
                                            <a href="#" className="btn btn-primary">Profile</a>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}