import React, {Component} from 'react';
import {AppContext} from '../../Context';
import './GetUser.css';

class GetUsers extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.name.value,this.phone.value,this.email.value,this.password.value);
    }

    render(){
        let allUsers;
        let mainData;
        
        allUsers = this.context.all_users.map(({id,name,phone,email,password,isEditing}) => {
            return isEditing === true ? (
                <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.name = item} defaultValue={name}/></td>
                <td><input className="form-control" type="text" ref={(item) => this.phone = item} defaultValue={phone}/></td>
                <td><input className="form-control" type="email" ref={(item) => this.email = item} defaultValue={email}/></td>
                <td><input className="form-control" type="password" ref={(item) => this.password = item} defaultValue={password}/></td>
                <td>
                    <button className="btn btn-success mr-2" onClick={() => this.handleUpdate(id)}>Save</button>
                    <button onClick={() => this.context.cancelEdit(id)} className="btn btn-light">Cancel</button>
                </td>
            </tr>
            ) : (
                <tr key={id}>
                    <td>{name}</td>  
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>
                        <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Edit</button>
                        <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            );
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr className="frame">
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>    
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">Không tìm thấy người dùng!</h4>
                    <hr/>
                    <p>Vui lòng chèn một số người dùng.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}
export default GetUsers;