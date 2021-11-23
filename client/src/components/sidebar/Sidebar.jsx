import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://avatarfiles.alphacoders.com/125/125140.jpg" 
                    alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum pulvinar ligula, ac posuere leo bibendum vitae. Mauris sem magna, tristique non lorem at, aliquet hendrerit dui. Mauris turpis dolor, sodales nec ultrices eget, molestie quis risus. Integer ornare ullamcorper vehicula. Morbi aliquam ante ac accumsan dignissim. Suspendisse sagittis urna vel mollis elementum. Sed consectetur congue urna. Nunc consectetur in est sed commodo.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
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
