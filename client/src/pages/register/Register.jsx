import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace('/login');
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="container-fluid register d-flex align-items-center justify-content-center flex-column">
            <span className = "display-3">Register</span>
            <form className = "d-flex flex-column mt-2" onSubmit = {handleSubmit}>
                <div className="mt-3">
                    <label className = "form-label" htmlFor = "usernameInput">Username</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        id = "usernameInput"
                        placeholder = "Enter your username" 
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className = "form-label" htmlFor = "emailInput">Email</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        id = "emailInput"
                        placeholder = "Enter your email" 
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-3">
                    <label className = "form-label" htmlFor = "passwordInput">Password</label>
                    <input 
                        type = "password" 
                        className = "form-control"
                        id = "passwordInput" 
                        placeholder = "Enter your password" 
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className = "mt-4 rounded-pill registerButton" type = "submit">Register</button>
            </form>
            <button className = "rounded registerLoginButton">
                <Link to = '/login' className = 'link'>Login</Link>
            </button>
            {error && <span className = "mt-4 alert alert-danger">Something has gone very wrong!!</span>}
        </div>
    )
}
