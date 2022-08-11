import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RegistrationForm(){
    const [inputs, setInput] = useState({});
    const [output, setOutput] = useState("");

    const handleChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInput(values => ({...values, [name]: value}))
    }

    const validateForm=()=>{
            console.log(inputs);
            var mailformat = /\S+@\S+\.\S+/;
            var valid = false;
            if (!inputs.firstName
                || !inputs.lastName
                || !inputs.email
                || !inputs.password
                || !inputs.repPassword){
                    setOutput("Validation failure: Please fill in all text fields.");
            } else if(inputs.firstName.length > 50){
                setOutput("Validation  failure: Username cannot be longer than 50 characters");
            } else if(inputs.lastName.length > 50){
                setOutput("Validation  failure: Username cannot be longer than 50 characters");
            }else if(!mailformat.test(inputs.email)){
                setOutput("Validation failure: Invalid e-mail address. Please enter your e-mail again.");
            }else if(inputs.password.length<8){
                setOutput("Validation failure: Password is too short. Please select another password");
            } else if(inputs.password !== inputs.repPassword) {
                setOutput("Validation failure: Passwords do not match. Please retry");
            } else if (!inputs.admin && !inputs.user){
                setOutput("Validation failure: Please check at least one checkbox to select being a seller or a buyer in the system.")
            }else{
                valid =true;
            }
            return valid;
    }

    const handleSubmit=(event)=>{
        event.preventDefault();  

        const dataRegistration = (({firstName,lastName,email,password})=>({firstName,lastName,email,password}))(inputs);
        console.log(dataRegistration)

        if(validateForm()){
            axios({
                method: 'post',
                url: 'http://localhost:8080/user/register',
                data: dataRegistration
            })
            .then((response) => {
                console.log(response);
                setOutput(response.status === 201 ? `Registration success: ${dataRegistration['email']}` : "Registration failure");
            })
            .catch(err => console.log(err));
        }
    }

    return(
        <React.Fragment>
        <div className='container'>
        <h1>Create an account</h1>
        <form  className="center" onSubmit={handleSubmit} noValidate>
                <label className="textInput">
                    <input
                     className='form__input'
                     autoFocus placeholder='first name'
                     type="text"
                     name = "firstName"
                     value={inputs.firstName || ""}
                     onChange={handleChange}
                     />
                </label>
                <br/>
                <label className="textInput">
                    <input
                     className='form__input'
                     autoFocus placeholder='last name'
                     type="text"
                     name = "lastName"
                     value={inputs.lastName || ""}
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
                     type="checkbox"
                     name="admin"
                     checked={inputs.isAdmin}
                     onChange={handleChange}
                     />
                     I am an employee.
                </label>
                <br/>
                <label>
                    <input 
                     type="checkbox"
                     name="user"
                     checked={inputs.isUser}
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
                <p style={{color:"blue"}}>{output}</p>
            </div>
            </div>
            </React.Fragment>
        );
}

export default RegistrationForm;