import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="con-top">
            <div className="container" >
                <div className='row'>
                    <div className="col-12">
                        <img src="https://media.foody.vn/images/beauty-upload-api-1170x60-201130181403.jpg" alt="Sale 50%"/>
                    </div>
                </div>
            </div>
           </div> 
        );
    }
}

export default Header;