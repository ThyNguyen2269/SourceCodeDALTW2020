import React, {useContext} from 'react'
import {MyContext} from '../../Actions/MyContext'
import LoginUser from './LoginUser';

// Importing the Login & Register Componet
import Login from './LoginUser'
// import Register from './Register'

function Home(){

    const {rootState,logoutUser} = useContext(MyContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">Hello</span></div>
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <LoginUser/>;
    }
    // else{
    //     return <Register/>;
    // }
    
}

export default Home;