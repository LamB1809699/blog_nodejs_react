import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./write.css";

export default function Write() {
    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ file, setFile ] = useState(null);
    const { user } = useContext(Context);

    // Handle Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { console.log(err); }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { 
            // console.log(err); 
        }
    }
    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            { file && (
                <img src = {URL.createObjectURL(file)} alt = "" className = "rounded writeImg" />
            )}
            <form action = "" className = "writeForm" onSubmit = {handleSubmit}>
                <div className="d-flex align-items-center">
                    <label htmlFor = "fileInput">
                        <i className = "writeIcon border border-2 border-primary rounded-circle d-flex align-items-center justify-content-center fas fa-plus"></i>
                    </label>
                    <input 
                        type = "file" 
                        id = "fileInput" 
                        style = {{ display:"none" }}
                        onChange = { e => setFile(e.target.files[0]) }
                    />
                    <input 
                        type = "text" 
                        placeholder = "Title" 
                        className = "writeInput form-control" 
                        autoFocus = { true } 
                        onChange = { e => setTitle(e.target.value) }
                    />
                    <button className = "rounded writeSubmit" type = "submit">Publish</button>
                </div>
                <textarea 
                    placeholder = "Tell your story..." 
                    type = "text" 
                    className = "writeInput writeText form-control"
                    onChange = { e => setDesc(e.target.value) }
                ></textarea>
            </form>
        </div>
    )
}
