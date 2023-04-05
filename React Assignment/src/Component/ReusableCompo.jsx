import React, { Component } from 'react';

class ReusableCompo extends Component {
    render() {
        return (
            <div>
                <div className="card">
                                <img src={this.props.imgSrc} alt="iphone" className='img-fluid'/>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h3>{this.props.title}</h3>
                                        </div>
                                        <div className="col">
                                            <p>Old Price:$<del>{this.props.OldPrice}</del></p>
                                            <p>New Price:${this.props.NewPrice}</p>
                                        </div>
                                        
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-primary'>Buy Now</button>
                                    </div>
                                    
                                </div>
                            </div>
            </div>
        );
    }
}

export default ReusableCompo;