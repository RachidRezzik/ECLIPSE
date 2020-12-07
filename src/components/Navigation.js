import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

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

    return (
        <div>
            <Search searchOpen={searchOpen}/>
            <Cart cartOpen={cartOpen}/>
            <div className="navbar">
                <div className="logo_div">
                    <Link to="/">
                        <img src={eclipse_logo} alt="" />
                    </Link>
                </div>
                {isMobile ? 
                <div className={menuSlider ? "menu_slider active" : "menu_slider"}>
                    <div className="slider_container">
                        <div className="first_menu" style={{transform: `translateX(${X}%`}}>
                            <button onClick={() => handleMenuClick('Men')}>MEN <img src={arrow} alt="" /></button>
                            <button onClick={() => handleMenuClick('Women')}>WOMEN <img src={arrow} alt="" /></button>
                            <button onClick={() => handleMenuClick('Boys')}>BOYS <img src={arrow} alt="" /></button>
                            <button onClick={() => handleMenuClick('Girls')}>GIRLS <img src={arrow} alt="" /></button>
                        </div>
                        <div className="second_menu" style={{transform: `translateX(${X}%`}}>
                            <SubMenu 
                            menuItemSelected={menuItemSelected} 
                            handleMenuSwitch={handleMenuSwitch}  
                            />
                        </div>
                    </div>
                </div> : 
                <div className="desktop_menu">
                    <div className="dropdown1">
                        <button>MEN</button>
                        <div className="submenu1">
                            <Link to="/MEN/Shirts">SHIRTS</Link>
                            <Link to="/MEN/Shirts">SHORTS</Link>
                            <Link to="/MEN/Shirts">JOGGERS</Link>
                        </div>
                    </div>
                    <div className="dropdown2">
                        <button>WOMEN</button>
                        <div className="submenu2">
                            <Link to="/WOMEN/Shirts">SHIRTS</Link>
                            <Link to="/WOMEN/Shirts">SHORTS</Link>
                            <Link to="/MEN/LEGGINGS">LEGGINGS</Link>
                        </div>
                    </div>
                    <div className="dropdown3">
                        <button>BOYS</button>
                        <div className="submenu3">
                            <Link to="/BOYS/Shirts">SHIRTS</Link>
                            <Link to="/BOYS/Shirts">SHORTS</Link>
                            <Link to="/BOYS/Shirts">JOGGERS</Link>
                        </div>
                    </div>
                    <div className="dropdown4">
                        <button>GIRLS</button>
                        <div className="submenu4">
                            <Link to="/GIRLS/Shirts">SHIRTS</Link>
                            <Link to="/GIRLS/Shirts">SHORTS</Link>
                            <Link to="/GIRLS/LEGGINGS">LEGGINGS</Link>
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
                        <h4 className="bag_total" onClick={handleCart}>0</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
