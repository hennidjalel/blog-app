import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from 'axios';
import { axiosInstance } from '../axios';

const Login = () => {


    const [input, setInput] = useState({
        username: '',
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
            await axiosInstance.get("/api/auth/login", input)
            navigate("/")
        } catch (err) {
            setError(err.response.data)
        }
    }





    return (
        <div className='auth'>
            <h1 className='title'>Login</h1>
            <motion.form
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <input required type="text" placeholder='username' name='username' onChange={handleChange} />
                <input required type="password" placeholder='password' name='password' onChange={handleChange} />
                <button className='button' onClick={handleSubmit}>Login</button>
                {err && <p className='error'>{err}</p>}
                <span className='span'>Dont you have account ? <Link to='/register'>Register</Link></span>
            </motion.form>
        </div>
    )
}

export default Login