import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
//Images
import arrow from '../images/arrow.png'

export default function SubMenu(props) {
    const handleBackClick = () => {
        props.handleMenuSwitch()
    }

    const handleCloseSlider = () => {
        props.handleMenuSlider()
    }
    console.log(props.menuItemSelected)
    let menu_content
    let menu_title
    if (props.menuItemSelected === "Men") {
        menu_title = "MEN"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />MEN</button>
            <Link to="/MEN#Shirts" onClick={handleCloseSlider}>Shirts</Link>
            <Link to="/MEN#Shorts" onClick={handleCloseSlider}>Shorts</Link>
            <Link to="/MEN#Joggers" onClick={handleCloseSlider}>Joggers</Link>
        </div>
    } else if (props.menuItemSelected === "Women") {
        menu_title = "Women"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />WOMEN</button>
            <Link to="/WOMEN#Shirts" onClick={handleCloseSlider}>Shirts</Link>
            <Link to="/WOMEN#Shorts" onClick={handleCloseSlider}>Shorts</Link>
            <Link to="/WOMEN#Leggings" onClick={handleCloseSlider}>Leggings</Link>
        </div>
    } else if (props.menuItemSelected === "Boys"){
        menu_title = "Boys"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />BOYS</button>
            <Link to="/BOYS#Shirts" onClick={handleCloseSlider}>Shirts</Link>
            <Link to="/BOYS#Shorts" onClick={handleCloseSlider}>Shorts</Link>
            <Link to="/BOYS#Joggers" onClick={handleCloseSlider}>Joggers</Link>
        </div>
    } else if (props.menuItemSelected === "Girls") {
        menu_title = "Girls"
        menu_content = 
        <div className="subMenu_links">
            <button onClick={handleBackClick}><img src={arrow} alt="" />Girls</button>
            <Link to="/GIRLS#Shirts" onClick={handleCloseSlider}>Shirts</Link>
            <Link to="/GIRLS#Shorts" onClick={handleCloseSlider}>Shorts</Link>
            <Link to="/GIRLS#Leggings" onClick={handleCloseSlider}>Leggings</Link>
        </div>
    }
    
    return (
        <div>
            {menu_content}
        </div>
    )
}
