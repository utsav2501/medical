import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Booking() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    message: "",
    
  });
  const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.phone === "" && errors.phone ==="" && errors.dob ==="" && errors.message ==="" ){
            axios.post('http://localhost:8081/booking',values)
            .then(res =>{
                navigate('/');
            })
            .catch(err => console.log(err))
        }
    }
  return (
    <div>
      <section className="section-padding" id="booking">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <div className="booking-form">
                <h2 className="text-center mb-lg-3 mb-2">
                  Book an appointment
                </h2>

                <form  onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Full name"
                        required
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Email address"
                        required
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="telephone"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{10}"
                        className="form-control"
                        placeholder="Phone: 0123456789"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="date"
                        name="dob"
                        id="date"
                        value=""
                        className="form-control"
                        onChange={handleInput}
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="5"
                        id="message"
                        name="message"
                        placeholder="Additional Message"
                        onChange={handleInput}
                      ></textarea>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mx-auto">
                      <button
                        type="submit"
                        className="form-control"
                        id="submit-button"
                        onClick={handleSubmit}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
