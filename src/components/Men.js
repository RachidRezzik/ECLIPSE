import React from 'react'
import {Link} from 'react-router-dom' 
//Images
import Mens_tank from '../images/Men_tank.jpg'
import Mens_tank2 from '../images/Men_tank2.jpg'
import Mens_tank3 from '../images/Men_tank3.jpg'
import Mens_shirt from '../images/Men_shirt.jpg'
import Mens_shirt2 from '../images/Men_shirt2.jpg'
import Mens_shirt3 from '../images/Men_shirt3.jpg'
import Mens_running from '../images/Men_running.jpg'
import Mens_running2 from '../images/Men_running2.jpg'
import Mens_running3 from '../images/Men_running3.jpg'
import Mens_flexible from '../images/Men_flexible.jpg'
import Mens_flexible2 from '../images/Men_flexible2.jpg'
import Mens_flexible3 from '../images/Men_flexible3.jpg'
import Mens_athletic from '../images/Men_athletic.jpg'
import Mens_athletic2 from '../images/Men_athletic2.jpg'
import Mens_athletic3 from '../images/Men_athletic3.jpg'
import Mens_classic from '../images/Men_classic.jpg'
import Mens_classic2 from '../images/Men_classic2.jpg'
import Mens_classic3 from '../images/Men_classic3.jpg'

export default function Men(props) {
    const handleItemPreview = (itemTitle, imageArray, itemPrice, category) => {
        props.handleItemPreview(itemTitle, imageArray, itemPrice, category)
    }

    return (
        <div className="Page">
            <div className="intro_container">
                <h1>Shop Men</h1>
            </div>
            <h2 id="Shirts">SHIRTS</h2>
            <div className="product_container">
                <Link to="/Item" onClick={() => handleItemPreview("Classic Tank", [Mens_tank, Mens_tank2, Mens_tank3], 14.99, "MEN")}>
                    <div className="product">
                        <img src={Mens_tank} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Classic Tank</h1>
                        <h3>$14.99</h3>
                    </div>
                </Link>
                <Link to="/Item" onClick={() => handleItemPreview("Dryfit T-Shirt", [Mens_shirt, Mens_shirt2, Mens_shirt3], 17.50, "MEN")}>
                    <div className="product">
                        <img src={Mens_shirt} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Dryfit T-Shirt</h1>
                        <h3>$17.50</h3>
                    </div>
                </Link>
            </div>
            <h2 id="Shorts">SHORTS</h2>
            <div className="product_container">
                <Link to="/Item" onClick={() => handleItemPreview("Running Shorts", [Mens_running, Mens_running2, Mens_running3], 19.99, "MEN")}>
                    <div className="product">
                        <img src={Mens_running} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Running Shorts</h1>
                        <h3>$19.99</h3>
                    </div>
                </Link>
                <Link to="/Item" onClick={() => handleItemPreview("Flexible Shorts", [Mens_flexible, Mens_flexible2, Mens_flexible3], 19.99, "MEN")}>
                    <div className="product">
                        <img src={Mens_flexible} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Flexible Shorts</h1>
                        <h3>$19.99</h3>
                    </div>
                </Link>
            </div>
            <h2 id="Joggers">JOGGERS</h2>
            <div className="product_container">
                <Link to="/Item" onClick={() => handleItemPreview("Athletic Joggers", [Mens_athletic, Mens_athletic2, Mens_athletic3], 27.50, "MEN")}>
                    <div className="product">
                        <img src={Mens_athletic} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Athletic Joggers</h1>
                        <h3>$27.50</h3>
                    </div>
                </Link>
                <Link to="/Item" onClick={() => handleItemPreview("Classic Joggers", [Mens_classic, Mens_classic2, Mens_classic3], 24.99, "MEN")}>
                    <div className="product">
                        <img src={Mens_classic} alt=""/>
                        <p>MEN</p>
                        <h1 className="product_title">Classic Joggers</h1>
                        <h3>$24.99</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}
