import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import '../App.css'

function Register(){
    const [inputs, setInput] = useState({});
    const [output, setOutput] = useState("");

    //Called when inputs are changed
    //The change event contains the target input
    //Except the checkbox, value of the target used to update the inputs object
    //Note the use "..." (spread operator) to change only a single element within
    //an object
    const handleChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInput(values => ({...values, [name]: value}))
    }

    //This function fulfills all the validation checks, 
    //checking for empty fields, 
    //whether e-mail is correct
    //values are of desired length
    //password and repeated are the same
    //checkboxes are checked correctly etc.
    //If any of these fails, the output is set to display a validation failure
    const validateForm=()=>{
            console.log(inputs);
            var mailformat = /\S+@\S+\.\S+/;
            var valid = false;
            if (!inputs.username
                || !inputs.email
                || !inputs.password
                || !inputs.repPassword){
                    setOutput("Validation failure: Please fill in all text fields.");
            } else if(inputs.username.length > 50){
                setOutput("Validation  failure: Username cannot be longer than 50 characters");
            }else if(!mailformat.test(inputs.email)){
                setOutput("Validation failure: Invalid e-mail address. Please enter your e-mail again.");
            }else if(inputs.password.length<8){
                setOutput("Validation failure: Password is too short. Please select another password");
            } else if(inputs.password !== inputs.repPassword) {
                setOutput("Validation failure: Passwords do not match. Please retry");
            } else if (!inputs.seller && !inputs.buyer){
                setOutput("Validation failure: Please check at least one checkbox to select being a seller or a buyer in the system.")
            } else if (!inputs.tos){
                setOutput("Validation failure: Please agree to the Terms and Conditions, and Privacy Policy.")
            }else{
                valid =true;
            }
            return valid;
    }

    //Form submission starts with preparing the data to register.
    //then if the form validates, a POST request is made to the users
    //endpoint
    //When the response comes, the output is set to display success or
    //error depending on response status. Note the use of 201, which
    //signals "Created success status" for HTTP
    const handleSubmit=(event)=>{
        event.preventDefault();

        const dataRegistration = (({username,email,password,seller,buyer})=>({username,email,password,seller,buyer}))(inputs);

        if(validateForm()){
            axios({
                method: 'post',
                url: 'https://reqres.in/api/users',
                data: dataRegistration
            })
            .then((response) => {
                console.log(response);
                setOutput(response.status === 201 ? `Registration success: ${dataRegistration['username']}` : "Registration failure");
            })
            .catch(err => console.log(err));
        }
    }

    //A component can return a single element (but may have several nested things)
    //A React Fragment can be used to bundle multiple elements without adding 
    //extra nodes to DOM
    //This one bundles the Form and a div to display the output
    //The Form is composed of several inputs which have a value, and onChange event
    return(
        <React.Fragment>
        <div className='container'>
        <h1>Create an account</h1>
        <form  className="center" onSubmit={handleSubmit} noValidate>
                <label className="textInput">
                    <input
                     className='form__input'
                     autoFocus placeholder='full name'
                     type="text"
                     name = "username"
                     value={inputs.username || ""}
                     onChange={handleChange}
                     />
                </label>
                <br/>
                <label className="textInput">
                    <input
                     className='form__input'
                     autoFocus placeholder='email'
                     type="email"
                     name="email"
                     value={inputs.email || ""}
                     onChange={handleChange}
                     />
                </label>
                <br/>
                <label className="textInput">
                    <input 
                     className='form__input'
                     autoFocus placeholder='password'
                     type="password"
                     name="password"
                     value={inputs.password || ""}
                     onChange={handleChange}
                     />
                </label>
                <br/>
                <label className="textInput">
                    <input 
                     className='form__input'
                     autoFocus placeholder='Re-type password'
                     type="password"
                     name="repPassword"
                     value={inputs.repPassword || ""}
                     onChange={handleChange}
                     />
                </label>
                <br/>
                <div className='parent-two'>
                <label>
                    <input 
                     type="radio"
                     name="admin"
                     checked={inputs.isBuyer}
                     onChange={handleChange}
                     />
                     I am an employee.
                </label>
                <br/>
                <label>
                    <input 
                     type="radio"
                     name="consumer"
                     checked={inputs.isSeller}
                     onChange={handleChange}
                     />
                     I want to buy books.
                </label>
                </div>
                <br/>
                <button className='form__button' type="submit">Register</button>
            </form>
            <p>
            <br />
            Already have an account??<br />
            <span>
            <u><Link to='/register'>Sign In</Link></u>
            </span>
            </p>
            <div className="center">
                <p>{output}</p>
            </div>
            </div>
            </React.Fragment>
        );
}

export default Register