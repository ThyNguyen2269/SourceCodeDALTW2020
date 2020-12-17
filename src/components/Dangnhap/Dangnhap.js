import React from 'react';
import {Provider} from '../../Context';
import LoginUser from '../User/LoginUser';
// import GetUsers from '../User/GetUsers';
import Actions from '../../Actions/Actions';


// import './Dangky.css';
 
class Dangnhap extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        // editMode:this.editMode,
        // cancelEdit:this.cancelEdit,
        // handleUpdate:this.handleUpdate,
        // handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">Đăng nhập FDID </h1>
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-4">
                                  <LoginUser/>
                              </div>
                              {/* <div className="col-md-8">
                                <GetUsers/>
                              </div> */}
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}

export default Dangnhap;