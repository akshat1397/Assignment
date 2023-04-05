/* div =>table show data */
//rcf
import React, { Component } from 'react';

class API extends Component {
    constructor() {
        super()
        console.log("constructor called");
        this.state = { status: 'pending',
        fetchdata:''}
    }
    componentDidMount() {
        // console.log("componentDidMount");
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            
            res.json())
            .then((Response) => {
                console.log((Response));
                this.setState({status:'Success'})
                this.setState({fetchdata:Response})
            })
        }, 2000);
    }
    render() {
        console.log("render called");
        fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            // console.log(res);
            res.json())
            .then((Response) => {
                console.log((Response));
            })
        return (
            <>

                <div className='container'>
                    <div className="row">
                        <div className="col">
                            {/* {this.state.status=='Success'?<div>Data:{JSON.stringify(this.state.fetchdata)}</div>:"No Data Found"}    */}
                            {this.state.status}
                            <table border={1}>
                                <tr>
                                    <th> Id</th>
                                    <th> UserId</th>
                                    <th>title</th>
                                    <th>Body</th>
                                </tr>
                                {this.state.status=='Success'?<>{
                                this.state.fetchdata.map((res,i)=>{
                                    return(
                                        <tr>
                                            <td>{res.id}</td>
                                            <td>{res.userId}</td>
                                            <td>{res.title}</td>
                                            <td>{res.body}</td>
                                        </tr>
                                    )
                                })
                                }</>:"No Data Found"}
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default API;