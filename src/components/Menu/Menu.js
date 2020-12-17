import React, { Component } from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';
import logo9 from './img/logo.png';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statusButton: true
        };



    }
    showButton = () => {
        if (this.state.statusButton) {
            return <a className="btn btn-black" href="#" role="button" onClick={(e) => this.props.formToogle(e)}><i className="fa fa-login" />Dangky</a>
        }
        else {
            return <a className="btn btn-black" href="#" role="button" ><i className="fa fa-login" />DangNhap</a>
        }

    }
    
    

    render() {
        return (
            
            <div>
                <nav className="navbar navbar-expand-lg ">
                    <div className="logo-9">
                         <img className="logo9" src={logo9} alt=""/>
                    </div>
                    {/* <a className="navbar-brand" href="#">Discovery</a> */}
                    <NavLink className="Discovery" to="/Discovery/" >Discovery</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="./PostPersonList.js">Reserve<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Order Delivery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Market</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Discount</a>
                            </li>
                        </ul>
                    
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item1">
                        <NavLink to="/DangNhap/">Sign In</NavLink>
                        </li>
                        <li className="nav-item2">
                            {/* <a className="btn btn-black" href="/components/Dangky/Dangky.js" role="button"><i className="fa fa-login" />Đăng ký</a> */}
                        <NavLink to="/Dangky/">Sign Up</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}

export default Menu;