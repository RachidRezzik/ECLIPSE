import React from 'react'
import {Link} from 'react-router-dom'
//Images
import arrow from '../images/arrow.png'

export default function SubMenu(props) {
    const handleBackClick = () => {
        props.handleMenuSwitch()
    }
    console.log(props.menuItemSelected)
    let menu_content
    let menu_title
    if (props.menuItemSelected === "Men") {
        menu_title = "MEN"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />MEN</button>
            <Link to="/Men/Shirts">Shirts</Link>
            <Link to="/Men/Shorts">Shorts</Link>
            <Link to="/Men/Joggers">Joggers</Link>
        </div>
    } else if (props.menuItemSelected === "Women") {
        menu_title = "Women"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />WOMEN</button>
            <Link to="/Women/Shirts">Shirts</Link>
            <Link to="/Women/Shorts">Shorts</Link>
            <Link to="/Women/Leggings">Leggings</Link>
        </div>
    } else if (props.menuItemSelected === "Boys"){
        menu_title = "Boys"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />BOYS</button>
            <Link to="/Boys/Shirts">Shirts</Link>
            <Link to="/Boys/Shorts">Shorts</Link>
            <Link to="/Boys/Joggers">Joggers</Link>
        </div>
    } else if (props.menuItemSelected === "Girls") {
        menu_title = "Girls"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />Girls</button>
            <Link to="/Girls/Shirts">Shirts</Link>
            <Link to="/Girls/Shorts">Shorts</Link>
            <Link to="/Girls/Leggings">Leggings</Link>
        </div>
    }
    
    return (
        <div>
            {menu_content}
        </div>
    )
}
