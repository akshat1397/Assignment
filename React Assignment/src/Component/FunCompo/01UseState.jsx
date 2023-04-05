//rsf

import React from 'react';
import { useState } from 'react';

function UseState(props) {
    // const[name,setname]=useState('Whatever')
    // const[Author,setAuthor]=useState('Akshat Shah')
    const[num,setNumber]= useState(0)
    const incNum=()=>{
        setNumber(prevCount => prevCount + 1);
    };

    const decNum=()=>{
        setNumber(prevCount => prevCount - 1);
    };

    
    // const BtnClck=()=>{
    
    //     setname("Keyur Shah")
    // }
    return (
        <>
        <div className="container">
            <div className="row mt-5">
                {/* <div className="col-3">
                    <h1> {name}</h1>
                    <button className='btn btn-primary mt-3' onClick={BtnClck}>Click Me</button>

                    <h3> {Author}</h3>
                    <button onClick={()=>setAuthor('3 Idiots')} className="btn btn-primary mt-2"> Click Me</button>
                </div> */}
                <div className="col-12 d-flex">
                    <button className='btn btn-primary mt-3' onClick={decNum}>-</button>
                    <h3 className='number mt-3 ps-3 pe-3'>{num}</h3>
                    <button className='btn btn-primary mt-3' onClick={incNum}>+</button>
                </div>
            </div>
        </div>
        
        </>    
);
}

export default UseState