import {useRef, useState, useEffect, useInsertionEffect} from 'react'
import React from 'react'
import axios from 'axios';
import '../App.css'
import {Link} from 'react-router-dom'
import RegistrationForm from './Register';

function Login(props){
    const [inputs, setInput] = useState({});
    const [output, setOutput] = useState("");


    const handleChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInput(values => ({...values, [name]: value}))
    }

    const validateForm=()=>{
        var mailformat = /\S+@\S+\.\S+/;
        var valid = false;
        if (!inputs.email
            || !inputs.password){
            setOutput("Validation failure: Please fill in all text fields.");
        }
        else if(!mailformat.test(inputs.email)){
            setOutput("Validation failure: Invalid e-mail address. Please enter your e-mail again.");
        }else if(inputs.password.length<8){
            setOutput("Validation failure: Password is too short. Please enter your password");
        } else{
            valid =true;
        }
        return valid;  

    }

    const handleSubmit=(event)=>{
        event.preventDefault();

        const dataLogin = {username: inputs.email,
                           password: inputs.password};

        console.log(dataLogin);

        if(validateForm()){
            axios({
                method: 'post',
                url: 'http://localhost:8080/user/getUsers',
                data: dataLogin
            })
            .then((response) => {
                console.log(response);
                if (response.status === 200){
                    setOutput("Login success");
                    const jwtToken = response.headers.authorization.split(' ')[1]
                    if (jwtToken !== null) {
                        sessionStorage.setItem("jwt", jwtToken);
                        console.log(jwtToken);
                        props.setLoggedinUser(inputs.email);
                    } else{
                        setOutput("Token failure");
                        props.setLoggedinUser("");
                    }
                } else{
                    setOutput("Login failure");
                    props.setLoggedinUser("");
                }
            })
            .catch(err => {
                console.log(err.response);
                setOutput("Login failure");
                props.setLoggedinUser("");
            })
        }

    }

  return (
    <React.Fragment>
    <form  className="center" onSubmit={handleSubmit} noValidate>
            <label className="textInput">Email:
                <input
                 type="email"
                 name="email"
                 value={inputs.email || ""}
                 onChange={handleChange}
                 />
            </label>
            <br/><br/>
            <label className="textInput">Password:
                <input
                 type="password"
                 name="password"
                 value={inputs.password || ""}
                 onChange={handleChange}
                 />
            </label>
            <br/>
            <button type="submit">Login</button>
        </form>
        <div className="center">
            <p>{output}</p>
        </div>
        </React.Fragment>
    );
}

export default Login