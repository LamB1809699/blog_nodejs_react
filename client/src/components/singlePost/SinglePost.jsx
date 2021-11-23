import './singlepost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src="https://images6.alphacoders.com/849/849322.jpg" 
                    alt="" 
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Donec lobortis metus elementum 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>William</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum pulvinar ligula, ac posuere leo bibendum vitae. Mauris sem magna, tristique non lorem at, aliquet hendrerit dui. Mauris turpis dolor, sodales nec ultrices eget, molestie quis risus. Integer ornare ullamcorper vehicula. Morbi aliquam ante ac accumsan dignissim. Suspendisse sagittis urna vel mollis elementum. Sed consectetur congue urna. Nunc consectetur in est sed commodo. Fusce ac posuere ex. In venenatis est dapibus felis feugiat pretium. Vestibulum tincidunt hendrerit facilisis. Quisque pellentesque vehicula nulla, quis suscipit nunc. Phasellus gravida, sapien vel cursus rhoncus, enim lorem pretium massa, sed cursus massa ipsum in sem. Cras ac metus est. Nunc volutpat malesuada nisl sit amet congue. Morbi suscipit mollis odio et vehicula.
                </p>
            </div>
        </div>
    )
}
