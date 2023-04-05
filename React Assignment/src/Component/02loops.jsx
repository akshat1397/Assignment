import React, { Component } from 'react';

class loops extends Component {

    render() {
        const data = [1,2,3,4,5,6]
        console.log(data);
        //for 
        // for(let index=0;index<data.length;index++)
        // {
        //     const ele = data[index];
        //     console.log(ele);
        // }

        //for in
        // for(const mydata in data)
        // {
        //     if(data.hasOwnProperty.call(data,mydata))
        //     {
        //         const ele = data[mydata];
        //         console.log(ele);
        //     }
        // }

        //for of
        // for(const numbers of data)
        // {
        //     console.log(numbers);
        // }

        //foreach
        // data.forEach(element => {
        //     console.log(element);
        // });


        //map
        const newData = data.map((res,ele)=>{
            return <h1 key={ele}>{res}</h1>
        })
        return (
            <div>
                <div className="container">
               {newData}
               </div>
            </div>
        );
    }
}

export default loops;