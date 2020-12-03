import React from 'react'
// import {span} from 'react-router-dom'
//Images
import arrow from '../images/arrow.png'

export default function SubMenu(props) {
    const handleBackClick = () => {
        props.handleCloseSubMenu()
    }


    let menu_content
    let menu_title
    if (props.menuItem === "Men") {
        menu_title = "MEN"
        menu_content = 
        <div className="subMenu_links">
            <span to="/Men/Shirts">Shirts</span>
            <span to="/Men/Shorts">Shorts</span>
            <span to="/Men/Sweaters">Sweaters</span>
        </div>
    } else if (props.menuItem === "Women") {
        menu_title = "Women"
        menu_content = 
        <div className="subMenu_links">
            <span to="/Women/Shirts">Shirts</span>
            <span to="/Women/Shorts">Shorts</span>
            <span to="/Women/Sweaters">Sweaters</span>
        </div>
    } else if (props.menuItem === "Children"){
        menu_title = "CHILDREN"
        menu_content = 
        <div className="subMenu_links">
            <h2>Boys</h2>
            <div>
                <span to="/Children/Boys/Shirts">Shirts</span>
                <span to="/Children/Boys/Shorts">Shorts</span>
                <span to="/Children/Boys/Sweaters">Sweaters</span>
            </div>
            <h2>Girls</h2>
            <div>
                <span to="/Children/Girls/Shirts">Shirts</span>
                <span to="/Children/Girls/Shorts">Shorts</span>
                <span to="/Children/Girls/Sweaters">Sweaters</span>
            </div>
        </div>
    }

    return (
        <div className={props.subMenuOpen ? "subMenu active" : "subMenu"}>
            {menu_content}
            <div className="subMenu_title_div">
                <p onClick={handleBackClick}><img src={arrow} alt="" />BACK</p>
                <h1>{menu_title}</h1>
            </div>
        </div>
    )
}
