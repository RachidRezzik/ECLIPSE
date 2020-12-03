import React, {useState, useEffect} from 'react'
//Images
import eclipse_logo from '../images/eclipse_logo.JPG'
import hamburger from '../images/hamburger.png'
import x_mark from '../images/x_mark.png'
import shopping_bag from '../images/shopping_bag.png'
import search from '../images/search.png'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuOpenMen, setMenuOpenMen] = useState(false)
    const [menuOpenWomen, setMenuOpenWomen] = useState(false)
    const [menuOpenChildren, setMenuOpenChildren] = useState(false)


    return (
        <div>
            <div className="navbar">
                <div className="logo_div">
                    <a>
                        <img src={eclipse_logo} alt="" />
                    </a>
                </div>
                <div className={menuOpen? "menu_div active" : "menu_div"}>
                    <a>MEN</a>
                    <a>WOMEN</a>
                    <a>CHILDREN</a>
                </div>
                <div className="hamburger_div">
                    <img src={menuOpen ? x_mark : hamburger} alt=""/>
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
        </div>
    )
}
