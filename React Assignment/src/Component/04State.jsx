import React, { Component } from 'react';

class State extends Component {
    constructor(props)
    {
        super(props)
        this.state={Data:'Good Morning',
                    Author : 'Chetan Bhagat'
    }
    }
    BtnClck=()=>{
        console.log("btn called");
        this.setState({Data:"Good AfterNoon"})
    }
    render() {
        return (
          <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.Data}</h1>
                        <button className='btn btn-primary' onClick={this.BtnClck}>Click Me to Change the DAta</button>
                        <h3>{this.state.Author}</h3>
                        <button className='btn btn-danger' onClick={()=>{this.setState({Author:'Chetan Patel'})}}>CLick Me</button>
                    </div>
                </div>
            </div>
          </>
        );
    }
}

export default State;