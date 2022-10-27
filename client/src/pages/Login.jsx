import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <div className='auth'>
            <h1 className='title'>Login</h1>
            <motion.form
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <input required type="text" placeholder='username' />
                <input required type="password" placeholder='password' />
                <button className='button'>Login</button>
                <p className='error'>This is an error</p>
                <span className='span'>Dont you have account ? <Link to='/register'>Register</Link></span>
            </motion.form>
        </div>
    )
}

export default Login