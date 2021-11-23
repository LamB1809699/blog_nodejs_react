import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://www.teahub.io/photos/full/18-186653_zelda-breath-of-the-wild.jpg" 
                alt="" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Donec ut ex et felis sodales vulputate. Etiam at quam egestas, vestibulum ex in, tristique turpis. Duis rutrum neque sit amet mattis malesuada. Sed nec arcu eget risus mollis interdum. Phasellus venenatis ullamcorper auctor. Sed eget lobortis risus. Phasellus orci ligula, sollicitudin nec risus in, porttitor sodales dui.
            </p>
        </div>
    )
}
