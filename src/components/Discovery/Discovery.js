import React from 'react';
import { Component } from 'react';
import Actions from '../../Actions/Actions';
// import {Provider} from '../../Context';
import {AppContext} from '../../Context';
import './Discovery.css';
import lg from './img/lg.png';
import bunbo from './img/bunbo1.png';

class Discovery extends Component {
  static contextType = AppContext;
render(){
  return (
    <div className="container-all">
      <div className="sect1">
       <form action="">
        <div className="sect1-header">
        <h4 className="caption-sect1"><img className="img-sect1" src={lg} alt=""/>Sáng nay ăn gì?</h4>
            <li className="item1-sect1">
              <div classname="it1img" >
                <img className="img" src={bunbo} alt=""/>
              </div>
                <span className="text-bunbo" title="Bún bò Xóm Chiếu Quận 4">Bún bò Xóm Chiếu Quận 4</span>
              <div className="addressbunbo limit-text" ng-bind="item.address" 
                   title="85 Đường Số Xóm Chiếu, P.6, Quận 4, TP. HCM">85 Đường Xóm Chiếu, P.6, Quận 4, TP. HCM
              </div><hr/>
              <div className="info limit-text" >
                    <label>Street food</label>
              </div>
            </li>

        </div>
      </form>
      </div>
     </div>
  );
}
}
export default Discovery;
