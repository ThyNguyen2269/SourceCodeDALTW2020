import React from 'react';
import Axios from 'axios';

class Actions extends React.Component{
    state = {
        users:[],
        showLogin:true,
        isAuth:false,
        theUser:null,
    }
    
    // FETCH USERS FROM DATABASE
    fetchUsers = () => {
        Axios.get('http://localhost/php-react/all-users.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:data.users.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

     // ON EDIT MODE
     editMode = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            return user;
        });

        this.setState({
            users
        });
    }   

    //CANCEL EDIT MODE
    cancelEdit = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = false;
                return user;
            }
            return user
            
        });
        this.setState({
            users
        });
    }

    // UPDATE USER
    handleUpdate = (id,name,phone,email,password) => {
        Axios.post('http://localhost/php-react/update-user.php',
        {
            id:id,
            name:name,
            phone:phone,
            email:email,
            password:password
        })
        .then(({data}) => {
            console.log(data);
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.name = name;
                        user.phone = phone;
                        user.email = email;
                        user.password = password;
                        user.isEditing = false;
                        return user;
                    }
                    return user; 
                });
                this.setState({
                    users
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // DELETE USER
    handleDelete = (id) => {
        let deleteUser = this.state.users.filter(user => {
            return user.id !== id;
        });
        
        Axios.post('http://localhost/php-react/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    // INSERT USER
    insertUser = (event,name,phone,email,password) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/add-user.php',{
            name:name,
            phone:phone,
            email:email,
            password:password
        })
        .then(function ({data}) {
            console.log(data);
            if(data.success === 1){
                this.setState({
                    users:[
                        {"id":data.id,"name":name,"phone":phone,"email":email,"password":password},
                        ...this.state.users
                    ]
                });
                event.target.reset();
            }
            else{
                alert(data.msg);
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    // Login USER
    insertUser1 = (event,email,password) => {
        event.preventDefault();
        event.persist();
        Axios.post('http://localhost/php-react/login-user.php',{
            email:email,
            password:password
        })
        .then(function ({data}) {
          console.log(data);
            if(data.success === 1){
                this.setState({
                    users:[
                        {"id":data.id,"email":email,"password":password},
                        ...this.state.users
                    ]
                
                });
                console.log(data);
                event.target.reset();
            }
            
            else{
                alert(data.msg);
            }
        }.bind(this))
        
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default Actions;