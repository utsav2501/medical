import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import validation from "./LoginValidation";
import axios from 'axios';
import Navbar from './Navbar'


function Login() {
    const [values, setValues] = useState({
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
        if(errors.email === "" && errors.password === ""  ){
            axios.post('http://localhost:8081/login',values)
            .then(res =>{
                if(res.data === "Success"){
                    navigate('/');
                }
                else{
                    alert("no record found");
                }
            })
            .catch(err => console.log(err))
        }
    }

return (
    <>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                    <form action="" onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                    </form>
                    <p>Not Have an Account</p>
                    <Link to = '/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Ceate an Account
                    </Link> 

            </div>
        </div>
    </>
        
    )
}
export default Login;