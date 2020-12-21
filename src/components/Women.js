import React from 'react'
import {Link} from 'react-router-dom'

//IMAGES
import Women_shirt from '../images/Women_shirt.jpg'
import Women_shirt2 from '../images/Women_shirt2.jpg'
import Women_shirt3 from '../images/Women_shirt3.jpg'
import Women_tank from '../images/Women_tank.jpg'
import Women_tank2 from '../images/Women_tank2.jpg'
import Women_tank3 from '../images/Women_tank3.jpg'
import Women_athletic from '../images/Women_athletic.jpg'
import Women_athletic2 from '../images/Women_athletic2.jpg'
import Women_athletic3 from '../images/Women_athletic3.jpg'
import Women_lifestyle from '../images/Women_lifestyle.jpg'
import Women_lifestyle2 from '../images/Women_lifestyle2.jpg'
import Women_lifestyle3 from '../images/Women_lifestyle3.jpg'
import Women_classic from '../images/Women_classic.jpg'
import Women_classic2 from '../images/Women_classic2.jpg'
import Women_classic3 from '../images/Women_classic3.jpg'
import Women_eclipse from '../images/Women_eclipse1.jpg'
import Women_eclipse2 from '../images/Women_eclipse2.jpg'
import Women_eclipse3 from '../images/Women_eclipse3.jpg'

export default function Women(props) {
    const handleItemPreview = (itemTitle, imageArray, itemPrice, category) => {
        props.handleItemPreview(itemTitle, imageArray, itemPrice, category)
        window.scrollTo({
            top: 0
        })
    }

    return (
        <div>
            <div className="Page">
                <div className="intro_container" id="container_women">
                    <h1>Shop Women</h1>
                </div>
                <h2 id="Shirts">SHIRTS</h2>
                <div className="product_container">
                    <Link to="/Item" onClick={() => handleItemPreview("Classic Tank", [Women_tank, Women_tank2, Women_tank3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_tank} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Classic Tank</h1>
                            <h3>$12.50</h3>
                        </div>
                    </Link>
                    <Link to="/Item" onClick={() => handleItemPreview("Dryfit Shirt", [Women_shirt, Women_shirt2, Women_shirt3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_shirt} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Dryfit Shirt</h1>
                            <h3>$14.50</h3>
                        </div>
                    </Link>
                </div>
                <h2 id="Shorts">SHORTS</h2>
                <div className="product_container">
                    <Link to="/Item" onClick={() => handleItemPreview("Athletic Shorts", [Women_athletic, Women_athletic2, Women_athletic3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_athletic} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Athletic Shorts</h1>
                            <h3>$17.50</h3>
                        </div>
                    </Link>
                    <Link to="/Item" onClick={() => handleItemPreview("Lifestyle Shorts", [Women_lifestyle, Women_lifestyle2, Women_lifestyle3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_lifestyle} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Lifestyle Shorts</h1>
                            <h3>$14.99</h3>
                        </div>
                    </Link>
                </div>
                <h2 id="Leggings">LEGGINGS</h2>
                <div className="product_container" style={{marginBottom: "100px"}}>
                    <Link to="/Item" onClick={() => handleItemPreview("Classic Leggings", [Women_classic, Women_classic2, Women_classic3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_classic} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Classic Leggings</h1>
                            <h3>$17.50</h3>
                        </div>
                    </Link>
                    <Link to="/Item" onClick={() => handleItemPreview("Eclipse1 Leggings", [Women_eclipse, Women_eclipse2, Women_eclipse3], 14.99, "WOMEN")}>
                        <div className="product">
                            <img loading="lazy" src={Women_eclipse} alt=""/>
                            <p>WOMEN</p>
                            <h1 className="product_title">Eclipse1 Leggings</h1>
                            <h3>$19.99</h3>
                        </div>
                    </Link>
                </div>
            </div> 
        </div>
    )
}
