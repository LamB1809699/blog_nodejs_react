import './headerabout.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">About Us</span>
            </div>
            <img 
                className="headerImg" 
                src="https://www.pixel4k.com/wp-content/uploads/2021/03/the-legend-of-zelda-nature-4k_1615132373.jpg"
                alt="" 
            />
        </div>
    )
}
