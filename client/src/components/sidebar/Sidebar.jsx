import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/categories');
            setCats(res.data);
        }
        getCats();
    }, [])
    return (
        <div className="sidebar container rounded align-items-center flex-column">
            <div className="d-flex align-items-center flex-column">
                <span className="sidebarTitle h-6 border-top border-bottom border-info text-center">ABOUT ME</span>
                <img 
                    src="https://avatarfiles.alphacoders.com/125/125140.jpg" 
                    alt="" 
                    className = "sidebarImg"
                />
                <p className = "sidebarDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum pulvinar ligula, ac posuere leo bibendum vitae. Mauris sem magna, tristique non lorem at, aliquet hendrerit dui. Mauris turpis dolor, sodales nec ultrices eget, molestie quis risus. Integer ornare ullamcorper vehicula. Morbi aliquam ante ac accumsan dignissim. Suspendisse sagittis urna vel mollis elementum. Sed consectetur congue urna.
                </p>
            </div>
            <div className="d-flex align-items-center flex-column">
                <span className="sidebarTitle h-6 border-top border-bottom border-info text-center">CATEGORIES</span>
                <ul className="list-inline">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="list-inline-item">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="d-flex align-items-center flex-column">
                <span className="sidebarTitle h-6 border-top border-bottom border-info text-center">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
