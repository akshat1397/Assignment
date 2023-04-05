import React, { Component, PropTypes } from 'react';

class componentName extends Component {
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state={counter:0}

    }

    // componentWillMount() {
    //         console.log("componentWillMount called");
    // }

    componentDidMount() {
      
            console.log("componentDidMount");
  
    }

    // componentWillReceiveProps(nextProps) {
    //         console.log("componentWillReceiveProps called");
    // }

    shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponentUpdate called");
            console.log("nextState",nextState);
            return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate called");
    // }

    componentDidUpdate(prevProps, prevState) {
            console.log("componentDidUpdate called");
            console.log("prevState",prevState);
    }

    componentWillUnmount() {
            console.log("componentWillUnmount called");
    }

    BtnClck=()=>{
        // console.log("btn called");
        setTimeout(() => {
             this.setState({counter:this.state.counter+1})
        }, 2000);
       
    }

    render() {
        console.log("render called");
        return (
          <>
          <div className="container">
            <div className="row mt-5">
                <div className="col">
                   <h1> {this.state.counter}</h1>
                   <button className='btn btn-success' onClick={this.BtnClck}>Click Me</button>
                </div>
            </div>
          </div>
          </>

        );
    }
}


export default componentName;