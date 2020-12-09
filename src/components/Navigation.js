import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';


//Components
import SubMenu from '../components/SubMenu'
import useWindowSize from './useWindowSize'
import Search from './Search'
import Cart from './Cart'

//Images
import eclipse_logo from '../images/eclipse_logo.JPG'
import hamburger from '../images/hamburger.png'
import x_mark from '../images/x_mark.png'
import shopping_bag from '../images/shopping_bag.png'
import search from '../images/search.png'
import arrow from '../images/arrow.png'

export default function Navigation(props) {
    const [menuSlider, setMenuSlider] = useState(false)
    const [menuItemSelected, setMenuItemSelected] = useState("")
    const [isMobile, setIsMobile] = useState(useWindowSize().width <= 650 ? true : false)
    const screenWidth = useWindowSize().width
    const [X, setX] = useState(0)
    const [searchOpen, setSearchOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    
    const handleResize = (width, isMobile) =>{
        if (width > 650 && isMobile == true){
            setIsMobile(false)
        } else if (width <= 650 && isMobile == false){
            setIsMobile(true)
        }
    }

    handleResize(useWindowSize().width, isMobile)


    const handleMenuSlider = () => {
        setMenuSlider(!menuSlider)
        if (!menuSlider){
            setX(0)
        } else{
            setTimeout(function(){setX(0)}, 770)
        }
    }

    const handleLogoClick = () => {
        setMenuSlider(false)
        if (!menuSlider){
            setX(0)
        } else{
            setTimeout(function(){setX(0)}, 770)
        }
        window.scrollTo({
            top: 0
        })
    }

    const handleMenuSwitch = () => {
        if (X == 0){
            setX(-100)
        } else{
            setX(0)
        }
    }

    const handleMenuClick = (menuItem) => {
        setMenuItemSelected(menuItem)
        handleMenuSwitch()
    }

    const handleSearch = () => {
        setSearchOpen(!searchOpen)
    }

    const handleCart = () => {
        setCartOpen(!cartOpen)
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
    }

    const handleSubMenuClick = (menuID) => {
        let subMenu = document.querySelector(menuID)
        if (screenWidth > 650){
            subMenu.style.display = "none"
        }
    }

    return (
        <div>
            {/* <Search searchOpen={searchOpen}/> */}
            {/* <Cart cartOpen={cartOpen}/> */}
            <div className="navbar">
                <div className="logo_div">
                    <Link to="/" onClick={handleLogoClick}>
                        <img src={eclipse_logo} alt="" />
                    </Link>
                </div>
                {isMobile ? 
                <div className={menuSlider ? "menu_slider active" : "menu_slider"}>
                    <div className="slider_container">
                        <div className="first_menu" style={{transform: `translateX(${X}%`}}>
                            <button onClick={() => handleMenuClick('Men')}>MEN <img src={arrow} alt="" /></button>
                            <button onClick={() => handleMenuClick('Women')}>WOMEN <img src={arrow} alt="" /></button>
                        </div>
                        <div className="second_menu" style={{transform: `translateX(${X}%`}}>
                            <SubMenu 
                            menuItemSelected={menuItemSelected} 
                            handleMenuSwitch={handleMenuSwitch}
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
                    <img src={menuSlider ? x_mark : hamburger} alt="" onClick={handleMenuSlider}/>
                </div>
                <div className="bag_div">
                    <div>
                        <img id="search" src={searchOpen ? x_mark : search} alt="" onClick={handleSearch}/>
                    </div>
                    <div>
                        <img src={shopping_bag} alt="" onClick={handleCart}/>
                        <h4 className="bag_total" onClick={handleCart}>{props.bagItems}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
