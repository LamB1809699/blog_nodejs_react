import {  useContext, useEffect, useState  } from "react";
import {  useLocation  } from "react-router"
import {  Link  } from "react-router-dom";
import axios from "axios"
import "./singlepost.css"
import { Context } from "../../context/Context";

export default function SinglePost() { 
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const PF = "http://localhost:5000/images/";
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const { user } = useContext(Context);

    useEffect(() => { 
        const getPost = async () => { 
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
     }, [path])

    //  Handle Delete function
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { 
                data: { username: user.username },
            });
            window.location.replace("/");
            setUpdateMode(false);
        } catch (err) { console.log(err); }
    }

    // Handle Update function
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { 
                username: user.username, 
                title, 
                desc,
            });
            window.location.reload();
        } catch (err) { console.log(err); }
    }
    return (
        <div className="container">
            <div className="d-flex flex-column singlePost">
                { post.photo && (
                    <img src = { PF + post.photo } alt = "" className = "img-fluid rounded singlePostImg" />
                )}
                {
                    updateMode ? (
                        <input 
                            type = "text" 
                            value = { title } 
                            className = "singlePostTitleInput text-center d-flex justify-content-center align-items-center my-3"
                            onChange = { (e) => setTitle(e.target.value) }
                            autoFocus = { true }
                        />
                    ) : (
                        <div className = "singlePostTitle text-center d-flex justify-content-center align-items-center my-3">
                            <span className = "display-6">{ title }</span>
                            { post.username === user?.username && (
                                <div className = "singlePostEdit">
                                    <i 
                                        className = "singlePostIcon far fa-edit" 
                                        onClick = { () => setUpdateMode(true) }
                                    ></i>
                                    <i 
                                        className = "singlePostIcon far fa-trash-alt" 
                                        onClick = { handleDelete }
                                    ></i>
                                </div>
                            ) }
                        </div>
                    )
                }
                <div className = "singlePostInfo d-flex justify-content-between fs-6 mb-2">
                    <span className = "singlePostAuthor">
                        Author:
                        <Link to = { `/?user=${ post.username }` } className = "link">
                            <b> { post.username }</b>
                        </Link>
                    </span>
                    <span>{ new Date(post.createdAt).toDateString() }</span>
                </div>
                { 
                    updateMode ? (
                        <textarea 
                            className = "singlePostDescInput"
                            value = { desc }
                            onChange = { (e) => setDesc(e.target.value) }
                        />
                    ) : (
                        <p className = "singlePostDesc text-justify">{ desc }</p>
                    )
                }
                { updateMode && (
                    <button className="singlePostButton rounded-pill mt-3" onClick = {handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
 }
