import Sidebar from "../../components/sidebar/Sidebar";
import {  useContext, useState  } from "react";
import {  Context  } from "../../context/Context";
import axios from "axios";
import "./settings.css";

export default function Settings() { 
    const [ file, setFile ] = useState(null);
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ success, setSuccess ] = useState(false);
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { console.log(err); }
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) { 
            console.log(err); 
            dispatch({ type: "UPDATE_FAILURE" });
        }
    }
    return (
        <div className="container-fluid row">
            <div className="col-9 p-5">
                <span className = "settingsUpdateTitle display-5 mb-2">Update Your Account</span>
                <form className = "d-flex flex-column" onSubmit = {handleSubmit}>
                    <label className = "fs-5 mt-3">Profile Picture</label>
                    <div className = "settingsPP">
                        <img src = { file ? URL.createObjectURL(file) : PF + user.profilePic } alt = "" />
                        <label htmlFor = "fileInput">
                            <i className = "rounded-circle d-flex align-items-center justify-content-center settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                            type = "file" 
                            id = "fileInput" 
                            style = {{ display:"none" }}
                            onChange = { e => setFile(e.target.files[0]) }
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor = "usernameInput" className = "form-label">Username</label>
                        <input 
                            type = "text" 
                            className = "form-control"
                            id = "usernameInput"
                            placeholder = { user.username }
                            onChange = { e => setUsername(e.target.value) }
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor = "emailInput" className = "form-label">Email</label>
                        <input 
                            type = "email" 
                            className = "form-control"
                            id = "emailInput"
                            placeholder = { user.email }
                            onChange = { e => setEmail(e.target.value) }
                        />
                    </div>
                    <div className="mt-4">
                        <label htmlFor = "passwordInput" className = "form-label">Password</label>
                        <input 
                            type = "password"
                            className = "form-control"
                            id = "passwordInput"
                            onChange = { e => setPassword(e.target.value) }
                        />
                    </div>
                    <button className = "rounded-pill mt-4 settingsSubmit" type= "submit">Update</button>
                    { success && <span className = "mt-4 text-center notification">Profile has been updated!!</span> }
                </form>
            </div>
            <div className="col-3"><Sidebar /></div>
        </div>
    )
 }
