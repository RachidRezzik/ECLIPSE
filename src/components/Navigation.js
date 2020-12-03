import React, {useState, useEffect} from 'react'

//Components
import SubMenu from '../components/SubMenu'

//Images
import eclipse_logo from '../images/eclipse_logo.JPG'
import hamburger from '../images/hamburger.png'
import x_mark from '../images/x_mark.png'
import shopping_bag from '../images/shopping_bag.png'
import search from '../images/search.png'
import arrow from '../images/arrow.png'

export default function Navigation() {
    const [wholeMenuOpen, setWholeMenuOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    const [menuItem, setMenuItem] = useState("")

    const handleWholeMenuToggle = () => {
        setWholeMenuOpen(!wholeMenuOpen)
        setMenuOpen(!menuOpen)
        if (subMenuOpen){
            setSubMenuOpen(false)
            setMenuOpen(false)
        }
    }
    
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen)
        setSubMenuOpen(false)
    }
    
    const handleMenuClick = (menuLink) => {
        setMenuItem(menuLink)
        setSubMenuOpen(true)
        setMenuOpen(false)
    }

    const handleCloseSubMenu = () => {
        setSubMenuOpen(false)
        setMenuOpen(true)
    }


    return (
        <div>
            <div className="navbar">
                <div className="logo_div">
                    <a>
                        <img src={eclipse_logo} alt="" />
                    </a>
                </div>
                <div className={menuOpen? "menu_div active" : "menu_div"}>
                    <span onClick={() => handleMenuClick("Men")}>MEN<img src={arrow} alt=""/></span>
                    <span onClick={() => handleMenuClick("Women")}>WOMEN<img src={arrow} alt=""/></span>
                    <span onClick={() => handleMenuClick("Children")}>CHILDREN<img src={arrow} alt=""/></span>
                </div>
                <div className="hamburger_div">
                    <img src={wholeMenuOpen ? x_mark : hamburger} alt="" onClick={handleWholeMenuToggle}/>
                </div>
                <div className="bag_div">
                    <div>
                        <img src={search} alt="" />
                    </div>
                    <div>
                        <img src={shopping_bag} alt="" />
                        <h4 className="bag_total">0</h4>
                    </div>
                </div>
            </div>
            <SubMenu 
            menuItem={menuItem}
            subMenuOpen={subMenuOpen}
            handleCloseSubMenu={handleCloseSubMenu}
            />
        </div>
    )
}
