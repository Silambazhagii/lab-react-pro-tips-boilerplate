import React from 'react'
import { useState } from 'react';

function RegistrationForm() {
    const [formval, setformval] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNo: '',
    });

    const [error, seterrors] = useState({});
    const [sub, setsub] = useState(false);

    function handleform(e) {
        const [name, value] = [e.target.name, e.target.value];
        setformval({ ...formval, [name]: value });
    }

    function valid(e) {
        e.preventDefault();

        const errors = {};

        if (formval.FirstName.length === 0) {
            errors.FirstName = 'Please enter your FirstName';
        }
        if (formval.LastName.length === 0) {
            errors.LastName = 'Please enter your LastName';
        }
        if (formval.Email.length === 0) {
            errors.Email = 'Please enter your Email';
        }
        if (formval.PhoneNo.length === 0) {
            errors.PhoneNo = 'Please enter your PhoneNo';
        }
        if (formval.PhoneNo.length < 10) {
            errors.PhoneNo = 'Invalid PhoneNo';
        }

        seterrors(errors);
        setsub(true);
    }  return (
    <div className='main'>
    <form className='forms' onSubmit={valid}>
        {sub && Object.keys(error).length === 0 && (
            <h2>Registration Successful!</h2>
        )}
        <input
            type='text'
            id=''
            placeholder='FirstName'
            name='FirstName'
            value={formval.FirstName}
            onChange={handleform}
        />
        <span className='error-text'>{error.FirstName}</span>
        <input
            type='text'
            id=''
            placeholder='LastName'
            name='LastName'
            value={formval.LastName}
            onChange={handleform}
        />
        <span className='error-text'>{error.LastName}</span>
        <input
            type='text'
            id=''
            placeholder='Email'
            name='Email'
            value={formval.Email}
            onChange={handleform}
        />
        <span className='error-text'>{error.Email}</span>
        <input
            type='text'
            id=''
            placeholder='PhoneNo'
            name='PhoneNo'
            value={formval.PhoneNo}
            onChange={handleform}
        />
        <span className='error-text'>{error.PhoneNo}</span>
        <button type='submit' className='btn'>
            Register
        </button>
    </form>
    </div>
  )
}

export default RegistrationForm