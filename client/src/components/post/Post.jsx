import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ post }) { 
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post card">
            { post.photo && (
                <img className = "postImg rounded-top card-img-top" src={ PF + post.photo } alt="Card image cap"/>
            ) }
            <div className = "card-body">
                <div>
                    { post.categories.map((c) => (
                        <span className="postCat mt-15 mr-10">{ c.name }</span>
                    )) }
                </div>
                <Link to={ `/post/${ post._id }` } className='link'>
                    <span className="postTitle card-title">{ post.title }</span>
                </Link>
                <hr/>
                <span className="postDate">{ new Date(post.createdAt).toDateString() }</span>
                <p className="postDesc card-text">{ post.desc }</p>
            </div>
        </div>
    )
 }
