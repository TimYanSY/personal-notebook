import React from 'react';
import './style.css'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginRegister = ({
    handleNameChange,
    handlePasswordChange,
    handleLogin,
    handleRegister
}) => {
    return (
        <div className='loginRegister'>
            <div>Name</div>
            <input type="text" onChange={handleNameChange}/>
            <div>Password</div>
            <input  type="password" onChange={handlePasswordChange}/>
            <div>
              <Button className='login-btn' type="submit" onClick={handleLogin}>Login</Button>
            </div>
            <div>
              <Button className='login-btn' type="submit" onClick={handleRegister}>Register</Button>
            </div>
        </div>
    );
};

export default LoginRegister;
