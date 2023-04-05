import React, { Component } from 'react';
import Reusable from './ReusableCompo'

class compo extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-4">
                            <Reusable imgSrc="img/iphone.jfif" title="IPhone" OldPrice="90000" NewPrice="80000"/>
                        </div>
                        <div className="col-4">
                            <Reusable imgSrc="img/mi.jfif" title="MI" OldPrice="50000" NewPrice="40000"/>
                        </div>
                        <div className="col-4">
                        <Reusable imgSrc="img/vivo.jfif" title="VIVO" OldPrice="30000" NewPrice="20000"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default compo;