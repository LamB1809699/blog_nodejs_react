import axios from 'axios';
import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './login.css'

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    return (
        <div className="container-fluid login d-flex align-items-center justify-content-center flex-column">
            <span className = "display-3">Login</span>
            <form className = "d-flex flex-column mt-2" onSubmit = {handleSubmit}>
                <div className = "mt-3">
                    <label className = "form-label" htmlFor = "usernameInput">Username</label>
                    <input 
                        type = "text" 
                        className = "form-control" 
                        id = "usernameInput"
                        placeholder = "Enter your username" 
                        ref = {userRef}
                    />
                </div>
                <div className = "mt-3">
                    <label className = "form-label" htmlFor = "passwordInput">Password</label>
                    <input 
                        type = "password" 
                        className = "form-control" 
                        id = "passwordInput"
                        placeholder = "Enter your password" 
                        ref = {passwordRef}
                    />
                </div>
                <button className = "mt-4 rounded-pill loginButton" type = "submit" disabled = {isFetching}>Login</button>
            </form>
            <button className = "rounded loginRegisterButton">
                <Link to = '/register' className = 'link'>Register</Link>
            </button>
        </div>
    )
}
