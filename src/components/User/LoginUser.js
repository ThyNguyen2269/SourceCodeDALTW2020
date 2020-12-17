import React,{Component} from 'react';
import {AppContext} from '../../Context';

class LoginUser extends Component {
    static contextType = AppContext;

    insertUser1 = (event) => {
        this.context.insertUser1(event,this.email.value,this.password.value);
    }
    // insertUser1 = event => {
    //     event.preventDefault()
    //     this.context.insertUser1(this.state)
    //   }
    constructor(props) {
        super(props)
        this.state = { email: '' }
        this.handleChange = this.handleChange.bind(this)
      }
    

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    render(){
        return (
            <form onSubmit={this.insertUser1}>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" name="email" ref={(val) => this.email = val} onChange={this.handleChange} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group col-sm-6">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" name="password" ref={(val) => this.password = val} onChange={this.handleChange} className="form-control" placeholder="Password"/>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button  type="submit" className="btn btn-primary">Đăng Nhập</button>
                </div>
            </div>
        </form>  
        );
    }
}
export default LoginUser;