import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Signin.css';
import Button from '@material-ui/core/Button';

function Signin() {
    return (
        <div className="Signin">
            <h1>SignIn</h1>
            <form className="form" noValidate autoComplete="off" >
                <div className="input"><TextField  label="Phone Number" variant="filled" /></div>
                <div className="input"><TextField label="Password" variant="filled" /></div>
            </form>
            <div className="input"><Button variant="outlined" color="primary">Submit</Button></div>

        </div>
    );
}

export default Signin;