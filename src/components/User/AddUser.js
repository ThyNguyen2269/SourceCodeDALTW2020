import React,{Component} from 'react';
import {AppContext} from '../../Context';

class AddUser extends Component {
    static contextType = AppContext;

    insertUser = (event) => {
        this.context.insertUser(event,this.name.value,this.phone.value,this.email.value,this.password.value);
    }

    render(){
        return (
            <form onSubmit={this.insertUser}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Name</label>
                    <input type="text" name="username" ref={(val) => this.name = val} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Phone</label>
                    <input type="text" name="phone" ref={(val) => this.phone = val} className="form-control" placeholder="Phone"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" name="useremail" ref={(val) => this.email = val} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" name="password" ref={(val) => this.password = val} className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button type="submit" className="btn btn-primary">Đăng Ký</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default AddUser;