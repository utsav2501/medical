import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from ".//SignupValidation"; 
import axios from 'axios';
import Navbar from './Navbar'

function Signup() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""  ){
            axios.post('http://localhost:8081/signup',values)
            .then(res =>{
                navigate('/login');
            })
            .catch(err => console.log(err))
        }
    }

return (
    <>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input type="text"
                         placeholder="Enter Name"
                         autoComplete="off"
                         name="name"
                         className="form-control rounded-0" 
                         onChange={handleInput}
                         />
                         {errors.name && <span className="text-danger"> {errors.name}</span>}
                         
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input type="text"
                         placeholder="Enter Email"
                         autoComplete="off"
                         name="email"
                         className="form-control rounded-0" 
                         onChange={handleInput}
                         />
                         {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input type="password"
                         placeholder="Enter Password"
                         autoComplete="off"
                         name="password"
                         className="form-control rounded-0" 
                         onChange={handleInput}
                         />
                         {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already Have an Account</p>
                 <Link to = '/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                </Link> 
                
            </div>
        </div>
    </>
    )
}

export default Signup;