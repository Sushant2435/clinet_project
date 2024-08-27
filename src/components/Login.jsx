import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const [formdata, setFormData] = useState({
        email: "",
        password: ""
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setSubmit] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // Form data is valid, proceed to make the API call
            const loginUser = async () => {
                try {
                    const response = await axios.post('https://subh-yatra-backend.vercel.app/login', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.status === 200) {
                        alert("Login successful");
                        localStorage.setItem('user', JSON.stringify(response.data));
                        navigate('/');
                    } else {
                        alert("Something went wrong, please try again later");
                    }
                } catch (error) {
                    console.error('Error during login:', error);
                    alert("An error occurred. Please try again later.");
                }
            };

            loginUser();
        }
    }, [formErrors, isSubmit, formdata, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formdata));
        setSubmit(true);
    };

    const validateForm = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password must be less than 10 characters";
        }
        return errors;
    };

    return (
        <div className='flex flex-col h-screen items-center justify-center'>
            <div className='h-auto w-1/3 bg-yellow-100 px-10 py-10 rounded-3xl shadow-xl'>
                <h1 className='font-bold text-3xl pb-5 text-center'>Login Form</h1>
                <form action="" className='flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input type="email" name="email" placeholder='Enter Your email' value={formdata.email} onChange={handleChange} className='rounded-xl p-2' />
                        <p className='text-red-500'>{formErrors.email}</p>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input type="password" name="password" placeholder='Enter Password' value={formdata.password} onChange={handleChange} className='rounded-xl p-2' />
                        <p className='text-red-500'>{formErrors.password}</p>
                    </div>
                    <button type='submit' className='bg-green-500 w-1/3 m-auto font-bold rounded-xl p-2 text-lg'>Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
