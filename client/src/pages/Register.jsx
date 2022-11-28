import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import { useState } from 'react';
// import axios from 'axios'
import { axiosInstance } from '../axios';

const Register = () => {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const [err, setError] = useState(null);

    const handleChange = e => {
        setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axiosInstance.post("/api/auth/register", input)
            navigate("/login")
        } catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <div className='auth'>
            <h1 className='title'>Register</h1>
            <motion.form
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <input required type="text" placeholder='username' name='username' onChange={handleChange} />
                <input required type="email" placeholder='email' name='email' onChange={handleChange} />
                <input required type="password" placeholder='password' name='password' onChange={handleChange} />
                <button className='button' onClick={handleSubmit}>Register</button>
                {err && <p className='error'>{err}</p>}
                <span className='span'>Do you have account ? <Link to='/login'>Login</Link></span>
            </motion.form>
        </div>
    )
}

export default Register