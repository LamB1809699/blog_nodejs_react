import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search);
            setPosts(res.data);
        }
        fetchPosts();
    }, [search])
    return (
        <div className = "container-fluid">
            <Header/>
            <div className="d-flex row">
                <div className="col-9"><Posts posts = {posts} /></div>
                <div className="col-3"><Sidebar /></div>
            </div>
        </div>
    )
}
