import React from 'react'
//Components
import AddtoBag from './AddtoBag'


//IMAGES
import Women_shirt from '../images/Women_shirt.jpg'
import Women_shirt2 from '../images/Women_shirt2.jpg'
import Women_short from '../images/Women_short.jpg'
import Women_short2 from '../images/Women_short2.jpg'
import Women_legging from '../images/Women_legging.jpg'
import Women_legging2 from '../images/Women_legging2.jpg'

export default function Women(props) {
    return (
        <div>
            <div className="Page">
                <div className="intro_container" id="container_women">
                    <h1>Shop Women</h1>
                </div>
                <h2 id="Shirts">SHIRTS</h2>
                <div className="product_container">
                    <div className="product">
                        <img src={Women_shirt} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Classic Tank</h1>
                        <h3>$12.50</h3>
                    </div>
                    <div className="product">
                        <img src={Women_shirt2} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Longsleeve</h1>
                        <h3>$14.50</h3>
                    </div>
                </div>
                <h2 id="Shorts">SHORTS</h2>
                <div className="product_container">
                    <div className="product">
                        <img src={Women_short} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Athletic Shorts</h1>
                        <h3>$17.50</h3>
                    </div>
                    <div className="product">
                        <img src={Women_short2} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Flexible Shorts</h1>
                        <h3>$14.99</h3>
                    </div>
                </div>
                <h2 id="Leggings">LEGGINGS</h2>
                <div className="product_container">
                    <div className="product">
                        <img src={Women_legging} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Classic Leggings</h1>
                        <h3>$17.50</h3>
                    </div>
                    <div className="product">
                        <img src={Women_legging2} alt=""/>
                        <p>WOMEN</p>
                        <h1 className="product_title">Eclipse1 Leggings</h1>
                        <h3>$19.99</h3>
                    </div>
                </div>
            </div> 
        </div>
    )
}
