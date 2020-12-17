import { Component } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Dangky from './components/Dangky/Dangky';
import Dangnhap from './components/Dangnhap/Dangnhap';
import Discovery from './components/Discovery/Discovery';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
var session = require('express-session');

class App extends Component{
 
render(){
  
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
        <Menu/>
        <Switch>
          <div className="container-fluid">
            <div className="row">
            {/* <div className="col-md-12">
                <Dangky></Dangky>
            </div> */}
            {/* <div className="col-md-12">
                <Dangnhap></Dangnhap>
            </div> */}
            <Route path="/Discovery" component={Discovery}/>
            <Route path="/Dangnhap" component={Dangnhap}/>
            <Route path="/Dangky" component={Dangky}/>
            <div className="col-md-4">
              
            </div>
           </div> 
          </div>
        </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;
