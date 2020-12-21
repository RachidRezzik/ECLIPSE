import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';


//Components
import SubMenu from '../components/SubMenu'
import useWindowSize from './useWindowSize'
import Search from './Search'

//Images
import eclipse_logo from '../images/eclipse_logo.JPG'
import hamburger from '../images/List-Menu.svg'
import x_mark from '../images/X-icon.svg'
import shopping_bag from '../images/Bag-icon.svg'
import search from '../images/Search-icon.svg'
import arrow from '../images/Arrow-icon.svg'

export default function Navigation(props) {
    const [menuItemSelected, setMenuItemSelected] = useState("")
    const [isMobile, setIsMobile] = useState(useWindowSize().width <= 650 ? true : false)
    const screenWidth = useWindowSize().width

    
    const handleResize = (width, isMobile) =>{
        if (width > 650 && isMobile == true){
            setIsMobile(false)
        } else if (width <= 650 && isMobile == false){
            setIsMobile(true)
        }
    }

    handleResize(useWindowSize().width, isMobile)

    const handleMenuSlider = (message) => {
        props.handleMenuSlider(message)
    }

    const handleMenuClick = (menuItem) => {
        setMenuItemSelected(menuItem)
        props.handleMenuSwitch()
    }

    const handleSearch = () => {
        props.handleSearch()
    }

    const handleMenuHover = (menuID) => {
        let subMenu = document.querySelector(menuID)
        if (screenWidth > 650){
            subMenu.style.display = "flex"
        }
    }

    const handleMenuBlur = (menuID) => {
        let subMenu = document.querySelector(menuID)
        if (screenWidth > 650){
            subMenu.style.display = "none"
        }
    }

    const handleMenuBlur2 = (menuID) => {
        let subMenu = document.querySelector(menuID)
        if (screenWidth > 650){
            subMenu.style.display = "none"
        }
        window.scrollTo({
            top: 0
        })
        props.handleSearchCloseDesktop()
    }

    const handleSubMenuClick = (menuID) => {
        let subMenu = document.querySelector(menuID)
        if (screenWidth > 650){
            subMenu.style.display = "none"
            props.handleSearchCloseDesktop()
        }
    }

    const handleBagClick = () => {
        window.scrollTo({
            top: 0
        })
        props.handleMenuSlider("bag_click")
    }

    return (
        <div>
            <div className="navbar">
                <div className="logo_div">
                    <Link to="/" onClick={() => handleMenuSlider("logo_click")}>
                        <img src={eclipse_logo} alt="" />
                    </Link>
                </div>
                {isMobile ? 
                <div className={props.menuSlider ? "menu_slider active" : "menu_slider"}>
                    <div className="slider_container">
                        <div className="first_menu" style={{transform: `translateX(${props.X}%`}}>
                            <button onClick={() => handleMenuClick('Men')}>MEN <img src={arrow} alt="" /></button>
                            <button onClick={() => handleMenuClick('Women')}>WOMEN <img src={arrow} alt="" /></button>
                        </div>
                        <div className="second_menu" style={{transform: `translateX(${props.X}%`}}>
                            <SubMenu 
                            menuItemSelected={menuItemSelected} 
                            handleMenuSwitch={props.handleMenuSwitch}
                            handleMenuSlider={handleMenuSlider}  
                            />
                        </div>
                    </div>
                </div> : 
                <div className="desktop_menu">
                    <div className="dropdown1" onMouseOver={() => handleMenuHover(".submenu1")} onMouseOut={() => handleMenuBlur(".submenu1")}>
                        <Link className="MEN" to="/MEN" onClick={() => handleMenuBlur2(".submenu1")}>MEN</Link>
                        <div className="submenu1">
                            <Link to="/MEN#Shirts" onClick={() => handleSubMenuClick(".submenu1")}>SHIRTS</Link>
                            <Link to="/MEN#Shorts" onClick={() => handleSubMenuClick(".submenu1")}>SHORTS</Link>
                            <Link to="/MEN#Joggers" onClick={() => handleSubMenuClick(".submenu1")}>JOGGERS</Link>
                        </div>
                    </div>
                    <div className="dropdown2" onMouseOver={() => handleMenuHover(".submenu2")} onMouseOut={() => handleMenuBlur(".submenu2")}>
                        <Link to="/WOMEN" onClick={() => handleMenuBlur2(".submenu2")}>WOMEN</Link>
                        <div className="submenu2">
                            <Link to="/WOMEN#Shirts" onClick={() => handleSubMenuClick(".submenu2")}>SHIRTS</Link>
                            <Link to="/WOMEN#Shorts" onClick={() => handleSubMenuClick(".submenu2")}>SHORTS</Link>
                            <Link to="/WOMEN#Leggings" onClick={() => handleSubMenuClick(".submenu2")}>LEGGINGS</Link>
                        </div>
                    </div>
                </div>}
                
                <div className="hamburger_div">
                    <img src={props.menuSlider ? x_mark : hamburger} alt="" onClick={() => handleMenuSlider("hamburger_click")}/>
                </div>
                <div className="bag_div">
                    <div>
                        <img id="search" src={props.searchOpen ? x_mark : search} alt="" onClick={handleSearch}/>
                    </div>
                        <div>
                            <Link to="/BAG" onClick={handleBagClick}>
                                <img src={shopping_bag} alt=""/>
                                <h4 className="bag_total">{props.bagItems}</h4>
                            </Link>
                        </div>
                </div>
            </div>
            <Search 
            searchOpen={props.searchOpen}
            handleItemPreview={props.handleItemPreview} 
            handleSearch={props.handleSearch}
            handleClickOutsideSearch={props.handleClickOutsideSearch}   
            />
        </div>
    )
}
