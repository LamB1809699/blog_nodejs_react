import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css"

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    // Handle Logout function
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light top">
            <div className = "container-fluid row">
                <a className = "navbar-brand col-3 col-sm-2 d-flex justify-content-center fs-4" href="#">BLOG PAGE</a>
                {/* <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className = "navbar-toggler-icon"></span>
                </button> */}
                <div className = "d-flex justify-content-center col-6 col-sm-7" id="navbarSupportedContent">
                    <ul className = "navbar-nav mb-2 mb-lg-0 mx-auto topList">
                        <li className = "nav-item mx-2">
                            <a className = "nav-link"><Link to = "/" className = "link">HOME</Link></a>
                            
                        </li>
                        <li className = "nav-item mx-2">
                            <a className = "nav-link"><Link to = "/about" className = "link">ABOUT</Link></a>
                        </li>
                        <li className = "nav-item mx-2">
                            <a className = "nav-link"><Link to = "/write" className = "link">WRITE</Link></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className = "nav-link" onClick = {handleLogout}>
                                {user && "LOGOUT"}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className = "navbar-brand col-3 col-sm-2 d-flex justify-content-center">
                    { user ? (
                        <Link to = "/settings">
                            <img className = "rounded-circle topImg" src = { PF + user.profilePic } alt = "" />
                        </Link>
                    ) : (
                        <ul className = "navbar-nav mb-2 mb-lg-0 mx-auto topList">
                            <li className = "nav-item">
                                <a className = "nav-link"><Link to = "/login" className = "link">LOGIN</Link></a>
                            </li>
                            <li className = "nav-item">
                                <a className = "nav-link"><Link to = "/register" className = "link">REGISTER</Link></a>
                            </li>
                        </ul>
                    )}
             </div>
            </div>
        </nav>
    )
}
